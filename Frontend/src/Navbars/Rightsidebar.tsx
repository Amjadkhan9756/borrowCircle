import { NavLink } from "react-router-dom";

function Rightsidebar() {
    return (
        <aside className="absolute right-0 top-0 min-h-screen w-56 bg-gray-800 p-4 text-white">
            <ul className="space-y-4">
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/youritems">Your Items</NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default Rightsidebar;