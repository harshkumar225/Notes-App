

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./components/Home";
import Pastes from "./components/Paste";
import Navbar from "./components/Navbar";
import ViewPastes from "./components/ViewPaste";


const router=createBrowserRouter([
  {
    path:"/",
    element: <div>
    <Navbar/>
    <Home/>


    </div>
  },

  {
    path:"/pastes",
    element: <div>
      <Navbar/>
      <Pastes/>

    </div>
  },

  {
    path:"/pastes/:id",
    element: <div>
     
     <Navbar/>
     <ViewPastes/>
    </div>
  },
])











function App(){
  return(
    <RouterProvider router={router} />
  )
}

export default App