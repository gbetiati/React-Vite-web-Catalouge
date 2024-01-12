import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/home"
import Post from "./components/Posts/Post.jsx"
import Master from "././layout/Master/Master.jsx"
import NotFound from "./components/NotFound"

import './App.css'

function App() {

  return (
 
  <Routes>
    <> 
     <Route path="/" element={ <Master/> } >
        <Route index element={ <Home/> } />
        <Route path="/posts" element={ <Post/> } />
     </Route>
     <Route path="*" element={ <NotFound/> } />  
     </>
   </Routes>   
 
  )
}

export default App
