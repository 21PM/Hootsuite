import navstyles from  "../navbar.module.css"

function Leftdiv(){


    const menus = ["Platform" , "Plans" , "Enterprise" , "Resources" , "Education"]

        return(
            <div className={navstyles.leftdiv}>
                    <div className={navstyles.logo}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpMg7v4RbpReYA5ZhaS6WxsEOkyvDhqsClRN9NMSjPUMW_fLrF9SSkIoHCgBYdLvZtQg&usqp=CAU"alt="Logo_image"></img>
                    </div>

                    <div className={navstyles.menu}>
                            <ul>
                                {
                                   menus.map((ele)=> <li className={navstyles.listStyle}>{ele}</li>) 
                                }
                            </ul>

                    </div>
            </div>
        )

}

export default Leftdiv;