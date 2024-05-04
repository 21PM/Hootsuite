import navstyles from "./navbar.module.css"


function Button({btnText}){
        return(
            <div style={{display:"flex", alignItems:"center" ,  justifyContent : "center"}}>
                <button className={navstyles.signUpbtn}>{btnText}</button>
            </div>
        )
}

export default Button;