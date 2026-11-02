function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <h1>BorrowCircle</h1>
                    </li>
                    <li>
                        <input
                            type="text"
                            id="filter"
                            placeholder="Search for..."
                            className="w-1/2 mx-auto block border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border"
                        /></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;