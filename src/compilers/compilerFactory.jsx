import PlainTextToHtmlCompiler from './plainTextToHtmlCompiler';
import GhMarkdownToHtmlCompiler from './ghMarkdownToHtmlCompiler';

export default class CompilerFactory {
    lookupCompiler(inputFormat, outputFormat) {
        switch(inputFormat) {
           case 'plain-text':
                return new PlainTextToHtmlCompiler();
           case 'gh-markdown':
                return new GhMarkdownToHtmlCompiler();
           default:
                return new PlainTextToHtmlCompiler();
        }
    }
}
