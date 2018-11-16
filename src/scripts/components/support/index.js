import React from 'react';
import { styles } from './styles.js';

export default class Support extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <style>{styles}</style>
        <menu className="ts-toolbar-menu ts-right">
          {this.props.showSettingsBtn && 
          <li className="ts-toolbar-item ts-item">
            <a href={this.props.settingsLink} target="_blank">Settings</a>
            <i className="ts-icon-settings"></i>
          </li>}
          {this.props.showSupportBtn &&
            <li className="ts-toolbar-item ts-item">
              <a href={this.props.supportLink} target="_blank">Support</a>
            </li>
          }
        </menu>
      </React.Fragment>
    )
  }
}