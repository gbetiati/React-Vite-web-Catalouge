import { Link, Outlet } from "react-router-dom"
import "./master.css"
import logo from '../../logo/logo.png'

const Master = () => {

return (

    <div>

    <nav className="master"> 
    <Link to="/"> <img src={logo} className="imga"/> </Link>
    
            <ul className="list">
            
            <li className="item"><Link to="/"> Home</Link> </li>
            <li className="item"><Link to="/posts"> Posts</Link> </li>
            
            </ul>
    </nav>
      <Outlet/>
    </div>
)
}

export default Master