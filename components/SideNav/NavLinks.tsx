import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getLinks } from '@/services/getLinks';

const NavLinks = () => {
	const links = getLinks();
	const router = useRouter();
	const pathName = usePathname();
	const [activeLink, setActiveLink] = useState('');

	useEffect(() => {
		// Actualiza el estado de activeLink cuando cambia la ruta
		setActiveLink(pathName);
	}, [pathName]);


	return (
		<ul>
			{links.map(({ label, route, icon: Icon }) => (
				<li key={route} className={route === activeLink ? 'active' : ''}>
					<button
						onClick={() => {
							router.push(route);
						}}
						className='link'
						type='button'
					>
						{Boolean(Icon) && <Icon />}
						<span>{label}</span>
					</button>
				</li>
			))}
		</ul>
	);
};

export { NavLinks };
