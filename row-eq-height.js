$( document ).ready(function() {
    var getMaxHeight = function(list){
        var heights = list.map(function() {
            return $(this).height();
        }).get();

        maxHeight = Math.max.apply(null, heights);

        return maxHeight;
    };

    $('.row-eq-height').each(function(){
        var list = $(this).find('> [class^="col-"]');
        $(this).find('> [class^="col-"]').height(getMaxHeight(list));
    });

    $('.row-eq-height').each(function(){
        var list = $(this).find('> [class^="col-"] .panel');
        $(this).find('> [class^="col-"] .panel').height(getMaxHeight(list));
    });
});