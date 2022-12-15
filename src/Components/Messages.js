import React from 'react';
import '../Styles/Messages.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Messages = ({message, timestamp, user, userImage}) => {

    const handleShowDots = (e) => {
        if(e.type === 'mouseover') {
            document.getElementById(timestamp).style.display = 'inherit';
            document.getElementById(`${timestamp}Container`).style.backgroundColor = 'rgb(39, 39, 39)';
            // console.log('on')
        }
        else {
            document.getElementById(timestamp).style.display = 'none';
            document.getElementById(`${timestamp}Container`).style.backgroundColor = 'inherit';
            // console.log('off')
        }
    }

    const handleOpenDelete = () => {
        document.getElementById(`${timestamp}_delete`).style.display = 'inherit';
    }

    return (
        <div className='messages_all'>
            <div id={`${timestamp}Container`} className='messages'>
            <img src={userImage} alt='' onMouseOver={handleShowDots} onMouseLeave={handleShowDots}/>
            <div className='message_info' onMouseOver={handleShowDots} onMouseLeave={handleShowDots}>
                <h4 onMouseOver={handleShowDots} onMouseLeave={handleShowDots}>
                    {user} 
                    <span className='message_timestamp'>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <div id={`${timestamp}_delete`} className='message_delete'><div id={`${timestamp}_exit`}>X</div>Delete</div>
                <div id={`${timestamp}`} className='message_dots' style={{'display': 'none'}} onMouseOver={handleShowDots} onMouseLeave={handleShowDots} onClick={handleOpenDelete}>
                    <MoreVertIcon/>
                </div>
                
            </div>
            </div>
            <div className='message_message'>{message}</div>
            
        </div>
    )
}

export default Messages;