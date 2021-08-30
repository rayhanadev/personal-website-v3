import session from '../../libs/session.js';

export default async function handler(req, res) {
	session(req, res);

	if (req.method !== 'GET') return res.send('Method Not Allowed.');
	return res.json({ name: req.session.login });
}