export default async function handler(req, res) {
  // Sirf POST allow karo
  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
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
          content: `You are DigiD, an expert full-stack developer. Generate a complete, production-ready single HTML file with inline CSS and JavaScript for: ${prompt}. Output ONLY the HTML code, no explanations, no markdown fences. Use Tailwind CDN if needed. Make it fully functional and responsive.`
        }],
        temperature: 0.7,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      throw new Error('Groq API error');
    }

    const data = await response.json();
    const htmlCode = data.choices[0].message.content.trim();

    res.status(200).json({ html: htmlCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
