import Link from "next/link"

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a href="" className="navbar__link">About</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Why Avalerian?</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Our Process</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Investors</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar