var i = 0;
function open_under_menu() {
    if (i == 0) {
        document.getElementById('under_menu').style.display = "flex";
        document.getElementById('arrow').style.transform = "rotate(180deg)";
        document.getElementById('btn_help').classList.add("add_color");
        document.getElementById('union').classList.add("add_color_arrow");

        i = 1;
    } else
        if (i == 1) {
            document.getElementById('under_menu').style.display = "none";
            document.getElementById('arrow').style.transform = "rotate(0deg)";
            document.getElementById('btn_help').classList.remove("add_color");
            document.getElementById('union').classList.remove("add_color_arrow");
            i = 0;
        }
}

function change_slide1() {
    document.getElementById('slide1').style.background = "url(images/choosed.svg)";
    document.getElementById('slide1').style.width = "10px";
    document.getElementById('slide1').style.height = "10px";
    document.getElementById('slide2').style.background = "url(images/normal.svg)";
    document.getElementById('slide2').style.width = "6px";
    document.getElementById('slide2').style.height = "6px";
    document.getElementById('move_left').classList.remove("unshow");
    document.getElementById('move_right').classList.add("unshow");
}

function change_slide2() {
    document.getElementById('slide2').style.background = "url(images/choosed.svg)";
    document.getElementById('slide2').style.width = "10px";
    document.getElementById('slide2').style.height = "10px";
    document.getElementById('slide1').style.background = "url(images/normal.svg)";
    document.getElementById('slide1').style.width = "6px";
    document.getElementById('slide1').style.height = "6px";
    document.getElementById('move_right').classList.remove("unshow");
    document.getElementById('move_left').classList.add("unshow");
}

function change_slide_1() {
    document.getElementById('slide_1').style.background = "url(images/choosed.svg)";
    document.getElementById('slide_1').style.width = "10px";
    document.getElementById('slide_1').style.height = "10px";

    document.getElementById('slide_2').style.background = "url(images/normal.svg)";
    document.getElementById('slide_2').style.width = "6px";
    document.getElementById('slide_2').style.height = "6px";

    document.getElementById('slide_3').style.background = "url(images/normal.svg)";
    document.getElementById('slide_3').style.width = "6px";
    document.getElementById('slide_3').style.height = "6px";

    document.getElementById('slide_4').style.background = "url(images/normal.svg)";
    document.getElementById('slide_4').style.width = "6px";
    document.getElementById('slide_4').style.height = "6px";

    document.getElementById('mob_move1').classList.remove("unshow");
    document.getElementById('mob_move2').classList.add("unshow");
    document.getElementById('mob_move3').classList.add("unshow");
    document.getElementById('mob_move4').classList.add("unshow");
}

function change_slide_2() {
    document.getElementById('slide_2').style.background = "url(images/choosed.svg)";
    document.getElementById('slide_2').style.width = "10px";
    document.getElementById('slide_2').style.height = "10px";

    document.getElementById('slide_1').style.background = "url(images/normal.svg)";
    document.getElementById('slide_1').style.width = "6px";
    document.getElementById('slide_1').style.height = "6px";

    document.getElementById('slide_3').style.background = "url(images/normal.svg)";
    document.getElementById('slide_3').style.width = "6px";
    document.getElementById('slide_3').style.height = "6px";

    document.getElementById('slide_4').style.background = "url(images/normal.svg)";
    document.getElementById('slide_4').style.width = "6px";
    document.getElementById('slide_4').style.height = "6px";

    document.getElementById('mob_move2').classList.remove("unshow");
    document.getElementById('mob_move1').classList.add("unshow");
    document.getElementById('mob_move3').classList.add("unshow");
    document.getElementById('mob_move4').classList.add("unshow");
}

function change_slide_3() {
    document.getElementById('slide_3').style.background = "url(images/choosed.svg)";
    document.getElementById('slide_3').style.width = "10px";
    document.getElementById('slide_3').style.height = "10px";

    document.getElementById('slide_1').style.background = "url(images/normal.svg)";
    document.getElementById('slide_1').style.width = "6px";
    document.getElementById('slide_1').style.height = "6px";

    document.getElementById('slide_2').style.background = "url(images/normal.svg)";
    document.getElementById('slide_2').style.width = "6px";
    document.getElementById('slide_2').style.height = "6px";

    document.getElementById('slide_4').style.background = "url(images/normal.svg)";
    document.getElementById('slide_4').style.width = "6px";
    document.getElementById('slide_4').style.height = "6px";

    document.getElementById('mob_move3').classList.remove("unshow");
    document.getElementById('mob_move1').classList.add("unshow");
    document.getElementById('mob_move2').classList.add("unshow");
    document.getElementById('mob_move4').classList.add("unshow");
}

function change_slide_4() {
    document.getElementById('slide_4').style.background = "url(images/choosed.svg)";
    document.getElementById('slide_4').style.width = "10px";
    document.getElementById('slide_4').style.height = "10px";

    document.getElementById('slide_1').style.background = "url(images/normal.svg)";
    document.getElementById('slide_1').style.width = "6px";
    document.getElementById('slide_1').style.height = "6px";

    document.getElementById('slide_3').style.background = "url(images/normal.svg)";
    document.getElementById('slide_3').style.width = "6px";
    document.getElementById('slide_3').style.height = "6px";

    document.getElementById('slide_2').style.background = "url(images/normal.svg)";
    document.getElementById('slide_2').style.width = "6px";
    document.getElementById('slide_2').style.height = "6px";

    document.getElementById('mob_move4').classList.remove("unshow");
    document.getElementById('mob_move1').classList.add("unshow");
    document.getElementById('mob_move3').classList.add("unshow");
    document.getElementById('mob_move2').classList.add("unshow");
}

var x = 0;
function open_mob() {
    if (x == 0) {
        document.getElementById('br_change').style.background = "url(images/cross.svg) no-repeat 50% 50%";
        document.getElementById('open_under_mob').style.display = "block";
        x = 1;
    } else
        if (x == 1) {
            document.getElementById('br_change').style.background = "url(images/burger.svg) no-repeat 50% 50%";
            document.getElementById('br_change').style.width = "36px";
            document.getElementById('br_change').style.height = "36px";
            document.getElementById('open_under_mob').style.display = "none";
            x = 0;
        }

}

var y = 0;
function help_under_mob() {
    if (y == 0) {
        document.getElementById('open_under_help_mob').style.display = "block";
        document.getElementById('turn_arrow_mob').style.transform = "rotate(90deg)";
        y = 1;
    } else
        if (y == 1) {
            document.getElementById('open_under_help_mob').style.display = "none";
            document.getElementById('turn_arrow_mob').style.transform = "rotate(0deg)";
            y = 0;
        }

}