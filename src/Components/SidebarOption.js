import React from 'react';
import '../Styles/SidebarOption.css';
import db from '../Config/Firebase';

const SidebarOption = ({Icon, title, id, addChannelOption}) => {

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name')

    if(channelName) {
      db.collection('Rooms').add({
        name: channelName
      })
    }
  }

  return (
    <div className='sidebarOption' onClick={addChannelOption && addChannel}>
      {Icon && <Icon className='sidebarOption_icon'/>}
      {Icon ? <h3>{title}</h3>: 
        <h3 className='sidebarOption_channel'>
            <span className='sidebarOption_hash'>#</span> 
            {title}
            {/* {dots && <MoreVertIcon className='sidebarOption_dots'/>} */}
        </h3>}
      
    </div>
  )
}

export default SidebarOption
