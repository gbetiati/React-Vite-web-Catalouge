import { Link } from "react-router-dom"
import Header from "./Header/Header"
import "./Home.css"

function Home () {

    return (
        <>
        <Header/>
            <div className="homediv">
                <Link to='/posts'> Clique aqui  para ver os postss</Link>
            </div>  
        </>
    )
}

export default Home