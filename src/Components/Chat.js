import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Chat.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import db from '../Config/Firebase';
import Messages from './Messages';
import ChatInput from './ChatInput';

const Chat = () => {

    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState();
    const [roomMessages, setRoomMessages] = useState();

    useEffect(() => {
        if(roomId) {
            db.collection('Rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }

        db.collection('Rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot =>
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )

        }, [roomId])

    return (
        <div className='chat'>
            <div className='chat_header'>
                <div id='chat_headerLeft'>
                    <h4 className='chat_channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon/>
                    </h4>
                </div>
                <div className='chat_headerRight'>
                    <p>
                        <InfoIcon/> Details
                    </p>
                </div>
            </div>
            <div className='chat_messages'>
                {roomMessages?.map(({message, timestamp, user, userImage}) => (
                    <Messages message={message} timestamp={timestamp} user={user} userImage={userImage}/>

                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
        </div>
    )
}

export default Chat;