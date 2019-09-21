import React, {useState} from 'react';
import './Layout.css';
import styled from '@emotion/styled';
import Navbar from '../components/Navbar/Navbar';

const Main = styled.main`
  margin-top: 3.5rem;
  @media (min-width: 767px){
   margin-top: 5rem;
  }
`

const Section = styled.section`
  width: 100%;
  color: rgb(248,248,255);
  padding: 1rem 0.5rem 1rem 0.5rem;
  text-align: center;
  background-color: ${props =>
    props.bgcolor ? props.bgcolor : 'rgba(2, 168, 245, 0.767)'}
`

const layout = (props) => {

  console.log("LAYOUT",props);
  const [isDropdownMenuOpen, setDropdownMenu] = useState(false);

  const dropdownMenuHandler = () => {
    setDropdownMenu(!isDropdownMenuOpen);
  }

  return (
    <>
    <Navbar click={dropdownMenuHandler} isMenuOpen={isDropdownMenuOpen}/>
    <Main>
      {props.children.map(item =><Section bgcolor={item.props.bgcolor}>{item}</Section>)}
    </Main> 
    </>
  );
}

export default layout;
