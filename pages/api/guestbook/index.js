import db from '../../../libs/firebase.js';
import session from '../../../libs/session.js';

export default async (req, res) => {
  session(req, res);

  const { login, email } = req.session;
	const snapshot = await db.ref().child('guestbook');

  // if (req.method === 'GET') {
  //   const entries = ((await snapshot.once('value')).val() || [])
  //     .map((entry) => JSON.parse(entry))
  //     .sort((a, b) => b.id - a.id);

  //   return res.json(entries);
  // }

  if (req.method === 'GET') {
    if (!login) {
      return res.status(403).send('Unauthorized');
    }

    const id = Date.now();
    const newEntry = {
      id,
      email,
      updated_at: Date.now(),
      body: (req.query.body || '').slice(0, 500),
      created_by: login
    };

    await snapshot.update(id, newEntry);
    return res.status(200).json(newEntry);
  }

  return res.send('Method not allowed.');
};