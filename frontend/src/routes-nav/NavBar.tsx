import { NavLink } from "react-router-dom";

/** NavBar component for navigation
 *
 * Props:
 * -None
 *
 * State:
 * -None
 *
 * App -> NavBar
 */

function NavBar(){
    return(
        <div>
            <NavLink className="NavBar-link" to="/">
                Eric's GuessTheGame
            </NavLink>
        </div>
    );
}

export default NavBar;