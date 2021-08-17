import React, { useState } from 'react';
import { Layout, Anchor, Typography, Row, Col, Image, Affix } from 'antd';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import 'antd/dist/antd.dark.css';

import { chooseLanguage } from '../static/CONST.js';
import ContactCard from './components/ContactCard';
import ControlSwitch from './components/ControlSwitch';
import ListArray from './components/ListArray';

const { Header, Footer, Sider, Content } = Layout;
const { Link } = Anchor;
const { Title } = Typography;

const App = () => {
  const [es, setEs] = useState('false' === localStorage.getItem('language'));

  const _ = chooseLanguage(es);

  const toggleLanguage = () => {
    setEs(!es)
    localStorage.setItem('language', es)
  }

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <ControlSwitch
          es={es}
          toggleLanguage={toggleLanguage}
        />
      </Header>


      <Layout style={{ padding: '0 50px', marginTop: 64}}>
        <Content>
          <Title id='aboutme'>{_.title}</Title>
          <Row>
            <Col span={4}>
              <Image
                alt=''
                width={250}
                src={_.profileImage}
                style={{ borderRadius: '500' }}
                preview={{ mask: 
                <div className='ant-image-mask-info'>
                  <EyeOutlined />
                  {_.preview}
                </div>
                }}
              />
            </Col>
            <Col span={20}>
              <Title level={3}>{_.aboutMe}</Title>
                {_.textAboutMe}
            </Col>
          </Row>
          <Title>{_.curriculum}</Title>
          <Title level={3}>{_.experience}</Title>
          {_.textAboutMe}


          <Title id='curriculum'>{_.curriculum}</Title>

          <Row>
            <Col span={12}>
              <Title id='experience' level={3}>{_.experience}</Title>
              <ListArray
                data={_.experiences}
              />
            </Col>
            <Col span={12}>
              <Title id='studies' level={3}>{_.study}</Title>
              <ListArray
                data={_.studies}
              />
            </Col>
          </Row>


          <Title id='misc'>{_.misc}</Title>

          <Title id='contact'>{_.contact}</Title>
          {_.canContact}
          <ContactCard
            data={_}
          />
          
        </Content>


        <Sider theme='dark'>
          <Affix offsetTop={75}>
            <Anchor style={{padding: '0 20px'}}>
              <Link href="#aboutme" title={_.presentation} />
              <Link href="#curriculum" title={_.curriculum} />
            </Anchor>
          </Affix>
        </Sider>
        


      </Layout>
      <Footer>{_.doneBy}</Footer>
    </Layout>
  );
}

export default App;
