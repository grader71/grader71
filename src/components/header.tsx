import '@/styles/header.css'

const header = ({ selected, username }: { selected: string, username: string }) => {
    return (
        <div>
            <ul>
                <li className={"Home" === selected ? "menu_selected" : "menu"}>
                    <a href="/">Home</a>
                </li>
                <li className={"Problems" === selected ? "menu_selected" : "menu"}>
                    <a href="/Problems">Problems</a>
                </li>
                <li className={"Submissions" === selected ? "menu_selected" : "menu"}>
                    <a href="/Submissions">Submissions</a>
                </li>
                <li className={"About" === selected ? "menu_selected" : "menu"}>
                    <a href="/About">About</a>
                </li>
                <li className={"Profile" === selected ? "menu_selected" : "menu"}>
                    <a href="/Proflie">{username}</a>
                </li>
            </ul>
        </div>
    );
}

export default header
