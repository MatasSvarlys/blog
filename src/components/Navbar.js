import {Link} from 'react-router-dom';
import "../css/navbar.css"

export default function Navbar(){
    return(
        <div className="nav-container">
            <Link to={"/"} className='nav-button'>Home</Link>
            <Link to={"/todo"} className='nav-button'>To-do list</Link>
            <Link to={"/songRecom"} className='nav-button'>spotify recommended</Link>
        </div>
    );
}