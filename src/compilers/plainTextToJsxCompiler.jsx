import React from 'react';
import { Container } from 'semantic-ui-react';

export default class PlainTextToJsxCompiler {
    compile(text) {
        return (
            <Container>
            { text.split('\n').map( e => <p>{e}</p> ) }
            </Container>
        );
    }
}
