import '@/styles/header.css'
import Link from 'next/link'

const Header = ({ selected, username }: { selected: string, username: string }) => {
    return (
        <div className="navigation_bar">
            {/* <div className="logo">
                (logo)
            </div> */}
            <Link className={"Home" === selected ? "menu_selected" : "menu"} href="/">Home</Link>
            <Link className={"Problems" === selected ? "menu_selected" : "menu"} href="/Problems">Problems</Link>
            <Link className={"Submissions" === selected ? "menu_selected" : "menu"} href="/Submissions">Submissions</Link>
            <Link className={"About" === selected ? "menu_selected" : "menu"} href="/About">About</Link>
            <Link className={"Profile" === selected ? "account_menu_selected" : "account_menu"} href="/Proflie">{username}</Link>
        </div>
    );
}

export default Header
