const MIN_WIDTH = 90;
const REM_PX = 16;

let visible = true;

$(window).resize(function(){

    if($(window).width() <= MIN_WIDTH * REM_PX) {
        if(!visible) return;
        $(".large").addClass("hidden");
        visible = false;

    } else {
        if(visible) return;
        $(".large").removeClass("hidden");
        visible = true;
    }

});