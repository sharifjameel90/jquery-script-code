const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "jqc.whichone",
    async function () {
      const prefrences = await vscode.window.showInformationMessage(
        "Which One You Want To Select?",
        "Google CDN",
        "Microsoft CDN",
        "CDNJS CDN",
        "jsDelivr CDN"
      );
      if (prefrences === "Google CDN") {
        const inp = vscode.window.createInputBox();

        inp.value =
          '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>';
        inp.show();
      } else if (prefrences === "Microsoft CDN") {
        const inp = vscode.window.createInputBox();

        inp.value =
          '<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.5.1.min.js"></script>';
        inp.show();
      } else if (prefrences === "CDNJS CDN") {
        const inp = vscode.window.createInputBox();

        inp.value =
          '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>';
        inp.show();
      } else {
        const inp = vscode.window.createInputBox();

        inp.value =
          '<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>';
        inp.show();
      }
      if (prefrences == null) return;
    }
  );
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
