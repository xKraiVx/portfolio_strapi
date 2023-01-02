module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	url: env('HEROKU_URL'),
	proxy: true,
	app: {
		keys: env.array("APP_KEYS", ['test1', 'test2']),
	},
	admin: {
		auth: {
			secret: env('ADMIN_JWT_SECRET'/* , 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' */),
		},
	},
});