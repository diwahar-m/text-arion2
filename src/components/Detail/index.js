import {useEffect, useState} from 'react';
import './style.css' 

const Detail=()=>{

    const[email,updateMail]=useState("");
    const[msg,updateMsg]=useState("");
    const[name,updateName]=useState("");
    const[user,updateUser]=useState({});
    const [status,updateStatus]=useState('');

    const submitDetails=(event)=>{
        event.preventDefault();
        if(name!=="" && msg!=="" && (name!=="")){
            updateStatus("")
            updateUser(
                {
                    email:email,
                    message:msg, 
                    name:name
                    
                }
            )

        }else{
            updateStatus("Please enter the inputs")
            
        }
        
    }

    useEffect(()=>{
        async function updateData(){

            const options={
                method:'POST', 
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({'user':user})
            }
            await fetch(" https://admin.srkprojects.com/web/api/client/v1/contact-us",options)
            .then(response => response.json()) 
            .then(data => updateStatus(data.Status))

        }
        updateData();

    },[user])


    return(
        <div className='detailHome'>
            <div className='box'>
                <form onSubmit={submitDetails}>
                    <h1>Email</h1>
                    <input type="text" placeholder="email..." onChange={(event)=>{
                            updateMail(event.target.value)
                    }}/>
                    <h1>Message</h1>
                    <input type="text"  placeholder="text..." onChange={(event)=>{
                            updateMsg(event.target.value)
                    }}/>
                    <h1>Name</h1>
                    <input type="text"  placeholder="name..." onChange={(event)=>{
                            updateName(event.target.value)
                    }}/>
                    <div>

                        <button type="submit">Submit</button>
                    </div>

                </form>
                <p>{status}</p>

            </div>
        </div>
    )
}

export default Detail;