import React from 'react';

const PanelIcon = (props) => {
  return(
    <svg alt={`${props.data.title} Icon`} className="main-icon" xmlns="http://www.w3.org/2000/svg" width="720" height="720" viewBox="0 0 720 720">
      <circle className="icon-circle" fill="#478BAA" cx="360" cy="357.003" r="331.5"/>
      <path className="icon-shadow" fill="#23718C" d={props.data.shadow} />
      <path className="icons" fill="#8ABFCD" d={props.data.icons} />
    </svg>
  );
}

export default PanelIcon;