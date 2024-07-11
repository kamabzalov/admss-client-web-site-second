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
                            <li className="nav-item dropdown active">
                                <a className="nav-link dropdown-toggle" href="/"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
