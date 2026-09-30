const MIN_WIDTH = 90;
const REM_PX = 16;

let visible = true;

$(window).resize(function(){

    if($(window).width() <= MIN_WIDTH * REM_PX) {
        if(!visible) return;
        $(".supplement").addClass("hidden");
        visible = false;

    } else {
        if(visible) return;
        $(".supplement").removeClass("hidden");
        visible = true;
    }

});

let debugging = false;
function toggleDebug() {
    debugging = !debugging;
    $(":root").css("--debug", debugging ? "1px solid" : "0px solid");
}