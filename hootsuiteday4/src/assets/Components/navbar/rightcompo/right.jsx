import navstyles from  "../navbar.module.css"
import Button from "../button";


function     Rightdiv(){
    return(
        <div className={navstyles.rightDiv}>

            <div className={navstyles.contactus}>Contact Us</div>
            <div className={navstyles.login }>Log In</div>
            <Button btnText="Sign Up"/>
            
        </div>
    )
}

export default Rightdiv;