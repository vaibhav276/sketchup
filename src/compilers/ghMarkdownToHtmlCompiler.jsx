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
        return Marked(text);
    }
}
