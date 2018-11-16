import '../styles/index.scss';
import React from 'react';
import { styles } from './styles.js';
import { wrap } from '@skatejs/renderer-react';
import { props, withComponent } from 'skatejs';

import Support from './components/support';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <style>{styles}</style>
        <header className="ts-headerbar">
          <ul className="ts-headerbar-bars">
            <li className="ts-headerbar-headerbar ts-toolbar ts-spirit ts-macro ts-hasleft ts-nosearch">
              <menu className="ts-toolbar-menu ts-left">
                <li className="ts-toolbar-item ts-toolbar-icon">
                  <img src={this.props.icon} width="40" height="40"></img>
                </li>
                <li className="ts-toolbar-item ts-toolbar-title">
                  <label>{this.props.title}</label>
                </li>
              </menu>
              <Support {...this.props} />
            </li>
          </ul>
        </header>
      </React.Fragment>
    );
  }
}

class TsUiHeader extends withComponent(wrap(Header)) {
  static get props() {
    return {
      icon: props.string,
      showSettingsBtn: props.boolean,
      settingsLink: props.string,
      showSupportBtn: props.boolean,
      supportLink: props.string,
      tabs: props.array,
      title: props.string
    };
  }
}

customElements.define('tsui-header', TsUiHeader);