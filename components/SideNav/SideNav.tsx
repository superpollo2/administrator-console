import { NavLinks } from "./NavLinks";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SideNav = () => {
    return (
        <div className="container">
            <nav>
                <div className="containe-logo">
                    <img src="/images/logo.png" alt ="logo lis" width={208.32} height={188} />
                    <span className={`${inter.className} container-logo--title`}>LIS</span>
                </div>
                <div className="container-links">
                    <NavLinks />
                </div>
                
            </nav>
        </div>
    );
}

export { SideNav }