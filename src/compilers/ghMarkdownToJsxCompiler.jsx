import React from 'react';
import { Container } from 'semantic-ui-react';
import Marked from 'marked';

export default class GhMarkdownToHtmlCompiler {
    compilerImpl = undefined;

    constructor() {
        Marked.setOptions({
            gfm: true
        });
        this.compilerImpl = Marked;
    }

    compile(text) {
        return <Container dangerouslySetInnerHTML={{ __html: Marked(text) }} />
    }
}
