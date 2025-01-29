function CardUp(props) {
    return (
        <div>
            <div class="card" style={{  }}>

                < div class="card-body" >
                    <h5 class="card-title">{props.title} </h5>
                    {/* <p class="card-text">{props.content}</p> */}
                    <input onChange={props.Inputhandle} type={props.type} name ={props.name}  />

                </div>
            </div>
        </div>
    )
}
export default CardUp