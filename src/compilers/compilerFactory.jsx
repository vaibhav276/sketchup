import PlainTextToJsxCompiler from './plainTextToJsxCompiler';
import GhMarkdownToJsxCompiler from './ghMarkdownToJsxCompiler';

export default class CompilerFactory {
    lookupCompiler(inputFormat) {
        switch(inputFormat) {
           case 'plain-text':
                return new PlainTextToJsxCompiler();
           case 'gh-markdown':
                return new GhMarkdownToJsxCompiler();
           default:
                return new PlainTextToJsxCompiler();
        }
    }
}
