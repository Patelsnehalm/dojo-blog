import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link>
            <h1 to={'Home/'}>The Coffee Shop</h1>
            </Link>
        
            <div className="links">
                <a href="home">Treding</a>
                <a href="/create" >Rewards</a>
                <a href="/create" >Gift Cards</a>
                <a href="/create" >Reserve</a>
            </div>
        </nav>
     );
}
 
export default Navbar;