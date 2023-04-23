import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// Register the command to open the webview panel
	let disposable = vscode.commands.registerCommand('testagain.helloWorld', () => {
		// Create a new webview panel
		const panel = vscode.window.createWebviewPanel(
			'testagain.helloWorld',
			'Hello World',
			vscode.ViewColumn.One,
			{}
		);

		// Load the HTML content into the webview panel
		panel.webview.html = getHelloWorldHtml();
	});

	context.subscriptions.push(disposable);
}

function getHelloWorldHtml() {
	// Return a simple HTML page with the "Hello World" message
	return `<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title>Hello World</title>
		</head>
		<body>
			<h1>Hello World</h1>
			why are you gay
		</body>
	</html>`;
}
