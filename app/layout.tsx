/* eslint-disable react/react-in-jsx-scope */
'use client';
import '@/styles/globals.css'
import { Inter } from 'next/font/google';
import { SideNav } from '@/components/Layout/SideNav/SideNav';
import { TopBar } from '@/components/Layout/topBar/TopBar';
import { Footer } from '@/components/Layout/footer/Footer';
import sideNavstyles from '@/styles/SideNav.module.css'
import layoutStyles from '@/styles/Layout.module.css'

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>
			<head>
				<title>Consola de Administrador</title>
			</head>
			<body className={`${inter.className} ${layoutStyles.body}`}>
				<div className={layoutStyles.bodyContainer}>
					<div className={sideNavstyles.navContent}>
						<SideNav />
					</div>
					<div className={layoutStyles.bodyContent}>
						<div className={layoutStyles.topBarContainer}>
							<TopBar />
						</div>
						{children}
					</div>
				</div>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
