export const config = {
    runtime: 'nodejs',
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export default async function handler(req: Request): Promise<Response> {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: corsHeaders(),
        });
    }

    if (!RESEND_API_KEY) {
        return new Response(JSON.stringify({ error: 'Server misconfigured' }), {
            status: 500,
            headers: corsHeaders(),
        });
    }

    let body: { name?: string; email?: string; message?: string };
    try {
        body = await req.json();
    } catch {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
            status: 400,
            headers: corsHeaders(),
        });
    }

    const { name, email, message } = body;

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: 'Missing fields' }), {
            status: 400,
            headers: corsHeaders(),
        });
    }

    try {
        const res = await fetch('https://api.resend.com/emails', {
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

        if (!res.ok) {
            const err = await res.text();
            console.error('Resend error:', res.status, err);
            return new Response(JSON.stringify({ error: 'Failed to send' }), {
                status: 500,
                headers: corsHeaders(),
            });
        }

        return new Response(JSON.stringify({ ok: true }), {
            status: 200,
            headers: corsHeaders(),
        });
    } catch (error) {
        console.error('Contact API error:', error);
        return new Response(JSON.stringify({ error: 'Internal error' }), {
            status: 500,
            headers: corsHeaders(),
        });
    }
}

function corsHeaders() {
    return {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
}
