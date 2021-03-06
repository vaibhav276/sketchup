import React, { Component } from 'react';
import {
  Grid,
  Divider,
  Icon,
} from 'semantic-ui-react';
import MainMenu from './mainMenu';
import Editor from './editor';
import Render from './render';

export default class App extends Component {
  state = {
    text: 'Hello world'
  };

  onCompile = (text) => {
    this.setState({
      text: text,
      html: text
    })
  };

  render() {
    return (
      <React.Fragment>
        <MainMenu />
        <Grid
          columns={2}
          stretched={true}
          padded={false}
        >
          <Divider vertical>
            <Icon name='arrow alternate circle right outline'/>
          </Divider>
          <Grid.Column>
            <Editor
              text = {this.state.text}
              onCompile = {this.onCompile}
            />
          </Grid.Column>
          <Grid.Column>
            <Render html = {this.state.html} />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
