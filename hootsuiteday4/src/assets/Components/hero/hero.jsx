import herostyles from "../navbar/navbar.module.css"
import Button from "../navbar/button";

function Hero(){
    return(
        <div className={herostyles.heroDIv}>
                <div className={herostyles.heroHeading}>
                <h1>See value from social sooner</h1>
                </div>

                <div className={herostyles.heropara}>
                <p>Our training and strategic services jabe helped <br></br> thousands of organizations succeed on social </p>
                {/* <p>thousands of organizations succeed on social</p> */}
                </div>

                <Button btnText="Request a Demo"/>


                
        </div>
    )
}

export default Hero;