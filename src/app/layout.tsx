import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

import { Navbar, StayInTheLoop } from "@/components/shared";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title:
		"ARQ - Transforming Discipleship, Transforming Lives | Spirit-Led Faith Journey",
	description:
		"Join ARQ's revolutionary 3-month discipleship journey that transforms lives through actionable faith, relational growth, and deep conversations. Discover life-on-life discipleship outside church walls in the Philippines.",
	keywords: [
		"discipleship",
		"faith journey",
		"Christian community",
		"spiritual growth",
		"Philippines discipleship",
		"life transformation",
		"Christian discipleship program",
		"faith community",
		"spiritual mentorship",
		"Christian leadership",
		"actionable faith",
		"relational discipleship",
		"Spirit-led journey",
		"Christian transformation",
		"discipleship training",
		"faith equipping",
		"Christian development",
		"life-on-life discipleship",
		"small group ministry",
		"Christian mentoring",
	],
	authors: [{ name: "ARQ Team" }],
	creator: "ARQ Philippines",
	publisher: "ARQ Philippines",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://arq-philippines.com"), // Replace with your actual domain
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://arq-philippines.com", // Replace with your actual domain
		title: "ARQ - Transforming Discipleship, Transforming Lives",
		description:
			"Join ARQ's revolutionary 3-month discipleship journey that transforms lives through actionable faith, relational growth, and deep conversations. Discover life-on-life discipleship outside church walls in the Philippines.",
		images: [
			{
				url: "/opengraph-image.jpg",
				width: 1200,
				height: 630,
				alt: "ARQ Discipleship Journey - Transforming Lives Through Faith",
			},
		],
		siteName: "ARQ Philippines",
	},
	twitter: {
		card: "summary_large_image",
		title: "ARQ - Transforming Discipleship, Transforming Lives",
		description:
			"Join ARQ's revolutionary 3-month discipleship journey that transforms lives through actionable faith, relational growth, and deep conversations.",
		images: ["/opengraph-image.jpg"],
		creator: "@ARQPhilippines", // Replace with your actual Twitter handle
		site: "@ARQPhilippines", // Replace with your actual Twitter handle
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	category: "religion",
	classification: "Christian Discipleship Platform",
	other: {
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "default",
		"apple-mobile-web-app-title": "ARQ",
		"mobile-web-app-capable": "yes",
		"msapplication-TileColor": "#1a2e66",
		"theme-color": "#1a2e66",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* JSON-LD Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "ARQ Philippines",
							alternateName: "ARQ",
							description:
								"ARQ is a Spirit-led, relational, and actionable 3-month discipleship journey that transforms lives through real-world conversations and community building.",
							url: "https://arq-philippines.com", // Replace with your actual domain
							logo: "/images/arq/arq-blue-logo-with-name.png", // Replace with your actual domain
							sameAs: [
								"https://facebook.com/ARQPhilippines", // Replace with actual social media links
								"https://twitter.com/ARQPhilippines",
								"https://instagram.com/ARQPhilippines",
							],
							contactPoint: {
								"@type": "ContactPoint",
								contactType: "customer service",
								areaServed: "Philippines",
								availableLanguage: "English",
							},
							areaServed: {
								"@type": "Country",
								name: "Philippines",
							},
							serviceType: "Christian Discipleship Training",
							audience: {
								"@type": "Audience",
								audienceType: "Christians seeking spiritual growth",
							},
							offers: {
								"@type": "Offer",
								itemOffered: {
									"@type": "Service",
									name: "ARQ Discipleship Journey",
									description:
										"3-month discipleship program focused on actionable faith, relational growth, and deep spiritual conversations",
								},
								price: "0",
								priceCurrency: "PHP",
							},
						}),
					}}
				/>

				{/* Additional SEO Meta Tags */}
				<meta name="geo.region" content="PH" />
				<meta name="geo.country" content="Philippines" />
				<meta name="ICBM" content="14.5995, 120.9842" />
				<meta
					name="DC.title"
					content="ARQ - Transforming Discipleship, Transforming Lives"
				/>
				<meta name="DC.creator" content="ARQ Philippines" />
				<meta
					name="DC.subject"
					content="Christian Discipleship, Faith Journey, Spiritual Growth"
				/>
				<meta
					name="DC.description"
					content="Join ARQ's revolutionary 3-month discipleship journey that transforms lives through actionable faith, relational growth, and deep conversations."
				/>
				<meta name="DC.publisher" content="ARQ Philippines" />
				<meta name="DC.contributor" content="ARQ Team" />
				<meta name="DC.date" content="2024" />
				<meta name="DC.type" content="website" />
				<meta name="DC.format" content="text/html" />
				<meta name="DC.identifier" content="https://arq-philippines.com" />
				<meta name="DC.language" content="en" />
				<meta name="DC.coverage" content="Philippines" />
				<meta name="DC.rights" content="Copyright ARQ Philippines 2025" />

				{/* Favicon and App Icons */}
				<link rel="icon" href="/app/favicon.ico" />
				<link rel="apple-touch-icon" href="/images/arq/arq-blue-logo.png" />

				{/* Preconnect for Performance */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body
				className={`relative ${openSans.variable} ${montserrat.variable} antialiased`}
			>
				<div className="w-full fixed top-0 z-50 h-12">
					<Navbar />
				</div>

				<main className="bg-white-soft">{children}</main>

				<StayInTheLoop />
			</body>
		</html>
	);
}
