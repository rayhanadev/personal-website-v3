import admin from 'firebase-admin';

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
		databaseURL: 'https://rayhanadev-website-default-rtdb.firebaseio.com'
	});
}

export default admin.database();
