import React from 'react';
import { Avatar, List, Card } from 'antd';

const { Meta } = Card;

const ListArray = ({
  data,
}) => {
  return (
    <List size='large' mode="left" itemLayout="vertical">
      {data.map((obj) => (
        <List.Item>
          <Meta
            avatar={
              <Avatar src={obj.avatar} />
            }
            title={obj.institution}
            description={`${obj.start_dt} - ${obj.end_dt}`}
          />
          {obj.jobs && 
            <ul style={{ paddingTop: 20 }}>
              {obj.jobs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
          
        </List.Item>
      ))}
    </List>
  );
}

export default ListArray;