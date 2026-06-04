import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import OrderDashboard from "./components/OrderDashboard"
import OrderList from "./components/OrderList"
import Sidebar from "./components/Sidebar"
import AddLinkPage from "./components/AddLinkPage"

// ── Page wrapper: fade+slide on every route change ──────────────────
function AnimatedPage({ children }) {
  const ref = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }
      )
    }, ref)
    return () => ctx.revert()
  }, [location.pathname])

  return <div ref={ref}>{children}</div>
}

// ── Home layout: stagger Sidebar → Header → Dashboard → OrderList ───
function HomeLayout() {
  const sidebarRef    = useRef(null)
  const headerRef     = useRef(null)
  const dashboardRef  = useRef(null)
  const orderListRef  = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Sidebar slides in from left
      tl.fromTo(sidebarRef.current,
        { x: -30, opacity: 0 },
        { x: 0,   opacity: 1, duration: 0.5 }
      )
      // Header drops down
      .fromTo(headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0,   opacity: 1, duration: 0.45 },
        '-=0.3'
      )
      // Dashboard fades up
      .fromTo(dashboardRef.current,
        { y: 24, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.5 },
        '-=0.25'
      )
      // OrderList slides in from right
      .fromTo(orderListRef.current,
        { x: 30, opacity: 0 },
        { x: 0,  opacity: 1, duration: 0.5 },
        '-=0.35'
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-[#F8F8F8]">
      <Navbar />
      <div className="md:grid grid-cols-12 flex-1 overflow-hidden mx-auto justify-between gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7.5 pt-10 container">

        <div ref={sidebarRef} className="col-span-2 lg:col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-7 lg:col-span-6 flex flex-col overflow-hidden h-full">
          <div ref={headerRef}>
            <Header />
          </div>
          <div ref={dashboardRef} className="flex-1 overflow-y-auto no-scrollbar">
            <OrderDashboard />
          </div>
        </div>

        <div ref={orderListRef} className="col-span-3 lg:col-span-4">
          <OrderList />
        </div>

      </div>
    </div>
  )
}

// ── Root ─────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AnimatedPage>
            <HomeLayout />
          </AnimatedPage>
        } />
        <Route path="/add-link" element={
          <AnimatedPage>
            <AddLinkPage />
          </AnimatedPage>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App