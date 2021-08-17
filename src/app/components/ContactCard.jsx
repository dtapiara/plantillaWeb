import React from 'react';
import { Card, Row, Col } from 'antd';
import {
  LinkedinFilled,
  GithubOutlined,
  FacebookFilled,
  MailOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const ContactCard = ({
  data
}) => {

  const colSpan = 6;

  const cardData = [{
      avatar: <MailOutlined style={{ fontSize: 35 }}/>,
      title: data.email,
    }, {
      avatar: <LinkedinFilled style={{ fontSize: 35 }}/>,
      title: data.linkedin,
    }, {
      avatar: <GithubOutlined style={{ fontSize: 35 }}/>,
      title: data.github,
    }, {
      avatar: <FacebookFilled style={{ fontSize: 35 }}/>,
      title: data.facebook,
  }]


return (
  <Row>
    {cardData.map((obj, index) => (
      <Col key={index} span={colSpan}>
        <Card bordered={false}>
          <a href={obj.title.url} target="_blank" rel='noreferrer'>
          <Meta 
            avatar={obj.avatar}
            title={obj.title.title}
          />
          </a>
        </Card>
      </Col>
    ))}
  </Row>
  );
}

export default ContactCard;