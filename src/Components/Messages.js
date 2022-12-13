import React from 'react';
import '../Styles/Messages.css';

const Messages = ({message, timestamp, user, userImage}) => {
    return (
        <div className='messages'>
            <img src={userImage}alt=''/>
            <div className='message_info'>
                <h4>
                    {user} 
                    <span className='message_timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Messages;