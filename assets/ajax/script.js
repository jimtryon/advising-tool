$(document).ready(function() {
    $("a").click(function() {
        $.ajax({
            type: 'get',
            url: 'programs_process.php',
            success: function(data) {
                console.log('success', data);
            }
                
            });
        });
});