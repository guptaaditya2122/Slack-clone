import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { auth, db } from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId ,chatRef}) {
    const [input ,setInput] = useState('');
    const [user] = useAuthState(auth)
    
    const sendMessage = (e) => {
        e.preventDefault();

        // prevent if there is no channelID
        if(!channelId){
            return false;
        }
        //Taking rooms collection with each room with its id ,creating collection of messages inside each room
        // and adding messages toit
        db.collection('rooms').doc(channelId).collection('messages')
        .add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage:user.photoURL
        });
        chatRef.current.scrollIntoView();
        setInput('')
    }

    return (
        <ChatInputContainer>
            <form >
                <input placeholder={`Message #${channelName}`} value={input} onChange={e=>setInput(e.target.value)}/>
                <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;
>form{
    position: relative;
    display: flex;
    justify-content: center;
}
>form>input{
    position: fixed;
    bottom: 30px;
    width: 60%;
    border:1px solid gray;
    padding:20px;
    outline:none;
}

>form>button{
    display: none !important;
}
`;