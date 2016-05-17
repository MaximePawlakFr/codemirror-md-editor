//index.html

var m = localStorage.getItem('text');
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

	var storeValue = localStorage.getItem('text');
	if (storeValue) {
		document.getElementById('comment').value = storeValue;
	};

	editor = CodeMirror.fromTextArea(document.getElementById("comment"), {
		mode:  "javascript",
		lineNumbers: true,
	});
	editor.on('change', submit_html);
}
load();


function submit_html(){
	console.log('redddddddd')
	editor.save();
	var code = document.getElementById("comment").value;
	document.getElementById('result').innerHTML =
	marked(code);
}