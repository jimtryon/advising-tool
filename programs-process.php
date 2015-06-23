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

	include_once('modal-process.php');
}
?>
