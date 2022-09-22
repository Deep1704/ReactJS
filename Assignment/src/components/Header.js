import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <ul class="nav justify-content-center text-bg-warning p-3 shadow p-3 mb-5 bg-body rounded">
                <li class="nav-item">
                    <Link class="nav-link active link-dark" aria-current="page" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active link-dark" aria-current="page" to="/Faculty">Faculty</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active link-dark" aria-current="page" to="/Api">Api</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active link-dark" aria-current="page" to="/About">About</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link active link-dark" aria-current="page" to="/Contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}