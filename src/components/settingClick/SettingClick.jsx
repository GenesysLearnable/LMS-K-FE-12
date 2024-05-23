import React from 'react';
import stylesA from '../../components/settingClick/settingClick.module.css';

const SettingClick = () => {
  return (
    <label className={stylesA.switch}>
      <input type="checkbox" className={stylesA.checkbox} defaultChecked />
      <span className={`${stylesA.slider} ${stylesA.round}`}></span>
    </label>
  );
}

export default SettingClick;
