import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function Header() {
    const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar 
            onClick={()=> auth.signOut()}
            src={user?.photoURL} 
            alt={user?.displayName}/>
            <AccessTimeIcon/>
        </HeaderLeft>

        <HeaderSearch>
            <SearchIcon/>
            <input placeholder='Search'/>
        </HeaderSearch>

        <HeaderRight>
            <HelpOutlineOutlinedIcon/>
        </HeaderRight>

    </HeaderContainer>
  )
}

export default Header

const HeaderRight=styled.div`
    flex: 0.3;
    display: flex;
    justify-content: end;
   
    >.MuiSvgIcon-root{
    
    margin-left: auto;
    margin-right: 30px;
}
`;

const HeaderSearch =styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 10px 0;
    color: gray;
    border: 1px gray solid;

    > input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color:white;
`;

const HeaderLeft=styled.div`
display: flex;
flex:0.3;
align-items: center;
margin-left: 20px;

>.MuiSvgIcon-root{
    
    margin-left: auto;
    margin-right: 30px;
}
`
// for component to style we do it below 
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;

