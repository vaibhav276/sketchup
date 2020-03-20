import React, { Component } from 'react';
import {
  Grid,
  Divider,
  Icon,
} from 'semantic-ui-react';
import MainMenu from './mainMenu';
import Editor from './editor';
import Render from './render';

import CompilerFactory from '../../compilers/compilerFactory';

export default class App extends Component {
  state = {
    text: '# Hello world',
    html: '',
    inputFormat: 'gh-markdown',
    outputFormat: 'html'
  };

  compilerFactory = undefined;

  constructor() {
    super();
    this.compilerFactory = new CompilerFactory();
  }

  componentDidMount() {
    this.onCompile(this.state.text);
  }

  onCompile = (text) => {
    const compiler = this.compilerFactory.lookupCompiler(
      this.state.inputFormat,
      this.state.outputFormat
    );
    const html = compiler.compile(text);
    this.setState({
      text: text,
      html: html
    })
  };

  render() {
    return (
      <React.Fragment>
        <MainMenu
          inputFormat={this.state.inputFormat}
          outputFormat={this.state.outputFormat}
        />
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
              inputFormat = {this.state.inputFormat}
            />
          </Grid.Column>
          <Grid.Column>
            <Render
              html = {this.state.html}
              outputFormat = {this.state.outputFormat}
            />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
