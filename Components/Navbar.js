import Link from "next/link"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link href="/" className="navbar__link">About</Link>
                    </li>
                    <li className="navbar__item">
                        <Link href="" className="navbar__link">Why Avalerian?</Link>
                    </li>
                    <li className="navbar__item">
                        <Link href="" className="navbar__link">Our Process</Link>
                    </li>
                    <li className="navbar__item">
                        <Link href="" className="navbar__link">Investors</Link>
                    </li>
                    <li className="navbar__item">
                        <Link href="" className="navbar__link">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar