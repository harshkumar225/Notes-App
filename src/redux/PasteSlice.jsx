import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  pastes:localStorage.getItem("pastes")
  ?JSON.parse(localStorage.getItem("pastes"))
  :[]
}



export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste=action.payload;
      state.pastes.push(paste) // paste ko state ke andar daal do
      localStorage.setItem("pastes", JSON.stringify(state.pastes)) //local storaage ke andar save kar lo
      toast.success("Paste added successfully")

      

      
    },


    updatePastes: (state,action) => {
    const paste=action.payload
    const index=state.pastes.findIndex((item)=>item._id===paste._id)
    
    if(index>=0){
      state.pastes[index]=paste
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
      toast.success("paste updated")
    }

  

      
    },
     
    resetTopastes: (state, action) => {
        state.pastes([])
        localStorage.removeItem("pastes")
    
    },

    removePaste:(state,action)=>{
      const pasteId= action.payload

      const index=state.pastes.findIndex((item)=>item._id !==pasteId)

      if(index>=0){
        state.pastes.splice(index,1)
        localStorage.setItem("pastes",JSON.stringify(state.pastes))
        toast.success("Paste deleted")
      }
    }

  },


    })





// Action creators are generated for each case reducer function
export const { addToPastes,updatePastes,resetTopastes,removePaste} = PasteSlice.actions

export default PasteSlice.reducer