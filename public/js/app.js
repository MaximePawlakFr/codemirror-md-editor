
//index.html

document.getElementById('result').innerHTML = marked(localStorage.getItem('text'));

var editorNode = document.getElementById("comment");

function saveEditor(){
	var editorValue = editorNode.value;
	localStorage.setItem('text', editorValue);
}

var editor;
(function load(tartanpion){
	
	editor = tartanpion.fromTextArea(document.getElementById("comment"), {
		mode:  "javascript",
		theme: 'icecoder',
		styleActiveLine: true,
		lineNumbers: true,
	});

	var storeValue = localStorage.getItem('text');
	if (storeValue) {
		document.getElementById('comment').value = storeValue;
	};
})(CodeMirror);

// Immediately Invoked Functions Expression IIFE
// load();

function submit_html(){

	editor.save();
	var code = document.getElementById("comment").value;
	document.getElementById('result').innerHTML =
	marked(code);
}

setInterval(function() { 
	saveEditor();
	submit_html();
},1000);
