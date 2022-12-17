import {NavLink,Outlet} from "react-router-dom"
import { Toaster } from "react-hot-toast"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 10px;

`;

const Link = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;



export const Navigation =()=>{
 return(
    <div>
        <Nav>
            <Link to='/' >Home</Link>
            <Link to='/movies'>Movies</Link>
        </Nav>
        <hr/>
        <Outlet/>
        <Toaster
            position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
 )   
}