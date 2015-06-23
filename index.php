<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content="Green River College">
	<meta name="description" content="Earn a bachelor's degree Software Development or Network Administration & Security at Green River College. Day and evening programs are available." />
	<meta name="keywords" content="Green River, GRCC, Green River Community College, Green River College, bas, Auburn, Washington, IT Program, IT Programs, Bachelor's Degree, Bachelors Degree, Bachelor Degree, software development, software, 4 year degree, 4 year degrees, four year degree, four year degrees, computer degree, computer degrees, four year computer degree, 4 year computer degree, BAS Software Development, BAS"
	/>
    <title>IT Bachelor's Degrees at Green River College</title>

	<!-- Le styles -->
	<link href="../assets/css/bootstrap.css" rel="stylesheet">
	<link href="../assets/css/bootstrap-responsive.css" rel="stylesheet">
	<link href="../assets/css/styles.min.css" rel="stylesheet">
    <link href="../assets/css/top.css" rel="stylesheet">

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

	<!-- Carousel
    ================================================== -->
	<!--<div id="myCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="item active">
          <img src="../assets/img/banner.png" alt="">
          <div class="container">
            <div class="carousel-caption">
              <h1>Technical Resources</h1>
              <p class="toplead">Created by and for students and faculty in Green River's Bachelor's in Software Development program.</p>
              <a class="btn btn-large btn-success" href="software-development.php">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div> /.carousel -->

	<div class="jumbotron">
		<div class="container top">
			<h1>Online Advisor</h1>
		</div>
	</div>

	<!-- Marketing messaging and featurettes
    ================================================== -->
	<!-- Wrap the rest of the page in another container to center all the content. -->

	<div class="container marketing">
		<!-- Three columns of text below the carousel -->
		<div class="row">
			<h1>Green River IT Advising</h1>
			<p>This is an educational tool for learning purposes only. Every effort has been made to ensure that the information in this publication is accurate and up to date. However, because curriculum, programs, tutition and other areas may change during the
			period this publication is in circulation, students should assume the responsibility of consulting the academic program office for the most current information. All announcements are subject to change without notice and do not constitute an agreement
			between Green River College and the student.</p>
			<h3>Please select the program that you are interested in and the quarter that you intend to begin.</h3>

            <form name="myForm" action="programs-process.php" method="post">
				<fieldset class="radio-qtr-group">
					<legend>Select a Program</legend>
					<div>
						<label for="aa-systems">
							<input type="radio" name="program" value="aa-systems" id="aa-systems" checked="checked"> AAS-T IT Systems
						</label>
					</div>

					<div>
						<label for="bas-network">
							<input type="radio" name="program" value="bas-network" id="bas-network"> BAS Network Administration and Security
						</label>
					</div>

					<div>
						<label for="bas-software">
							<input type="radio" name="program" value="bas-software" id="bas-software"> BAS Software Development
						</label>
					</div>
				</fieldset>

				<fieldset class="aa-radio-programs-group">
					<legend>Select a Starting Quarter</legend>
					<div>
						<label for="fall">
							<input type="radio" name="aa-quarter" value="fall" id="fall" checked> Fall
						</label>
					</div>

					<div>
						<label for="winter">
							<input type="radio" name="aa-quarter" value="winter" id="winter"> Winter
						</label>
					</div>

					<div>
						<label for="spring">
							<input type="radio" name="aa-quarter" value="spring" id="spring"> Spring
						</label>
					</div>

					<div>
						<label for="summer">
							<input type="radio" name="aa-quarter" value="summer" id="summer"> Summer
						</label>
					</div>
                </fieldset>

                <fieldset class="bas-radio-programs-group">
                    <legend>Select a Starting Quarter</legend>
                    <div>
                        <label for="fall-day">
                            <input type="radio" name="bas-quarter" value="fall-day" id="fall-day" checked> Fall (Day)
                        </label>
                    </div>

					<div>
						<label for="winter-evening">
							<input type="radio" name="bas-quarter" value="winter-evening" id="winter-evening"> Winter (Evening/Hybrid)
							<a href="#" id="hybrid-popup" data-toggle="popover" title="What is Hybrid?" data-placement="right" data-content="Hybrid courses are those in which some
                    traditional face-to-face 'seat time' has been replaced by online learning activities.

                    The purpose of a hybrid course is to take advantage of the best features of both face-to-face

                    and online learning. Typically, a hybrid course will meet 50% of the time in the classroom

                    and 50% online.">More info</a></label>
					</div>
				</fieldset>

				<input name="submit" type="submit" class="btn">
			</form>
		</div>
		<!-- /.row -->

		<hr class="featurette-divider">
		<?php include '../includes/footer.html'; ?>
	</div>
	<!-- /.container -->
	<!-- Le javascript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="../assets/js/jquery.js"></script>
	<!--
    <script src="../assets/js/bootstrap-transition.js"></script>
	<script src="../assets/js/bootstrap-alert.js"></script>
	<script src="../assets/js/bootstrap-modal.js"></script>
	<script src="../assets/js/bootstrap-dropdown.js"></script>
	<script src="../assets/js/bootstrap-scrollspy.js"></script>
	<script src="../assets/js/bootstrap-tab.js"></script>
	<script src="../assets/js/bootstrap-tooltip.js"></script>
	<script src="../assets/js/bootstrap-popover.js"></script>
	<script src="../assets/js/bootstrap-button.js"></script>
	<script src="../assets/js/bootstrap-collapse.js"></script>
	<script src="../assets/js/bootstrap-typeahead.js"></script>
    -->
    <script src="../assets/js/bootstrap-component.js"></script>
	<script src="../assets/js/holder/holder.js"></script>

	<script>
		$(document).ready(function() {
			// Hide the caption when page is loaded
			//$("p").hide();
			// Check if user clicks on the BAS or AS program
			// Show relevant information

			$(".bas-radio-programs-group").hide();

            $("#aa-systems").click(function() {
                $(".aa-radio-programs-group").show();
				$(".bas-radio-programs-group").hide();
			});

			$("#bas-network, #bas-software").click(function() {
				$("div#spring-radio, div#summer-radio").hide();
                $(".aa-radio-programs-group").hide();
				$(".bas-radio-programs-group").show();
			});

			// See if BAS radio buttons are selected
			// If they are not, show/hide information

			if ($("#bas-network, #bas-software").is(':checked')) {
				$("div#spring-radio, div#summer-radio").hide();
				$(".radio-classes-group").show();
			};

			// Show the caption only when evening/hybrid is selected
			$("#evening").click(function() {
				$("p").show();
			});

			$("#day").click(function() {
				$("p").hide();
			});

			$("#hybrid-popup").popover({
				trigger: "hover"
			});

		});
	</script>
</body>
</html>
