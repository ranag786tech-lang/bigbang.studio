module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{
          role: 'user',
          content: `You are DigiD, an expert full-stack developer. Generate a complete, production-ready single HTML file with inline CSS and JavaScript for: ${prompt}. Output ONLY the HTML code.`
        }],
        temperature: 0.7,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq API error', response.status, errText);
      return res.status(502).json({ error: 'Upstream API error' });
    }

    const data = await response.json();
    const htmlCode = data?.choices?.[0]?.message?.content?.trim() || '';

    if (!htmlCode) {
      return res.status(500).json({ error: 'No HTML generated' });
    }

    // Return { code } so frontend can use data.code
    return res.status(200).json({ code: htmlCode });
  } catch (error) {
    console.error('generate error', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};