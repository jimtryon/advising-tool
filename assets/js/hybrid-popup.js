   // popup to show when more info link is clicked 
   $("#hybrid-popup").popover({
                        placement: 'right',
                        html: 'true',
                        title: '<span class="text-info"><strong>More info</strong></span>'+
                        '<button type="button" id="close" class="close" onclick="$(&quot;#example&quot;).popover(&quot;hide&quot;);">&times;</button>',
                        content: 'Hybrid" courses are those in which some traditional face-to-face "seat time" has been replaced by online learning activities. The purpose of a hybrid course is to take advantageof the best features of both face-to-face and online learning. Typically, a hybrid course will meet 50% of the time in the classroom and 50% online.'
                    });
