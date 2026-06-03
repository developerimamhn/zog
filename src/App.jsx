import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import OrderDashboard from "./components/OrderDashboard"
import OrderList from "./components/OrderList"
import Sidebar from "./components/Sidebar"
import AddLinkPage from "./components/AddLinkPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="w-full h-screen flex flex-col overflow-hidden bg-[#F8F8F8]">
            <Navbar />
            <div className="md:grid grid-cols-12 flex-1 overflow-hidden mx-auto justify-between gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7.5 pt-10 container">
              <div className="col-span-2 lg:col-span-2">
                <Sidebar />
              </div>
              <div className="col-span-7 lg:col-span-6 flex flex-col overflow-hidden h-full">
                <Header />
                <div className="flex-1 overflow-y-auto no-scrollbar">
                  <OrderDashboard />
                </div>
              </div>
              <div className="col-span-3 lg:col-span-4">
                <OrderList />
              </div>
            </div>
          </div>
        } />
        <Route path="/add-link" element={<AddLinkPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App