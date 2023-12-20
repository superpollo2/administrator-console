import { Inter } from 'next/font/google';
import React from 'react';
import styles from '@/styles/TopBar.module.css'

const inter = Inter({ subsets: ['latin'] });

const TopBar = () => {
	return (
		<div className={styles.topBarContainer}>
			<div className={styles.profile}>
				<span className={`${inter.className} font-bold`}>Pepito Pérez</span>
				<span>Administrativo</span>
			</div>
			<div>
				<img src='/images/avatar.png' alt='' className={styles.img} />
			</div>
		</div>
	);
};

export { TopBar };
