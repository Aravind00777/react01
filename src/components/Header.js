import { Link } from "react-router-dom";
function Header(){
return (
    <header>
        <div className="header-wrap">
            <div className="head-left">
                <Link>React page</Link>
            </div>
            <div className="head-right">
                <ul className="header-links">
                    <li>
                    <Link to='/'>All meetups</Link>
                    </li>
                    <li>
                    <Link to='/Newmeets'> New mweetsup</Link>
                    </li>
                    <li>
                    <Link to='/Favouritepage'>Favoritepage</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    
);
}
export default Header;