import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
 


export default function Header() {
    const {isAuthenticated}=useAuth()

   return(
         <header>
        {/* <!-- Navigation --> */}
        <nav>
            <Link className="home" to="/"> <img src="./images/logo.png" alt="logo"/> </Link>
            <Link to="/catalog">Catalog</Link>

            {/* <!-- Logged-in users --> */}
            {isAuthenticated&&( <div id="user">
                <Link to="/games/create">Add Game</Link>
                <Link to="/logout">Logout</Link>
            </div>)}
           
            {/* <!-- Guest users --> */}
            {!isAuthenticated&&(<div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>)}
            
        </nav>
        </header>
   );
}