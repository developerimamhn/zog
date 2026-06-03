import Header from "./components/Header"
import Navbar from "./components/Navbar"
import OrderDashboard from "./components/OrderDashboard"
import OrderList from "./components/OrderList"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="w-full h-auto bg-[#F8F8F8]">
      <Navbar />
      <div className="w-full max-w-400 mx-auto flex justify-between gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7.5 px-4 pt-10">
        <Sidebar />
        <div className="w-full">
          <Header />
          <OrderDashboard />
        </div>
        <OrderList />
      </div>
    </div>
  )
}

export default App
