import Link from "next/link";

export default function Header() {
    return (
        <header className="main-header sticky-header header-with-top" id="main-header-2">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand logos" href="/">
                        Logo
                    </a>
                    <button className="navbar-toggler" type="button" id="drawer">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="navbar-collapse collapse w-100 justify-content-end" id="navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <Link className="nav-link" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" href="/contacts">
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
