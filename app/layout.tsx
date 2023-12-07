/* eslint-disable react/react-in-jsx-scope */
'use client';
import { Inter } from 'next/font/google';
import 'styles/globals.css';
import { SideNav } from '@/components/SideNav/SideNav';
import { TopBar } from '@/components/topBar/TopBar';

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
			<body className={`${inter.className} flex flex-row `}>
				<div className='navContent'>
					<SideNav />
				</div>
				<div className='bodyContent '>
					<div className='absolute top-0 right-0'>
						<TopBar />
					</div>
					{children}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
