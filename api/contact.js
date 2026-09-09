export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
        return res.status(500).json({ error: 'Server misconfigured' });
    }

    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #211d14; border-bottom: 2px solid #a8831f; padding-bottom: 8px;">
        Nouveau message du portfolio
      </h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
      <hr style="border: none; border-top: 1px solid #e6ddd3; margin: 16px 0;" />
      <p style="white-space: pre-wrap; line-height: 1.6; color: #4a3728;">${message}</p>
      <hr style="border: none; border-top: 1px solid #e6ddd3; margin: 16px 0;" />
      <p style="font-size: 12px; color: #999;">
        Envoyé depuis le formulaire de contact — modupes.vercel.app
      </p>
    </div>`;

    try {
        const resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Modupe Portfolio <onboarding@resend.dev>',
                to: ['esindelabi@gmail.com'],
                reply_to: email,
                subject: `[Portfolio] Message de ${name}`,
                text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
                html,
            }),
        });

        const body = await resendRes.text();

        if (!resendRes.ok) {
            console.error('Resend error:', resendRes.status, body);
            return res.status(500).json({ error: 'Failed to send', details: body });
        }

        console.log('Email sent:', body);
        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Contact API error:', error);
        return res.status(500).json({ error: 'Internal error' });
    }
}
