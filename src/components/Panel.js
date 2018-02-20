import React, { Component } from 'react';

import PanelIcon from '../assets/PanelIcon';


export default class Panel extends Component {

  render() {
    const {data} = this.props;

    return(
      <div className="panel-detail">
          <PanelIcon data={data}/>
          <h1>{data.title}</h1>
      </div>
    );
  }
}