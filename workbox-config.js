module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,jpg,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};