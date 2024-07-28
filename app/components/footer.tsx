import Link from "next/link";

export default function Footer() {
    return (
        <footer className="main-footer-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-menu">
                            <ul>
                                <li className="li">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="li">
                                    <Link href="/contacts">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
