import {Link} from 'react-router-dom';
import "../css/navbar.css"

export default function Navbar(){
    return(
        <div className="nav-container">
            <Link to={"/"} className='nav-button'>Home</Link>
            <Link to={"/Notes"} className='nav-button'>Notes</Link>
            <Link to={"/songRecom"} className='nav-button'>Spotify recommended</Link>
        </div>
    );
}