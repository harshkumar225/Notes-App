import {NavLink} from "react-router-dom"

const Navbar=()=>{
    return(
        <div className="nav-links">
      
      <NavLink to="/" className={({isActive})=>isActive?"active-link":"link"}>
      Home

      </NavLink>



      
      <NavLink to="/pastes" className={({isActive})=>isActive?"active-link":"link"}>
        Pastes

      </NavLink>


        </div>
    )
}

export default Navbar