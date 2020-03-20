import React, { Component } from 'react';
import {
  Label,
  Button,
  Container
} from 'semantic-ui-react';

export default class Render extends Component {
    render() {
       return (
           <div>
             <Container textAlign="right">
               <p />
               <Button as='div' labelPosition='left'>
                 <Label basic as='a'>
                   Output format
                 </Label>
                 <Label basic color='blue'>
                   {this.props.outputFormat}
                 </Label>
               </Button>
               <p />
             </Container>
             <Container>
               { this.props.html }
             </Container>
           </div>
       );
    }
}
