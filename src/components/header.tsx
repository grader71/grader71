import '@/styles/header.css'

const Header = ({ selected, username }: { selected: string, username: string }) => {
    return (
        <div className="navigation_bar">
            <div className="logo">
                (logo)
            </div>
            <div className={"Home" === selected ? "menu_selected" : "menu"}>
                <a className="header_link" href="/">Home</a>
            </div>
            <div className={"Problems" === selected ? "menu_selected" : "menu"}>
                <a className="header_link" href="/Problems">Problems</a>
            </div>
            <div className={"Submissions" === selected ? "menu_selected" : "menu"}>
                <a className="header_link" href="/Submissions">Submissions</a>
            </div>
            <div className={"About" === selected ? "menu_selected" : "menu"}>
                <a className="header_link" href="/About">About</a>
            </div>
            <div className={"Profile" === selected ? "menu_selected" : "menu"}>
                <a className="header_link" href="/Proflie">{username}</a>
            </div>
        </div>
    );
}

export default Header
