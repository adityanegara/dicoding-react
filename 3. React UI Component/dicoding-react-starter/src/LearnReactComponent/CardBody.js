import Button from "./Button"

const CardBody = ({date, title, content, link}) =>{
    return(
        <div>
            <p>{date}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            <Button link={link}/>
        </div>
    )
}

export default CardBody;