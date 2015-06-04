<?php
    $courseId = $_GET['courseid'];
    
    $title = "Course Information: " . $courseId;
    $desc = "Description: " . $courseId;
?>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8"> 
</head>
<body>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                 <h4 class="modal-title"><?php echo $title; ?></h4>
            </div>			<!-- /modal-header -->
            <div class="modal-body">
            <p>
            <?php
                echo $desc;
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
