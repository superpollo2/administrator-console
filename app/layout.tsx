/* eslint-disable react/react-in-jsx-scope */
'use client';
import { Inter } from 'next/font/google';
import 'styles/globals.css';
import { SideNav } from '@/components/Layout/SideNav/SideNav';
import { TopBar } from '@/components/Layout/topBar/TopBar';
import { Footer } from '@/components/Layout/footer/Footer';
import styles from '@/styles/SideNav.module.css'

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
			<body className={`${inter.className} `}>
				<div className='container-body'>
					<div className={styles.navContent}>
						<SideNav />
					</div>
					<div className='bodyContent '>
						<div className='absolute top-0 right-0'>
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
