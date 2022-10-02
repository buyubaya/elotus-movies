import { Avatar, Tooltip } from 'antd';
import React from 'react';
import s from './UserAvatar.module.scss';

function UserAvatar() {
  return (
    <div className={s.container}>
      <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
        <Tooltip title="Hieu Le">H</Tooltip>
      </Avatar>
    </div>
  );
}

export default UserAvatar;
