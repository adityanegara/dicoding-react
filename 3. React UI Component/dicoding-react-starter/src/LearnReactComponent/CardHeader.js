const CardHeader = ({image, category}) =>{
    return(
        <header>
            <h4>{category}</h4>
            <img src={image}/>
        </header>
    )
}

export default CardHeader;