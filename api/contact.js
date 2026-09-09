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
                subject: `Nouveau message du portfolio — ${name}`,
                text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
            }),
        });

        if (!resendRes.ok) {
            const err = await resendRes.text();
            console.error('Resend error:', resendRes.status, err);
            return res.status(500).json({ error: 'Failed to send' });
        }

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Contact API error:', error);
        return res.status(500).json({ error: 'Internal error' });
    }
}
