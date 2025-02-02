import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

const App: React.FC = () => (
  <Tabs
    defaultActiveKey="2"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        label: <span>Tab {id}</span>,
        key: id,
        children: `Tab ${id}`,
        icon: <Icon />,
      };
    })}
  />
);

export default App;
