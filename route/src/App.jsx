import { useState } from 'react'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
const  Dashboard =React.lazy(()=>import('./components/Dashboard'))
const  Landing = React.lazy(()=>import('./components/Landing'))


function App() {
 

  return (
    <div>
     
  <BrowserRouter>
    <Appbar></Appbar>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Landing/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

function Appbar(){
  const navigate=useNavigate();
  return <div>
  <div>
  <button onClick={()=>{
   navigate('/')
  }}>Landing page</button>
   <button onClick={()=>{
   navigate('/dashboard')
  }}>Dashboard</button>
  </div>

</div>
}

export default App
