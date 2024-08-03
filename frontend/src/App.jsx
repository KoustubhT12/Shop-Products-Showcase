import CreatePage from './Pages/CreatePage'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import {Route,Routes } from "react-router-dom"


function App() {
 return (     

  <div> 
    <Navbar/>
    <Routes> 
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Create" element={<CreatePage/>}/>

    </Routes>
  </div>
  
 );
}

export default App;
