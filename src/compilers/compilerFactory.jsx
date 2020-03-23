import PlainTextToJsxCompiler from './plainTextToJsxCompiler';
import GhMarkdownToJsxCompiler from './ghMarkdownToJsxCompiler';
import GraphTextToJsxCompiler from './graphTextToJsxCompiler';;

export default class CompilerFactory {
    lookupCompiler(inputFormat) {
        switch(inputFormat) {
           case 'plain-text':
                return new PlainTextToJsxCompiler();
           case 'gh-markdown':
                return new GhMarkdownToJsxCompiler();
           case 'graph-text':
                return new GraphTextToJsxCompiler();
           default:
                return new PlainTextToJsxCompiler();
        }
    }
}
