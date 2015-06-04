   // popup to show when more info link is clicked 
   $("#course-popup").popover({
                        placement: 'right',
                        html: 'true',
                        title: '<span class="text-info"><strong>More info</strong></span>'+
                        '<button type="button" id="close" class="close" onclick="$(&quot;#example&quot;).popover(&quot;hide&quot;);">&times;</button>',
                        content: ''
                    });
