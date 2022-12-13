import React, {useState} from 'react';
import '../Styles/ChatInput.css';
import db from '../Config/Firebase';
import {useStateValue} from '../Config/StateProvider';
import firebase from 'firebase/compat/app';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({channelName, channelId}) => {

    const [input, setInput] = useState('');
    const [{user}] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();

        if(channelId) {
            db.collection('Rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
        }

        setInput('')
    }

    return (
        <div className='chatInput'>
            <div>
                <form className='chatInput_form'>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName?.toLowerCase()}`}/>
                    <SendIcon type='submit' onClick={sendMessage} className='chatInput_send'>Send</SendIcon>
                </form>
            </div>
        </div>
    )
}

export default ChatInput;