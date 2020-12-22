function changeCard() {
    if ($('#check').prop('checked')) {
        $('.card').addClass('light-card');
    } else {
        $('.card').removeClass('light-card');

    }
}

function changeBackground() {
    if ($('#check').prop('checked')) {
        $('#body').addClass('light-theme');
    } else {
        $('#body').removeClass('light-theme');
    }
}

function cardHover() {
    if ($('#check').prop('checked')) {
        $('.card:hover').addClass('light-card:hover');
    } else {
        $('.card:hover').removeClass('light-card:hover');
    }
}

function changeText() {
    if ($('#check').prop('checked')) {
        $('.darkMode').addClass('light-darkMode');
    } else {
        $('.darkMode').removeClass('light-darkMode');
    }
}

function changeBall() {
    if ($('#check').prop('checked')) {
        $('.ball').addClass('light-ball');
    } else {
        $('.ball').removeClass('light-ball');
    }
}

function changeTheme() {
    changeBall();
    changeText();
    changeBackground();
    cardHover();
    changeCard();
}



$('#check').on('click', changeTheme);