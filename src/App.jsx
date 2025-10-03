import { Suspense } from "react";
import Dynamic from "./components/Dynamic";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import States from "./components/States";
import './index.css'

// data load
const loadOrders=()=>fetch("/public/jsonData/ticketsData.json")
.then((res) => res.json());

function App() {

  const ordersPromise = loadOrders();

  return (
    <>
      
      {/* <h1 className='bg-red-400'>Hello</h1>  */}
      <Navbar></Navbar>
      {/* <States></States> */}
      <Suspense fallback={"Loading..."}>
         <Dynamic ordersPromise={ordersPromise}></Dynamic>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
