import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const myFont = localFont({ src: './fonts/SF-PRO.ttf' });

export const metadata: Metadata = {
	title: 'Sauradip Ghosh',
	description: 'Portfolio',
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
