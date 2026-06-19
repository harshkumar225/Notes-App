
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes } from "../redux/PasteSlice";
import { updatePastes } from "../redux/PasteSlice";


const ViewPastes=()=>{
    
    const[title,setTitle]=useState("")// for title  box input
    const[value,setValue]=useState("")// jahan notes hoga wo text area input
    const[searchParams,setsearchParams]=useSearchParams()// url srech param
    const pasteId = searchParams.get("pasteId")// url se paste id leleo//
    const dispatch=useDispatch() // reducer se data lene ke lie
    const allPastes=useSelector((state)=>state.paste.pastes)


    const {id}=useParams()
    const allpaste=useSelector((state)=>state.paste.pastes)
    console.log(allpaste)

    const paste=allpaste.filter((p)=>p._id===id) [0]
    console.log(paste,"view");
        




    // jab bhi paste id change ho 
    useEffect(()=>{

        if(pasteId){
            const paste=allPastes.find((p)=>String(p._id).trim()===String(pasteId).trim())
            console.log(paste)
            setTitle(paste.title)
            setValue(paste.content)
        }

    },[pasteId])




    function createPaste(){
        const paste={ // sabse pehle paste create karenge

            title:title,// isse title wala input track hoga
            content:value, // isse text area waala data track hoga
            _id:pasteId || // id aagr available hai to wahi use karo warna date walae se random input leleo string me kardo
            Date.now().toString(36),
            createdAt:new Date().toISOString() ,// time kis time par paste create hua tha
        }

        if(pasteId){// agar paste id aayai to upadate karene aaye hai aur nahi dikhi to create karne aaye hai

         // update

         dispatch(updatePastes(paste))


        }

        else{

   // create

   dispatch(addToPastes(paste))

        }

        // after creation and updation clean karo 

        setTitle('')
        setValue('')
        setsearchParams({})

    }

    



    

    return(
        
        <div>
            <div className="main-content">

            <input type="text"
            placeholder="Enter the title"
            value={paste.title}
            disabled
            onChange={(e)=>setTitle(e.target.value)}
            className="title-box"
            
            
            
            />

            <button onClick={createPaste} className="create-paste-btn">

                {
                    pasteId ?"Update my Paste": "Create my paste"
                }


            </button>



        </div>

        <div className="text-area">

            <textarea

            placeholder="write your content"
            value={paste.content}
            onChange={(e)=>setValue(e.target.value)}
            disabled
            rows={30}
            cols={60}
            
            
            
            />

        </div>

        </div>
      )

    }
    


export default ViewPastes