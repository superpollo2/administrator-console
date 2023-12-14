import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

const TopBar = () => {
	return (
		<div className='container-topbar'>
			<div className='flex flex-col'>
				<span className={`${inter.className} font-bold`}>Pepito Pérez</span>
				<span>Administrativo</span>
			</div>
			<div>
				<img src='/images/avatar.png' alt='' className='w-16' />
			</div>
		</div>
	);
};

export { TopBar };
