'use client';
import Head from 'next/head';
import { Inter } from "next/font/google";
import "styles/globals.css"
import {SideNav} from "@/components/SideNav/SideNav"
import { TopBar } from '@/components/topBar/TopBar';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Consola de Administrador</title>
      </head>
      <body className={`inter.className flex flex-row  `}>
        <div className='navContent'>
          <SideNav />
        </div> 
        <div className='bodyContent '>
          <div className='absolute top-0 right-0'><TopBar/></div>
        {children}
        </div> 
      </body>
    </html>
  );
}
