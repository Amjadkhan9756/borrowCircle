import { NavLink } from 'react-router-dom';

function Leftsidebar() {
    return (
        <>
            <aside className="left-0 top-0 min-h-screen w-56 bg-gray-800 p-4 text-white">
                <ul className="space-y-4">
                    <li>
                        <NavLink to="/">Home</NavLink>

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

        </aside >

        </>
    )
}

export default Leftsidebar;