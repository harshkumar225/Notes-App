import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePaste } from "../redux/PasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import {FaCopy} from "react-icons/fa"
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import {MdDelete} from "react-icons/md"



const Pastes=()=>{

const pastes= useSelector((state)=>state.paste.pastes)
const [searchTerm, setsearchTerm]=useState('')
const dispatch=useDispatch()

const filterdata= pastes.filter(
    (paste)=>paste.title.toLowerCase().
    includes(searchTerm.toLowerCase())
)

function handleDelete(pasteId){
    console.log(pasteId)
    dispatch(removePaste(pasteId))
}

function handleCopy(title){
    navigator.clipboard.writeText(title)
    toast.success("copy to clipboard")
}

function handleShare(paste){
    if(navigator.share){// ye check krta hai ki browser sharing feature support krta hai ya nahi agr suppot krta hai to anadr wala code chalga.
        navigator.share({ // share pop up aata hai
            title:paste.title,
            content:paste.onChange,
            url:`http://localhost:5173/pastes/${paste._id},`
        })
    }

    else{
        alert("sharing is not supporeted")
    }
}







    return(
        <div className="main-paste-box">
        <div className="Pastes-content">
         
         <input type="text" 
         value={searchTerm}
         placeholder="serch terms"
         onChange={(e)=>setsearchTerm(e.target.value)}
         
         
         
         />

         


         <div className="paste-list">
            

              <div/>
            <h2 className="allpaste-head">All Paste</h2>
            

             
            


        
            {

                filterdata.length>0&& 
                filterdata.map(
                    (paste)=>{
                        console.log(paste?._id)
                          
                        

                        return(
                           

                            <div className="paste-list-box">
                             
                            <div className="paste-title">
                           
                            {paste.title}
                            </div>


                            <div className="paste-content">
                                {paste.content}
                            </div>


                            <div className="btn">
                                <button className="edit-btn">
                                  
                                  <a href={`/?pasteId=${paste?._id}`}><FaEdit/>
                                  </a>
                                </button>
                                <button onClick={()=>handleCopy(paste.title)}><FaCopy/>
                                    

                                </button>
                                
                                <button className="view-btn">
                                   
                                   <a href={`/pastes/${paste?._id}`}><FaEye/>
                                   </a>
                                </button>

        
                                <button onClick={()=>handleDelete(paste?._id)}>
                                    <MdDelete/></button>
                                <button onClick={handleShare}> <FaShare/>
                                    
                                    </button>
                                

                            </div>


                            <div className="date">
                                <p>

                                    {new Date(paste.createdAt).toLocaleDateString(("en-GB"),{

                                      day:"numeric",
                                      month:"long",
                                      year:"numeric",

                                    })}
                                </p>

                                
                            </div>


                            <div className="time">
                                <p>
                               
                                  {new Date(paste.createdAt).toLocaleTimeString()}


                                </p>




                            </div>


                          
                            
                
                         
                         </div>
                            

                    

                
                                
                      )
                    }

            
                )
            }
            



         </div>
        
        
      </div>

     </div> 
        
    )
}

export default Pastes