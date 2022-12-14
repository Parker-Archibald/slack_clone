import React, {useState, useEffect} from 'react';
import '../Styles/Sidebar.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from '../Config/Firebase';
import {Link} from 'react-router-dom';
import {useStateValue} from '../Config/StateProvider';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Sidebar() {

  const [channels, setChannels] = useState([]);
  const [{user}] = useStateValue();

  useEffect(() => {
    db.collection('Rooms').onSnapshot(snapshot => (
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      })))
    ))
  }, [])

  const closeTopGroup = () => {
    if(document.getElementById('sidebar_topGroup').style.height === '0px') {
      document.getElementById('sidebar_topGroup').style.height = 'initial';
      document.getElementById('sidebar_showLess').style.display = 'inherit';
      document.getElementById('sidebar_more').style.display = 'none';
      
    }
    else {
      document.getElementById('sidebar_topGroup').style.height = '0px';
      document.getElementById('sidebar_showLess').style.display = 'none';
      document.getElementById('sidebar_more').style.display = 'inherit';
    }
  }

  const closeBottomGroup = () => {
    if(document.getElementById('sidebar_bottomGroup').style.height === '0px') {
      document.getElementById('sidebar_bottomGroup').style.height = 'initial';
      document.getElementById('sidebar_showLessBottom').style.display = 'inherit';
      document.getElementById('sidebar_moreBottom').style.display = 'none';
    }
    else {
      document.getElementById('sidebar_bottomGroup').style.height = '0px';
      document.getElementById('sidebar_showLessBottom').style.display = 'none';
      document.getElementById('sidebar_moreBottom').style.display = 'inherit';
    }
  }

  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <div className='sidebar_info'>
            <h2>Group Name</h2>
            <h3><FiberManualRecordIcon/>{user?.displayName}</h3>
        </div>
      <CreateIcon/>
      </div>
      <div id='sidebar_topGroup'>
        <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
        <SidebarOption Icon={InboxIcon} title='Mentions & Reactions'/>
        <SidebarOption Icon={DraftsIcon} title='Saved Items'/>
        <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser'/>
        <SidebarOption Icon={PeopleAltIcon} title='People & user groups'/>
        <SidebarOption Icon={AppsIcon} title='Apps'/>
        <SidebarOption Icon={FileCopyIcon} title='File browser'/>
      </div>
        <span onClick={closeTopGroup} id='sidebar_showLess'>
          <SidebarOption Icon={ExpandLessIcon} title='Show less'/>
        </span>
        <span id='sidebar_more' onClick={closeTopGroup}>
          <SidebarOption Icon={ExpandMoreIcon} title='Show more' />
        </span>
      <hr/>
      <div id='sidebar_bottomGroup'>
        <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel'/>
        {channels.map(channel => (
          <Link to={`/room/${channel.id}`} style={{'color': 'white', 'textDecoration': 'none'}}><SidebarOption title={channel.name} id={channel.id}/></Link>
        ))}
      </div>
      <span onClick={closeBottomGroup} id='sidebar_showLessBottom'>
          <SidebarOption Icon={ExpandLessIcon} title='Channels'/>
        </span>
        <span id='sidebar_moreBottom' onClick={closeBottomGroup}>
          <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
        </span>
    </div>
  )
}

export default Sidebar
