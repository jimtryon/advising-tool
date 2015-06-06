<?

// Display table for IT plan

$submitted = isset($_POST['submit']);



// when form is submitted, include the correct schedule

if ($submitted) {



	$prog = $_POST['program'];

	$qtr = $_POST['quarter'];

	$class = $_POST['class'];



	// if bas program is selected, modify the sched string

	if ($prog == "bas-network" || $prog == "bas-software") {

		$sched = $prog. '-' .$qtr. '-' .$class;

		//echo $sched;

	} else {

		$sched = $prog. '-' .$qtr;
	}



    $path = "schedules/";



	include ($path . $sched .'.php');

}
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

<link rel="stylesheet" href="../assets/css/tables.css">
</head>
<body>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        </div> <!-- /.modal-content -->
    </div> <!-- /.modal-dialog -->
</div> <!-- /.modal -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<!-- Simulate the user is pressing the back button to save state of radio buttons -->
<a href="index.php" class="back btn btn-default" role="button" onclick="history.back(); return false;">Back</a>

<script>
  $('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
  });
</script>
</body>
</html>














<script>
/*	
$(document).ready(function() {
		
		$("a").hover(function() {
			var href = $(this).attr('href');
			var id = getCourseId(href);
			alert(id);
			
			$.get(href, { id : id }, function(data) {
				alert(data);
			});
		});
		
		function getCourseId(url) {
			var param = url.split('?');
			var pair = param[1].split('=');
			var id = pair[1];
			return id;
		}
	})
*/
</script>