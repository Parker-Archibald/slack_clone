import React from 'react';
import '../Styles/Messages.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Messages = ({message, timestamp, user, userImage}) => {

    const handleShowDots = () => {

    }

    return (
        <div className='messages'>
            <img src={userImage}alt=''/>
            <div className='message_info'>
                <h4>
                    {user} 
                    <span className='message_timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
                <div>
                    <MoreVertIcon/>
                </div>
            </div>
            
        </div>
    )
}

export default Messages;