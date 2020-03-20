import React, { Component } from 'react';
import {
  Grid,
  Divider,
  Icon,
  Modal,
  Dropdown
} from 'semantic-ui-react';
import MainMenu from './mainMenu';
import Editor from './editor';
import Render from './render';

import CompilerFactory from '../../compilers/compilerFactory';

export default class App extends Component {
  state = {
    text: '# Hello world',
    html: '',
    options: {
      inputFormat: 'gh-markdown',
      inputFormatOptions: [{
        key: 'gh-markdown',
        text: 'Github flavor markdown',
        value: 'gh-markdown'
      }, {
        key: 'plain-text',
        text: 'Plain text',
        value: 'plain-text'
      }],
      outputFormat: 'html',
    },
    elements: {
      inputFormatModal: {
        open: false
      }
    }
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
      this.state.options.inputFormat,
      this.state.options.outputFormat
    );
    const html = compiler.compile(text);
    this.setState({
      html: html
    });
  };

  onInputFormatClick = () => {
    this.setState({
      elements: {
        inputFormatModal: {
          open: true
        }
      }
    });
  }

  onInputFormatChange = (e, { value }) => {
    const newOptions = {...this.state.options};
    newOptions.inputFormat = value;
    this.setState({ options: newOptions});

    const newElements = {...this.state.elements}
    newElements['inputFormatModal']['open'] = false
    this.setState({ elements: newElements});
  }

  render() {
    return (
      <React.Fragment>
        <MainMenu
          inputFormat={this.state.options.inputFormat}
          outputFormat={this.state.options.outputFormat}
        />
        <Modal size="tiny"
               open={this.state.elements.inputFormatModal.open}
               onClose={this.closeInputFormatModal}>
          <Modal.Header>Input Format</Modal.Header>
          <Modal.Content>
            <Dropdown
              placeholder='Select and input format'
              fluid
              search
              selection
              options={this.state.options.inputFormatOptions}
              onChange={this.onInputFormatChange}
            />
          </Modal.Content>
        </Modal>
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
              inputFormat = {this.state.options.inputFormat}
              onInputFormatClick={this.onInputFormatClick}
            />
          </Grid.Column>
          <Grid.Column>
            <Render
              html = {this.state.html}
              outputFormat = {this.state.options.outputFormat}
            />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
