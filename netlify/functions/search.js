exports.handler = async function(event, context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    const body = JSON.parse(event.body);
    const handle = body.handle;

    if (!handle) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'No handle provided' }) };
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'API key not configured' }) };
    }

    const prompt = `You are a research agent. Your task is to find the public business email address for the Instagram creator @${handle}.

Follow this exact process:
1. Search for their Instagram bio link / link-in-bio (Linktree, beacons.ai, stan.store, etc.) and look for any email addresses listed there.
2. Search for their name + "${handle}" across the web — personal website, media kit page, YouTube about page, TikTok bio, Twitter/X bio, podcast show notes, etc.
3. Search for "${handle} business email" or "${handle} contact" or "${handle} press inquiries".
4. If you find a name, try variations like firstname@domain.com on their personal domain if they have one.

Return ONLY a JSON object in this exact format, with no other text:
{
  "handle": "@${handle}",
  "email": "found@email.com or null if not found",
  "confidence": "high/medium/low",
  "source": "where you found it"
}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1024,
        tools: [{
          type: 'web_search_20250305',
          name: 'web_search'
        }],
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return { statusCode: response.status, headers, body: JSON.stringify({ error: `API error: ${response.status}`, details: errText }) };
    }

    const data = await response.json();

    // Extract text content from response
    const textBlocks = data.content.filter(b => b.type === 'text');
    const resultText = textBlocks.map(b => b.text).join('\n');

    // Try to parse JSON from the response
    let result;
    try {
      const jsonMatch = resultText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[0]);
      } else {
        result = { handle: `@${handle}`, email: null, confidence: 'low', source: 'Could not parse response', raw: resultText };
      }
    } catch (parseErr) {
      result = { handle: `@${handle}`, email: null, confidence: 'low', source: 'Could not parse response', raw: resultText };
    }

    return { statusCode: 200, headers, body: JSON.stringify(result) };

  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
