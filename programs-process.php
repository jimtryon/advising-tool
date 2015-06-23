<?
// Display table for IT plan
$submitted = isset($_POST['submit']);

// when form is submitted, include the correct schedule
if ($submitted) {
	$prog = $_POST['program'];
	$a_qtr = $_POST['aa-quarter'];
	$b_qtr = $_POST['bas-quarter'];

	//$class = $_POST['class'];

	// if bas program is selected, modify the sched string
	if ($prog == "bas-network" || $prog == "bas-software") {
		$sched = $prog. '-' .$b_qtr;

		//echo $sched;
	} else {
		$sched = $prog. '-' .$a_qtr;
	}

    $path = "schedules/";

	include_once ($path . $sched . '.php');

	if ($prog == "aa-systems") {
		include_once('track-key.php');
	}
}
?>

<!DOCTYPE html>
<html>
<head>
		<link rel="stylesheet" href="../assets/css/tables.css">
		<!-- Le styles -->
		<link href="../assets/css/bootstrap.css" rel="stylesheet">
		<link href="../assets/css/bootstrap-responsive.css" rel="stylesheet">
		<link href="../assets/css/styles.css" rel="stylesheet">

		<!-- IT Advising styles -->
		<link href="../assets/css/programs.css" rel="stylesheet">

		<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
	      <script src="../assets/js/html5shiv.js"></script>
	      <![endif]-->

		<!-- Fav and touch icons -->
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
		<link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
		<link rel="shortcut icon" href="../assets/img/grtech.jpg">
	</head>

	<body>

	<!-- NAVBAR -->
	<?php include '../includes/navbar.html'; ?>

	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
			</div> <!-- /.modal-content -->
		</div> <!-- /.modal-dialog -->
	</div> <!-- /.modal -->

	<!-- Simulate the user is pressing the back button to save state of radio buttons -->
	<a href="index.php" class="back btn btn-default" role="button">Back</a>

	<!-- FOOTER -->
	<?php include "../includes/footer.html"; ?>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
	</script>

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js">
	</script>

	<script>
	  $('body').on('hidden.bs.modal', '.modal', function () {
	    $(this).removeData('bs.modal');
	  });
	</script>
	</body>
</html>
