<?php

$comment = null;

if($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST['preview-form-comment'])) {
	$comment = $_POST['preview-form-comment'];
}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>React all the things !</title>
	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="codemirror/lib/codemirror.css">
</head>
<body>
	<h1>React</h1>
	<div id="hello"></div>
	<form id="preview-form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		<textarea class="codemirror-textarea" name="preview-form-comment" id="preview-form-comment"><?php echo $comment; ?></textarea>
		<br>
		<input type="submit" name="preview-form-submit" id="preview-form-submit" value="Submit">
	</form>

	<div id="preview-comment"><?php echo $comment; ?></div>

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script src="codemirror/lib/codemirror.js"></script>
	<script src="js/app.js"></script>
	<script src="/js/bundle.js"></script>
</body>
</html>