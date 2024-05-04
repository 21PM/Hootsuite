import cardstyles from "../navbar/navbar.module.css"
function    Card({url,value,label}){
    return(
        <div className={cardstyles.card_outer_div}>
                <div className={cardstyles.card_inner_div}>
                    <img src={url} ></img>
                </div>

                <h2 style={{textAlign:"center" ,color:"#282828"}}>{value}</h2>
                <p style={{textAlign:"center" ,marginTop:"4%",fontWeight:"bolder",color:"rgb(97, 97, 97)"}}>{label}</p>
        </div>
    )
}

export default Card;