import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';


type Props = {
    route: string,
    label: string,
    icon: IconType
}

function NavLink({route, label, icon: Icon}: Props) {
	return (
        <Link href={route} className='link'>
            {Boolean(Icon) && <Icon />}
            <span>{label}</span>
        </Link>
    );
}

export default NavLink;
