import db from '../../../libs/firebase.js';

export default async function handler(req, res) {
	switch(req.method) {
		case 'GET': {
			const snapshot = await db.ref('views').child(req.query.slug).once('value');
			const views = snapshot.val();

			return res.status(200).json({ total: views });
		}
		case 'POST': {
			const ref = db.ref('views').child(req.query.slug);
			const { snapshot } = await ref.transaction((currentViews) => {
				if (currentViews === null) return 1;
				return currentViews + 1;
			});

			return res.status(200).json({
				total: snapshot.val()
			});
		}
		default: {
			return res.status(405).json({
				status: 405,
				error: 'Method Not Allowed.'
			});
		}
	}
};
