import Footer from './Footer.tsx';
import Navbar from './Navbars/Navbar.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Items from './pages/Items.tsx';
import Chat from './pages/Chats.tsx';
import AddItem from './pages/Additems.tsx';
import YourOrders from './pages/YourOrder.tsx';
import SignOut from './pages/SingOut.tsx';
import Leftsidebar from './Navbars/Leftsidebar.tsx';
import Rightsidebar from './Navbars/Rightsidebar.tsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="flex">
        <Leftsidebar />
        <Rightsidebar />

        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/additem" element={<AddItem />} />
            <Route path="/yourorder" element={<YourOrders />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/profile" element={<div>Profile Page</div>} />
            <Route path="/youritems" element={<div>Your Items Page</div>} />
          </Routes>
        </main>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;