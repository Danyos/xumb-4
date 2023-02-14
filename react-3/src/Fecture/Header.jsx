import './style.css'
import {Link} from "react-router-dom";
function Header() {
    return (

            <header>
                <div id="mega-menu" className="hide-on-med-and-down">
                    <ul className="sub-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/about">about us</Link>
                        </li>
                        <li><Link to="/contact">Contact us</Link>
                       </li>

                    </ul>
                </div>
            </header>

    );
}

export default Header;
