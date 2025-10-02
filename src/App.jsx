import Dynamic from "./components/Dynamic";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import States from "./components/States";
import './index.css'
function App() {


  return (
    <>
      
      {/* <h1 className='bg-red-400'>Hello</h1>  */}
      <Navbar></Navbar>
      <States></States>
      <Dynamic></Dynamic>
      <Footer></Footer>
    </>
  )
}

export default App
