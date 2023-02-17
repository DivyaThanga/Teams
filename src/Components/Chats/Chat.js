import React from 'react';
import style from '../HeadCommon/Common.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';

const Box = styled.div`
width:100%;
height:10vh;
justify-content:space-evenly;
display:flex;
margin-bottom:3px;
`;

const Chat = () => {
  return (
    <section
      style={{
        backgroundColor: 'efecef',
        boxShadow: '2px 2px 2px #efecef',
        height: '102vh',
      }}
    >
      <div claassName="Chats">
        <div className={style.Chatbox}>
          <h5>
            Chat
            <KeyboardArrowDownIcon className={style.Icoons} />
          </h5>
          <FilterListIcon className={style.Icoons} />
          <HighlightAltIcon className={style.Icoons} />
        </div>
        <hr />
        <span className="Menupara">
          <KeyboardArrowDownIcon />
          Pinned
        </span>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6 className="Chathead">
            Divya.,<p className="Menupara">You:Sent a file</p>
          </h6>
          <p className="time">00:48</p>
        </Box>
        <span className="Menupara">
          <KeyboardArrowDownIcon className={style.Icoons} />
          Recent
        </span>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6 className="Chathead">
            Deepika<p className="Menupara">You:Sent a file</p>
          </h6>
          <p className="time">00:48</p>
        </Box>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6 className="Chathead">
            Praveen<p className="Menupara">You:Sent a file</p>
          </h6>
          <p className="time">00:48</p>
        </Box>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6 className="Chathead">
            Abhishek<p className="Menupara">You:Sent a file</p>
          </h6>
          <p className="time">00:48</p>
        </Box>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6 className="Chathead">
            Sravan<p className="Menupara">You:Sent a file</p>
          </h6>
          <p className="time">00:48</p>
        </Box>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6 className="Chathead">
            Divya.,<p className="Menupara">You:Sent a file</p>
          </h6>
          <p className="time">00:48</p>
        </Box>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6 className="Chathead">
            Sandhya<p className="Menupara">You:Sent a file</p>
          </h6>
          <p className="time">00:48</p>
        </Box>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6 className="Chathead">
            Sandhya<p className="Menupara">You:Sent a file</p>
          </h6>
          <p className="time">00:48</p>
        </Box>
      </div>
    </section>
  );
};
export default Chat;
