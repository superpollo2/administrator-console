import { NavLinks } from './NavLinks';
import { Inter } from 'next/font/google';
import React from 'react';
import styles from '@/styles/SideNav.module.css'
const inter = Inter({ subsets: ['latin'] });

const SideNav = () => {
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<div className={styles.logoContainer}>
					<img
						src='/images/logo.png'
						alt='logo lis'
						width={208.32}
						height={188}
					/>
					<span className={`${inter.className} ${styles.containerLogoTitle}`}>
						LIS
					</span>
				</div>
				<div className={styles.linksContainer}>
					<NavLinks />
				</div>
			</nav>
		</div>
	);
};

export { SideNav };
