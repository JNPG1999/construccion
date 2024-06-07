import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components'


export const Navegation = () => {

    const [ clicked, setClicked ] = useState( false );

  return (

    <>
                <NavStyled>
                        <div className='logo'>
                            <NavLink to={'/'}>
                                D&H-Construccion y ingenieria
                            </NavLink>
                        </div>
                        <div className='enlaces'>
                            <NavLink onClick={ () => setClicked( false ) } className={({isActive})=>isActive ? 'navactive' : ''} to={'/arquitectura'}>Arquitectura</NavLink>
                            <NavLink onClick={ () => setClicked( false ) } className={({isActive})=>isActive ? 'navactive' : ''} to={'/ingenieria'}>Ingenieria</NavLink>
                            <NavLink onClick={ () => setClicked( false ) } className={({isActive})=>isActive ? 'navactive' : ''} to={'/comodin'}>Comodin</NavLink>
                            <NavLink onClick={ () => setClicked( false ) } className={({isActive})=>isActive ? 'navactive' :''} to={'/nosotros'}>Nosotros</NavLink>
                            <NavLink onClick={ () => setClicked( false ) } className={({isActive})=>isActive ? 'navactive':''} to={'/contactos'}>Contactos</NavLink>
                        </div>
                </NavStyled>

                <MargenOutlet>
                    <Outlet/>   
                </MargenOutlet>
    </>
  )

}

const MargenOutlet = styled.div`

    margin-top:14rem;
    

`

const NavStyled = styled.nav`

    position:fixed;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    top:0;
    width: 100%;
    max-width:140rem;
    height: 14rem;
    z-index: 1000000000000;
    border-bottom: 1px solid grey ;
    background-color:white;

    
    .logo{

        a{
            font-weight: 400;
            font-size: 2.5rem
        }

    }
    

    .enlaces{

        display:flex;
        gap: 10px;
        
        align-items: center;

        a{
            
            color: black;
            font-size: 1.6rem;
            padding: 8px;
            transition: all .5s;

            &::after {
            content: '';
            display: block;
            width: 0%;
            height: 2px;
            background-color: black;
            transition: width 0.3s ease;
            }

            &:hover::after {
            width: 100%;
            }

            &.navactive::after{

                
                width: 100%;

            }
        }
    }
`;





