import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenusList from '../MenusList/MenusList.js';
import Chat from '../Chats/Chat.js';
import MainContent from '../MainContent/MainContent.js';
import '../HeadCommon/Commons.css';
import style from '../HeadCommon/Common.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import CloseIcon from '@mui/icons-material/Close';
import Filter1Icon from '@mui/icons-material/Filter1';

const HeadCommon = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={12} style={{ padding: 0 }}>
          <div className={style.Commonheads}>
            <div className={style.headleft}>
              <ArrowBackIosIcon className={style.Ico} />
              <ArrowForwardIosIcon className={style.Ico} />
            </div>
            <div className={style.headcenter}>
              <input
                type="search"
                value="Search"
                size="60"
                className={style.headsearch}
              />
            </div>
            <div className={style.headright}>
              <MoreHorizIcon className={style.Icoos} />
              <AccountCircleIcon className={style.Icoos} />
              <HorizontalRuleIcon className={style.Icoos} />
              <Filter1Icon className={style.Icoos} />
              <CloseIcon className={style.Icoos} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs lg={1} style={{ padding: 0 }}>
          <MenusList />
        </Col>
        <Col xs lg={3} style={{ padding: 0 }}>
          <Chat />
        </Col>
        <Col xs lg={8} style={{ padding: 1 }}>
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default HeadCommon;
