import Head from "next/head";
const Seo = ({ title, description, keyword }: any) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="application-name" content="VIEW ON WEBSITE" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="VIEW ON WEBSITE" />
				<meta name="description" content={description} />
				<meta name="keyword" content={keyword} />
				<link rel="icon" href="/images/logo.svg" />
				<meta name="mobile-web-app-capable" content="yes" />
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
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://website-vow.vercel.app" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content="https://website-vow.vercel.app" />
				<meta name="twitter:creator" content="" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:site_name" content="VIEW ON WEBSITE" />
				<meta property="og:url" content="https://website-vow.vercel.app" />
				<meta
					property="og:image"
					content="https://website-vow.vercel.app/images/logo.svg"
				/>
			</Head>
		</>
	);
};

export default Seo;
