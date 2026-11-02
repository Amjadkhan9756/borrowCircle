import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <aside className="min-h-screen w-56 shrink-0 bg-gray-800 p-4 text-white">                <nav>
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>

                    </li>
                    <li>
                        <NavLink to="/items">Items </NavLink>
                    </li>
                    <li>
                        <NavLink to="/chat">Chat</NavLink>
                    </li>
                    <li>
                        <NavLink to="/additem">Add Item</NavLink>
                    </li>
                    <li>
                        <NavLink to="/yourorder">Your Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signout">Sign Out</NavLink>
                    </li>
                </ul>

            </nav>
            </aside>

        </>
    )
}

export default Sidebar;