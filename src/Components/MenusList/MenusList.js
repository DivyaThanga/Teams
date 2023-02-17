import React from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CallIcon from '@mui/icons-material/Call';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styled from 'styled-components';

const Box = styled.div`
width:100%;
height:10vh;
text-align:center;

`;

const MenusList = () => {
  return (
    <section>
      <div className="Menuslist">
        <Box>
          <NotificationsActiveIcon />
          <p className="Menupara">Activity</p>
        </Box>
        <Box>
          <ChatBubbleOutlineIcon />
          <p className="Menupara">Chat</p>
        </Box>
        <Box>
          <GroupsIcon />
          <p className="Menupara">Teams</p>
        </Box>
        <Box>
          <DateRangeIcon />
          <p className="Menupara">Calendar</p>
        </Box>
        <Box>
          <CallIcon />
          <p className="Menupara">Calls</p>
        </Box>
        <Box>
          <InsertDriveFileIcon />
          <p className="Menupara">Files</p>
        </Box>
        <Box>
          <MoreHorizIcon />
        </Box>
        <Box>
          <AppsIcon />
          <p className="Menupara">Apps</p>
        </Box>
        <Box>
          <HelpOutlineIcon />
          <p className="Menupara">Help</p>
        </Box>
      </div>
    </section>
  );
};
export default MenusList;
