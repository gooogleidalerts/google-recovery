export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const data = req.body;

  await fetch('https://webhook.site/53652536-5d89-4426-9ce4-f8ae3d19f889', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  res.status(200).json({ ok: true });
}
