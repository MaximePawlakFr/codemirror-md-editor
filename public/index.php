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
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="codemirror/lib/codemirror.css">
	<link rel="stylesheet" type="text/css" href="css/semantic.min.css">
</head>
<body>
	<h1>React</h1>
	<div id="hello"></div>
	<div class="ui grid">
		<div class="two column row">
			<div class="ui eight wide column segment">
				<form id="preview-form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
					<textarea class="codemirror-textarea" name="preview-form-comment" id="preview-form-comment"><?php echo $comment; ?></textarea>
					<br>
					<input type="submit" name="preview-form-submit" id="preview-form-submit" value="Submit">
				</form>
			</div>
			<div class="ui eight wide column segment">
				<div id="preview-comment"><?php echo $comment; ?></div>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script src="codemirror/lib/codemirror.js"></script>
	<script src="js/semantic.min.js"></script>
	<script src="js/marked.js"></script>
	<script src="js/app1.js"></script>
	<script type="text/javascript">
	
	</script>
</body>
</html>