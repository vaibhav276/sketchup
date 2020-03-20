import PlainTextToHtmlCompiler from './plainTextToHtmlCompiler';

export default class CompilerFactory {
    lookupCompiler(inputFormat, outputFormat) {
        switch(inputFormat) {
           case 'plain-text':
                return new PlainTextToHtmlCompiler();
           default:
                return new PlainTextToHtmlCompiler();
        }
    }
}
