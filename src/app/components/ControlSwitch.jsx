import React from 'react';
import { Switch } from 'antd';

const ControlSwitch = ({
  es,
  toggleLanguage,
}) => {

  return (
    <>
      <Switch
        checkedChildren={<span>&#127482;&#127480;</span>}
        unCheckedChildren={<span>&#127466;&#127480;</span>}
        defaultChecked={es}
        onChange={toggleLanguage}
      />
    </>
  );
}

export default ControlSwitch;