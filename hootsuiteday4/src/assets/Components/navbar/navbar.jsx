import navbarstyles from  "./navbar.module.css"
import Leftdiv from "./leftcompo/left";
import Rightdiv from "./rightcompo/right";

function Navbar(){
    return (
        <div className={navbarstyles.navbarDiv}>
            <Leftdiv/>  
            <Rightdiv/>
        </div>
    )
}

export default Navbar;