import {useEffect,useState} from "react";

import Item from "../Item";
import './style.css' ; 

const Grid=()=>{

    const[info,updateInfo]=useState([])

    

    useEffect(
       ()=>{
        async function fetchData(){

            const options ={
                method:'GET'
            } 
            const response= await fetch("https://gorest.co.in/public/v1/todos",options); 
            const userDetail2=await response.json(); 
            const userDetail=userDetail2.data;
            console.log(userDetail);
            const eachData=userDetail.map(each=>{
                const user={
                    id:each.id,
                    userId:each.user_id, 
                    title:each.title, 
                    dueOn:each.due_on, 
                    status:each.status
                }
                return user;
            })
           
            updateInfo(eachData)
            
        }
        fetchData();
        


    },[]
    )
    console.log(info);

    return(
        <div className="gridHome">
            <div className="gridContainer">
                <ul>
                    {info.map(eachUser=>(
                        <Item key={eachUser.id} detail={eachUser} />
                    ))}
                </ul>
            </div>


        </div>

    )

}

export default Grid;
