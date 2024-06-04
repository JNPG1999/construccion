import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components'



export const Navegation = () => {
  return (

    <>
        <NavStyled>
                <div>
                    <img src="/logo.jpg" alt="" height={100} width={300}/>
                </div>
                <div className='enlaces'>
                    <NavLink to={'/'}>INICIO</NavLink>
                    <NavLink to={'/servicios'}>SERVICIOS</NavLink>
                    <NavLink to={'/comodin'}>COMODIN</NavLink>
                    <NavLink to={'/nosotros'}>NOSOTROS</NavLink>
                    <NavLink to={'/contactos'}>CONTACTOS</NavLink>
                </div>
        </NavStyled>
        <Outlet/>

    </>
    
    

  )

}

const NavStyled = styled.nav`

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    

    .enlaces{

        display:flex;
        gap: 10px;
        
        align-items: center;

        a{
            text-decoration:none;
            color: black;
            font-weight: bold;
            font-size: 2rem;
            border: 1px solid orange;
            border-radius: 1.5rem;
            padding: 8px;
            transition: all .5s;
        }

        a:hover{

            background-color:blue;
            color:white;


        }


    }

    

    
`;




