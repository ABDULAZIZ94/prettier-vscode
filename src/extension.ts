import {
    languages,
    ExtensionContext,
    DocumentSelector,
    window,
    workspace
} from 'vscode';
import EditProvider, { PrettierConfig } from './PrettierEditProvider';

const VALID_LANG: DocumentSelector = ['javascript', 'javascriptreact'];

export function activate(context: ExtensionContext) {
    const config: PrettierConfig = workspace.getConfiguration('prettier') as any;
    if(config.useFlowParser){
        window.showWarningMessage("Option 'useFlowParser' has been deprecated. Use 'parser: \"flow\"' instead.")
    }
    context.subscriptions.push(
        languages.registerDocumentRangeFormattingEditProvider(VALID_LANG, new EditProvider())
    );
}

// this method is called when your extension is deactivated
export function deactivate() {
}
