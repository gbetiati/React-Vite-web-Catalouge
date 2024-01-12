import Header from "../Header/Header"
import Card from "../Card/Card.jsx"
import './Post.css'

const Post = () => {

    return (
       
        <>
        <Header/>
            <div className="post">


             <p className="catnome"> Catalágo de óculos</p>

                <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

                <Card/>
                <Card/>
                
                </div>
            </div>
        
        </>
    )
}

export default Post
