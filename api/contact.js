const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const body = typeof req.body === 'string' ? safeJsonParse(req.body) : (req.body || {})
  const { name = '', email = '', message = '', website = '' } = body

  // Honeypot field: real visitors never fill this, simple bots often do.
  if (website) {
    return res.status(200).json({ message: 'Message sent successfully.' })
  }

  const cleanName = String(name).trim()
  const cleanEmail = String(email).trim()
  const cleanMessage = String(message).trim()

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ message: 'Please fill in your name, email, and message.' })
  }

  if (!emailPattern.test(cleanEmail)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  if (cleanName.length > 120 || cleanEmail.length > 160 || cleanMessage.length > 4000) {
    return res.status(400).json({ message: 'Please shorten your message and try again.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'kopiyodiana@gmail.com'
  const fromEmail = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !fromEmail) {
    return res.status(500).json({
      message: 'Contact form is not configured yet. Please email me directly at kopiyodiana@gmail.com.',
    })
  }

  const subject = `Portfolio message from ${cleanName}`
  const text = [
    `Name: ${cleanName}`,
    `Email: ${cleanEmail}`,
    '',
    cleanMessage,
  ].join('\n')

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17324d;">
      <h2 style="color: #001b33;">New portfolio message</h2>
      <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br>')}</p>
    </div>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject,
        text,
        html,
      }),
    })

    if (!response.ok) {
      return res.status(502).json({
        message: 'The message could not be sent right now. Please email me directly at kopiyodiana@gmail.com.',
      })
    }

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch {
    return res.status(500).json({
      message: 'Something went wrong. Please email me directly at kopiyodiana@gmail.com.',
    })
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return {}
  }
}
