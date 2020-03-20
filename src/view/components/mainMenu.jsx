import React, { Component } from 'react';
import {
  Menu,
  Dropdown,
  Icon,
} from 'semantic-ui-react';

export default class MainMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu attached='top'>
          <Dropdown item icon='wrench' simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name='dropdown' />
                <span className='text'>New</span>

                <Dropdown.Menu>
                  <Dropdown.Item>Document</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Open</Dropdown.Item>
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Export</Dropdown.Header>
              <Dropdown.Item>Share</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </React.Fragment>
    );
  }
}
