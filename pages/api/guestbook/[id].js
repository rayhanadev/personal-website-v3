import db from '../../../libs/firebase.js';
import session from '../../../lib/session.js';

console.log(db)
export default async (req, res) => {
  session(req, res);

  const { id } = req.query;
  const { login, email } = req.session;
	const snapshot = await db.ref().child('guestbook');
	const entry = (await snapshot.once('value')).val() || null;

  if (req.method === 'GET') {
    return res.json(entry);
  }

  if (req.method === 'DELETE') {
    if (!login || login !== entry.created_by) {
      return res.status(403).send('Unauthorized');
    }

    await snapshot.update('');
    return res.status(204).json({});
  }

  if (req.method === 'PUT') {
    if (!login || login !== entry.created_by) {
      return res.status(403).send('Unauthorized');
    }

    const updated = {
      id,
      email,
      updated_at: Date.now(),
      body: (req.body.body || '').slice(0, 500),
      created_by: login
    };

    await snapshot.update(updated);
    return res.status(201).json(updated);
  }

  return res.send('Method Not Allowed.');
};