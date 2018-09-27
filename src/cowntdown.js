/***
 * Created by darkwolf_66
 ***/

/**
 * Main function creates the countdown
 * Parameter date needs to be new Date(content) valid like
 * new RegisterCowntDown("October 13, 2014 11:13:00")
 **/
var CowntDown = function(dateTarget) {
    var lefting = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    var dateTarget = moment(dateTarget);
    var now = moment();
    dateTarget = moment(dateTarget);

    lefting.years = dateTarget.diff(now, 'years');
    lefting.months = dateTarget.diff(now, 'months')-(lefting.years*12);
    lefting.days = dateTarget.subtract(dateTarget.diff(now, 'months'), 'months').diff(now, 'days');
    lefting.hours = dateTarget.subtract(dateTarget.diff(now, 'days'), 'days').diff(now, 'hours');
    lefting.minutes = dateTarget.subtract(dateTarget.diff(now, 'hours'), 'hours').diff(now, 'minutes');
    lefting.seconds = dateTarget.subtract(dateTarget.diff(now, 'minutes'), 'minutes').diff(now, 'seconds');
    if(lefting.years <= 0 && lefting.months <= 0 && lefting.days <= 0 && lefting.hours <= 0 && lefting.minutes <= 0 && lefting.seconds){
        return false;
    }
    var year = document.getElementsByClassName("js-cowntdown-year");
    if(year.length > 0 && year[0].innerHTML != lefting.years){
        if(lefting.years < 10){
            lefting.years = "0"+lefting.years;
        }
        year[0].innerHTML = lefting.years;
    }
    var months = document.getElementsByClassName("js-cowntdown-months");
    if(months.length > 0 && months[0].innerHTML != lefting.months){
        if(lefting.months < 10){
            lefting.months = "0"+lefting.months;
        }
        months[0].innerHTML = lefting.months;
    }
    var days = document.getElementsByClassName("js-cowntdown-days");
    if(days.length > 0 && days[0].innerHTML != lefting.days){
        if(lefting.days < 10){
            lefting.days = "0"+lefting.days;
        }
        days[0].innerHTML = lefting.days;
    }
    var hours = document.getElementsByClassName("js-cowntdown-hours");
    if(hours.length > 0 && hours[0].innerHTML != lefting.hours){
        if(lefting.hours < 10){
            lefting.hours = "0"+lefting.hours;
        }
        hours[0].innerHTML = lefting.hours;
    }
    var minutes = document.getElementsByClassName("js-cowntdown-minutes");
    if(minutes.length > 0 && minutes[0].innerHTML != lefting.minutes){
        if(lefting.minutes < 10){
            lefting.minutes = "0"+lefting.minutes;
        }
        minutes[0].innerHTML = lefting.minutes;
    }
    var seconds = document.getElementsByClassName("js-cowntdown-seconds");
    if(seconds.length > 0 && seconds[0].innerHTML != lefting.seconds){
        if(lefting.seconds < 10){
            lefting.seconds = "0"+lefting.seconds;
        }
        seconds[0].innerHTML = lefting.seconds;
    }
}

$(document).ready(function () {
    $.getScript( "https://momentjs.com/downloads/moment.min.js", function( data, textStatus, jqxhr ) {
        $('.menu > li.item.raiz.ultimo.item0.menu-imagem').html('<div style="\n' +
            '    background-image:  url(\'https://recursos.orthomundishop.com.br/i/Timer.png\');\n' +
            '    height:  87px;\n' +
            '    width: 400px;\n' +
            '    background-color: white;\n' +
            '">\n' +
            '    <style>\n' +
            '        @font-face {\n' +
            '            font-family: \'openlcd\';\n' +
            '            src: url(\'https://recursos.orthomundishop.com.br//f/open24lcd.ttf\');\n' +
            '        }\n' +
            '    </style>\n' +
            '    <div style="\n' +
            '    position: absolute;'+
            '    left: 148px;\n' +
            '    top: 23px;\n' +
            '    color: white;\n' +
            '    font-size: 10px;\n' +
            '    font-family: Arial;\n' +
            '">Dias</div>' +
            '    <div style="\n' +
            '    position: absolute;'+
            '    left: 198px;\n' +
            '    top: 23px;\n' +
            '    color: white;\n' +
            '    font-size: 10px;\n' +
            '    font-family: Arial;\n' +
            '">Horas</div>' +
            '    <div style="\n' +
            '    position: absolute;'+
            '    left: 260px;\n' +
            '    top: 23px;\n' +
            '    color: white;\n' +
            '    font-size: 10px;\n' +
            '    font-family: Arial;\n' +
            '">Seg.</div>' +
            '    <div style="\n' +
            '    position: absolute;'+
            '    left: 316px;\n' +
            '    top: 23px;\n' +
            '    color: white;\n' +
            '    font-size: 10px;\n' +
            '    font-family: Arial;\n' +
            '">Min.</div>' +
            '    <div style="\n' +
            '    position:  absolute;\n' +
            '    left: 145px;\n' +
            '    top: 40px;\n' +
            '    color: white;\n' +
            '    font-size: 38px;\n' +
            '    font-family: \'openlcd\';\n' +
            '"><span class="js-cowntdown-days">00</span></div>\n' +
            '    <div style="\n' +
            '    position:  absolute;\n' +
            '    left: 200px;\n' +
            '    top: 40px;\n' +
            '    color: white;\n' +
            '    font-size: 38px;\n' +
            '    font-family: \'openlcd\';\n' +
            '"><span class="js-cowntdown-hours">00</span></div>\n' +
            '    <div style="\n' +
            '    position:  absolute;\n' +
            '    left: 255px;\n' +
            '    top: 40px;\n' +
            '    color: white;\n' +
            '    font-size: 38px;\n' +
            '    font-family: \'openlcd\';\n' +
            '"><span class="js-cowntdown-minutes">00</span></div>\n' +
            '    <div style="\n' +
            '    position:  absolute;\n' +
            '    left: 311px;\n' +
            '    top: 40px;\n' +
            '    color: white;\n' +
            '    font-size: 38px;\n' +
            '    font-family: \'openlcd\';\n' +
            '"><span class="js-cowntdown-seconds">00</span></div>\n' +
            '</div>\n')
    });
    var endingDate = "2018-09-18 23:59:00";
    setInterval(function () {
        new CowntDown(endingDate);
    }, 1000);
})
