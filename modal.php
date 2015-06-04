<?php
require 'connect.php';

$id = $_GET['courseid'];

if ($id) {

	try {

	 // Create a new PDO connection object

	$dbh = new PDO('mysql:host=localhost;dbname=jim_grcc', $user, $pass);

	// Set the error mode

	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$stmt = $dbh->prepare('SELECT * FROM course WHERE courseid = :id');

    $stmt->execute(array('id' => $id));

	// Get array containing all of the result rows

	$row = $stmt->fetch();

	// Print data if one of the rows were returned

	if ($row != null  ) {
		//print_r($_GET);
		
		$coursenum = $row['coursenum'];
		$title = $row['title'];
		$desc = $row['description'];
		$credits = $row['credits'];
		$prereqs = $row['prereqs'];

	} else {

		echo "No rows returned";

	}
    }
    	catch(PDOException $e)

	{

	echo 'Error: ' . $e->getMessage();

	}
}
 ?>
 
 <!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8"> 
</head>
<body>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                 <h4 class="modal-title"><?php echo $coursenum .": " .$title; ?></h4>
            </div>			<!-- /modal-header -->
            <div class="modal-body">
            <p>
            <?php
                $coursetext = "<p>$desc</p>
				<p>$credits credits</p><br>
				<p>$prereqs</p>";
				
				echo $coursetext;
            ?>
            </p>
            </div>			<!-- /modal-body -->
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>			<!-- /modal-footer -->
            
            <script>
  $('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
  });
</script>

</body>
</html>