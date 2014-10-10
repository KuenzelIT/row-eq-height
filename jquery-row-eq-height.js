$( document ).ready(function() {
    var getMaxHeight = function(selector){
        var heights = $(selector).map(function() {
            return $(this).height();
        }).get();

        maxHeight = Math.max.apply(null, heights);

        return maxHeight;
    };

    var selector = ".row-eq-height > [class^='col-']";
    $(selector).height(getMaxHeight(selector));

    var selector = ".row-eq-height > [class^='col-'] .panel";
    $(selector).height(getMaxHeight(selector));
});