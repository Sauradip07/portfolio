import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Head from 'next/head';
import './globals.css';

const myFont = localFont({ src: './fonts/SF-PRO.ttf' });

export const metadata: Metadata = {
	title: 'Sauradip Ghosh',
	description: 'Portfolio',
	icons: {
		icon:['/favicon.ico?v=4'],
		apple:['/apple-touch-icon.png?v=4'],
		shortcut:['/favicon.ico?v=4'],
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={myFont.className}>{children}</body>
		</html>
	);
}
