const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ["@mui/system", "@mui/material", "@mui/icons-material"],
	modularizeImports: {
		"@mui/material/?(((\\w*)?/?)*)": {
			transform: "@mui/material/{{ matches.[1] }}/{{member}}",
		},
		"@mui/icons-material/?(((\\w*)?/?)*)": {
			transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
		},
	},
};
module.exports = async phase => {
	/**
	 * @type {import('next').NextConfig}
	 */

	const plugins = []; //All your plugins go into this array

	return plugins.reduce((acc, next) => next(acc), nextConfig);
};
