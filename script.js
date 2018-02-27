var $name = $('.name');
var count = $name.length;
$name.each( function(index) {
    $(this)
        .delay(300 * index)
        .fadeIn( 300, 'easeInSine', function() {
            if( $(this).index() == count - 1 )
            $name.each( function(index) {
                var context = $(this);
                setTimeout( function() {
                   context.addClass('ani'); 
                }, 2000*index);
            });
        });
});