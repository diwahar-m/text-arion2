import './style.css' 

const Item=(props)=>{

    const {detail}=props;
    const{id,userId,title,dueOn,status}=detail;


    return(
        <li id={id}>
            <div className="eachItem">
                <p>{id}</p>
                <p>{userId}</p>
                <h5>{title}</h5>
                <p>{dueOn}</p>
                <p>{status}</p>
                
            </div>
        </li>


    )
}

export default Item;