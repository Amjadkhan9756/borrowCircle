import Footer from './Footer.tsx';
import Navbar from './Navbars/Navbar.tsx';
import Sidebar from './Navbars/Sidebar.tsx'; // adjust to the real path
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Items from './pages/Items.tsx';
import Chat from './pages/Chats.tsx';
import AddItem from './pages/Additems.tsx';
import YourOrders from './pages/YourOrder.tsx';
import SignOut from './pages/SingOut.tsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/yourorder" element={<YourOrders />} />
            <Route path="/signout" element={<SignOut />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;