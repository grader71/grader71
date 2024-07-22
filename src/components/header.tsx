import '@/styles/header.css'

const Header = ({ selected, username }: { selected: string, username: string }) => {
    return (
        <div className="navigation_bar">
            {/* <div className="logo">
                (logo)
            </div> */}
            <a className={"Home" === selected ? "menu_selected" : "menu"} href="/">Home</a>
            <a className={"Problems" === selected ? "menu_selected" : "menu"} href="/Problems">Problems</a>
            <a className={"Submissions" === selected ? "menu_selected" : "menu"} href="/Submissions">Submissions</a>
            <a className={"About" === selected ? "menu_selected" : "menu"} href="/About">About</a>
            <a className={"Profile" === selected ? "account_menu_selected" : "account_menu"} href="/Proflie">{username}</a>
        </div>
    );
}

export default Header
