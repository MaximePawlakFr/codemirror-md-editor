//index.html

var m = localStorage.getItem;
if (typeof m === "string") {
	document.getElementById('result').innerHTML =
	marked(localStorage.getItem('text'));
};


function saveEditor(){
	var editorValue = document.getElementById("comment").value;
	localStorage.setItem('text', editorValue);
}

var previewLoad = setInterval(function() { saveEditor() },1000);

var editor;
function load(){

	editor = CodeMirror.fromTextArea(document.getElementById("comment"), {
		mode:  "javascript",
		theme: 'icecoder',
		styleActiveLine: true,
		lineNumbers: true,
	});

	var storeValue = localStorage.getItem('text');
	if (storeValue) {
		document.getElementById('comment').value = storeValue;
	};
}

load();

function submit_html(){
	editor.save();
	var code = document.getElementById("comment").value;
	document.getElementById('result').innerHTML =
	marked(code);
}

var preview = setInterval(function() { submit_html() },1000);