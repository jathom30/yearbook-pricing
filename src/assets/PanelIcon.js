import React from 'react';

const PanelIcon = (props) => {
  return(
    <svg id="main-icon" xmlns="http://www.w3.org/2000/svg" width="720" height="720" viewBox="0 0 720 720">
      <circle id="icon-circle" fill="#478BAA" cx="360" cy="357.003" r="331.5"/>
      <path id="icon-shadow" fill="#23718C" d={props.data.shadow} />
      <path id="icons" fill="#8ABFCD" d={props.data.icons} />
    </svg>
  );
}

export default PanelIcon;