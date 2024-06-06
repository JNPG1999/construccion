
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components'



export const Navegation = () => {
  return (

    <>
            <ContainerNav>
                <NavStyled>
                        <div className='logo'>
                            <NavLink to={'/'}>
                                D&H-Construccion y ingenieria
                            </NavLink>
                        </div>
                        <div className='enlaces'>
                            <NavLink to={'/arquitectura'}>Arquitectura</NavLink>
                            <NavLink to={'/ingenieria'}>Ingenieria</NavLink>
                            <NavLink to={'/comodin'}>Comodin</NavLink>
                            <NavLink to={'/nosotros'}>Nosotros</NavLink>
                            <NavLink to={'/contactos'}>Contactos</NavLink>
                        </div>
                </NavStyled>
            </ContainerNav>
        <Outlet/>
    </>
  )

}


const ContainerNav = styled.div`
    
    
    position: relative;
    margin: 0 auto;
    position:fixed;
    width:140rem;

`

const NavStyled = styled.nav`

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    left:0;
    top: 0;
    height: 14rem;
    max-width: 100%;
    margin: 0 auto;

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
        }
    }
`;





