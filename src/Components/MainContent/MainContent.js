import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import style from '../HeadCommon/Common.module.css';
import AddIcon from '@mui/icons-material/Add';
import VideocamIcon from '@mui/icons-material/Videocam';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupIcon from '@mui/icons-material/Group';
import { Container, Row, Col } from 'react-bootstrap';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GifBoxIcon from '@mui/icons-material/GifBox';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const Box = styled.div`

height:3.8vh;
display:flex;
align-items:center;
gap:1rem;
margin-bottom:3px;
`;

const Boxes = styled.div`


display:flex;
gap:1rem;
margin-bottom:8px;
padding:.2rem;
`;
const Smallbox = styled.div`
display:flex;
flex-direction:column;
background-color:white;
padding:5px;
width:100%;
height:10vh;
border-radius:4px;
`;

const MainContent = () => {
  return (
    <section style={{ backgroundColor: '#f8f8f8', padding: '5px' }}>
      <div className={style.Chatbox}>
        <Box>
          <AccountCircleIcon className={style.Icoons} />
          <h6
            className="Chathead"
            style={{
              marginTop: '-.0rem',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            Martin.,
          </h6>
          <p className="time" style={{ marginTop: '1rem' }}>
            Chat
          </p>
          <p className="time" style={{ marginTop: '1rem' }}>
            Files
          </p>
          <AddIcon className={style.Icoons} />
        </Box>
        <Box>
          <VideocamIcon className={style.Icoons} />
          <LocalPhoneIcon className={style.Icoons} />
          <ExitToAppIcon className={style.Icoons} />
          <GroupIcon className={style.Icoons} />
        </Box>
      </div>
      <hr />
      <Col lg xs={3}>
        <Boxes>
          <AccountCircleIcon
            style={{ marginTop: '1rem', fontSize: '23px' }}
            className={style.Icoons}
          />
          <Smallbox>
            <h6 className="Conthead">Martin</h6>
            <p className="Contpara">Hi how are u</p>
          </Smallbox>
        </Boxes>
        <Boxes>
          <AccountCircleIcon
            style={{ marginTop: '1rem', fontSize: '25px' }}
            className={style.Icoons}
          />
          <Smallbox>
            <h6 className="Conthead">Martin</h6>
            <p className="Contpara">Hi how are u</p>
          </Smallbox>
        </Boxes>
        <Boxes>
          <AccountCircleIcon
            style={{ marginTop: '1rem', fontSize: '25px' }}
            className={style.Icoons}
          />
          <Smallbox>
            <h6 className="Conthead">Martin</h6>
            <p className="Contpara">Hi how are u</p>
          </Smallbox>
        </Boxes>
        <Boxes>
          <AccountCircleIcon
            style={{ marginTop: '1rem', fontSize: '25px' }}
            className={style.Icoons}
          />
          <Smallbox>
            <h6 className="Conthead">Martin</h6>
            <p className="Contpara">Hi how are u</p>
          </Smallbox>
        </Boxes>
        <Boxes>
          <AccountCircleIcon
            style={{ marginTop: '1rem', fontSize: '25px' }}
            className={style.Icoons}
          />
          <Smallbox>
            <h6 className="Conthead">Martin</h6>
            <p className="Contpara">Hi how are u</p>
          </Smallbox>
        </Boxes>
        <Boxes>
          <AccountCircleIcon
            style={{ marginTop: '1rem', fontSize: '25px' }}
            className={style.Icoons}
          />
          <Smallbox>
            <h6 className="Conthead">Martin</h6>
            <p className="Contpara">Hi how are u</p>
          </Smallbox>
        </Boxes>
      </Col>
      <div className="MainSearch">
        <div style={{ textAlign: 'center' }}>
          <input
            type="text"
            value="Type a new Message"
            size="90"
            className="MainSearchs"
          />
        </div>
      </div>
      <Boxes style={{ margin: '.5rem 4rem' }}>
        <InsertEmoticonIcon className={style.Icoons} />
        <InsertLinkIcon className={style.Icoons} />
        <GifBoxIcon className={style.Icoons} />
        <OpenInBrowserIcon className={style.Icoons} />
      </Boxes>
    </section>
  );
};

export default MainContent;
