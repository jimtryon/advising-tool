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



	include ($path . $sched .'.html');

}



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

		echo '<div class="course-popup">';

		echo "<h3>".$row['coursenum']. ": " .$row['title'] . "</h3>";

		echo "<strong>Course number: </strong>" .$row['coursenum'] ."<br><br>";

		echo "<strong>Title: </strong>" .$row['title'] ."<br><br>";

		echo "<strong>Description: </strong>" .$row['description'] ."<br><br>";

		echo "<strong>Credits: </strong>" .$row['credits'] ."<br><br>";

        echo "<strong>Prerequisites:</strong> " .$row['prereqs'] ."";

        echo '</div>';

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
