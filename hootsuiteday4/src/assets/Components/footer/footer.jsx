import footerstyles from "../navbar/navbar.module.css"
import Card  from "./card";
function Footer(){
    return (
        <div className={footerstyles.footerDiv}>
            <div className={footerstyles.innerFooter}>
                    <Card url="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5D7IjBelfMvEmjkYKZUowh3xHvJ2W6btP8JYSGfAbVU09gE3S" value="2,500" label="Enterprise orangisation successfully lanunched"/>

                    <Card url="https://cdn-icons-png.freepik.com/256/2985/2985933.png?ga=GA1.1.1723154292.1714400731" value="45,000" label="Enterprise users onbaorded seamlessly"/>

                    <Card url="https://hr.ucmerced.edu/sites/hr.ucmerced.edu/files/images/comm_playbook/conversation.jpg" value="200,00+" label="Professional trained no products and stratergy"/>
            </div>
        </div>
    )
}

export default Footer;