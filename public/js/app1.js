//index.php

$(document).ready(function(){

	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true
	});

	$("#preview-form").submit(function(e){
		var value = editor.getValue();
		if(value.length == 0) {
			alert("Missing comment!");
		}
	});
	
});
	// $('#view').click(function(){
	// 	var file = document.getElementById('comment').files[0];

	// 	if (file){
	// 		var reader = new fileReader();
	// 		reader.readerAsTest(file);
	// 		reader.onload = function(e){
	// 			alert(e.target.result);
	// 		};
	// 	}
	// });


	// var code = $(".comment")[0];
	// var editor = CodeMirror.fromTextArea(document.getElementById("comment"), {
	// 	mode:  "javascript",
	// 	theme: 'icecoder',
	// 	styleActiveLine: true,
	// 	lineNumbers: true,
	// 	lineWrapping: true
	// });

	// $("#pop").click(function(){
	// 	$("#result").html($('#comment').val());
	// });


// $(document).ready(function(){
// 	// var code = $(".codemirror-textarea")[0];
// 	var editor = CodeMirror.fromTextArea(preview-form-comment, {
// 		lineNumbers : true,
// 		mode: "markdown",
// 	});

// 	function updateTextArea(){
// 		editor.save();
// 	}
// 	editor.on('change', updateTextArea);

// 	$("#preview-form").submit(function(e){
// 		var value = editor.getValue();
// 		if(value.length == 0) {
// 			alert("Missing comment!");
// 		}
// 	});

// });


	// var code = $(".comment")[0];
	// var editor = CodeMirror.fromTextArea(document.getElementById("comment"), {
	// 	mode:  "javascript",
	// 	theme: 'icecoder',
	// 	styleActiveLine: true,
	// 	lineNumbers: true,
	// 	lineWrapping: true,
	// });

	// $("#pop").click(function(){
	// 	$("#result").html($('#comment').val());
	// });

	// $("#result").focus();

	// setTimeout(function() {
	// 	editor.refresh();
	// },1);

	// var delay;
	// var code = $(".comment")[0];
	// var comment = CodeMirror.fromTextArea(code, {
	// 	lineNumbers : true,
	// 	mode: "markdown",
	// });

	// comment.on("change", function() {
	// 	clearTimeout(delay);
	// 	delay = setTimeout(updatePreview, 300);
	// });

	// function updatePreview() {
	// 	var previewFrame = document.getElementById('result');
	// 	var preview =  previewFrame.contentDocument;
	// }
	// setTimeout(updatePreview, 300);


	// var comment = document.getElementById('comment');
	// comment.addEventListener('textarea',function(){
	// 	document.getElementById('result').innerHTML = comment.value;
	// });

	// $('form').submit(function(){
	// 	alert("cool");
	// });