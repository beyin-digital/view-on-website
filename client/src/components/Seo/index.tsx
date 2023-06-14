import Head from "next/head";
import React from "react";

const Seo = ({ title, descShort, descLong, keyword,canonical }: any) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>View On Website | {title}</title>
				<meta name="description" content={descLong} />
				<meta name="keyword" content={keyword} />
				<meta name="application-name" content="VIEW ON WEBSITE" />
				<meta name="apple-mobile-web-app-title" content="VIEW ON WEBSITE" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="image_src" type="image/svg" href="/logo.svg" />
				<meta name="msapplication-config" content="/pwa/browserconfig.xml" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/pwa/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/pwa/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/pwa/favicon-16x16.png"
				/>
				<link
					rel="mask-icon"
					href="/pwa/safari-pinned-tab.svg"
					color="#171b1c"
				/>
				<meta name="msapplication-TileColor" content="#000000" />
				<meta
					name="msapplication-TileImage"
					content="/pwa/mstile-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				<link rel="manifest" href="/pwa/manifest.json" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://viewonwebsite.com" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={descShort} />
				<meta name="twitter:image" content="https://viewonwebsite.com" />
				<meta name="twitter:creator" content="" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={descShort} />
				<meta property="og:site_name" content="VIEW ON WEBSITE" />
				<meta property="og:url" content="https://www.viewonwebsite.com" />
				<meta
					property="og:image"
					content="https://website-vow.vercel.app/images/logo.svg"
				/>
				<link
					rel="canonical"
					href={canonical}
				/>
			</Head>
		</>
	);
};

export default Seo;
