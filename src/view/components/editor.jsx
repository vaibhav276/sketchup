import React, { Component } from 'react';
import {
    Radio,
    Label,
    Icon,
    Container,
    Button
} from 'semantic-ui-react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-eclipse";

export default class Editor extends Component {
    state = {
        text: this.props.text,
        options: {
            live: true,
            inputFormat: 'plain-text'
        }
    }
    onChange = (newValue) => {
        this.setState({
            text: newValue
        });
        if (this.state.options.live) {
            this.props.onCompile(this.state.text);
        }
    };

    onCompile = () => {
        this.props.onCompile(this.state.text);
    }

    onLiveToggle = () => {
        const newState = {...this.state};
        newState.options.live = !this.state.options.live;
        this.setState(newState);
    }

    liveButtonColor = () => {
        if (this.state.options.live === false) {
            return 'blue';
        } else {
            return 'green';
        }
    }

    liveButtonLabel = () => {
        if (this.state.options.live === false) {
            return (
                <Label color='blue'>
                  <Icon name='circle notched' />
                  Ctrl+Enter to compile
                </Label>
            );
        } else {
            return (
                <Label color='green'>
                  <Icon name='circle notched' loading>
                  </Icon>
                  Compiling live
                </Label>
            );
        }
    }

    render() {

        const commands = [
            {
                name: 'compile',
                bindKey: {
                    win: 'Ctrl-Enter',
                    mac: 'Command-Enter'
                },
                exec: this.onCompile
            }
        ]
        return (
            <Container textAlign='right'>
              <p />
              <Button as='div' labelPosition='left'
                      onClick={this.props.onInputFormatClick}
              >
                <Label as='a' basic>
                  Input format
                </Label>
                <Label basic color='purple'>
                  {this.props.inputFormat}
                </Label>
              </Button>
              <Radio label={this.liveButtonLabel()}
                     onClick={this.onLiveToggle}
                     defaultChecked
              />
              <p />
              <AceEditor
                mode="yaml"
                theme="eclipse"
                onChange={this.onChange}
                name="editor"
                width="auto"
                tabSize={2}
                editorProps={{ $blockScrolling: false }}
                showGutter={false}
                showPrintMargin={false}
                value={this.state.text}
                commands={commands}
              />
            </Container>
        )
    }
}
