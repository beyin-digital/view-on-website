/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: { esmExternals: "loose" },
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
