import React from "react";
import { useEffect, useState } from "react";



const Message =()=>{


    const[dontacts, setContacts]=useState([]);

    useEffect(()=>{

        getContacts();

    },[])

    const getContacts= async ()=>{
        let result = await fetch("https://ankit-mongo-test.herokuapp.com/contact",{
            headers:{
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setContacts(result);
    }

    /*const searchHandle = async (event)=>{

        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/searchmessage/${key}`);
            result = await result.json();
            if(result){
                setContacts(result)
            }
        }else{
            getContacts();
        }



    }*/

    //`${new Date().toLocaleString()}`

    





    return(

        

        <div className="product-list">
        <h1>Messages</h1>
        


        <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Email</li>
            <li>Message</li>
        </ul>

        {
            dontacts.map((item,index)=>
            <ul key ={item._id}>
            <li>{index+1}</li> 
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.message}</li>
        </ul>

        )
    }

    </div>

        
        

        
        
        
        
    )
}
export default Message;