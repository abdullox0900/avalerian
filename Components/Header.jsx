import Image from 'next/image'

import Link from "next/link"
import Navbar from "./Navbar";

import Logo from "../public/Svg/logo-img.svg"

function Header() {
    return (
        <>
            <header className="header header-container">
                <Link href='/'>
                    <Image src={Logo} width={150} height={35} />            
                </Link>

                <Navbar />
            </header>
        </>
    )
}

export default Header