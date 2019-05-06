"use strict";

var results = [74989, 74990, 84990, 62000, 58480, 61800];

$(function(){
    getBestResult();
    getAvgTop3();
});

function getBestResult() {
    var val = Math.max.apply(null, results);
    $('#bestResult').html('Лучший результат: ' + val);
}

function getAvgTop3() {
    var top3 = results.sort(function(a, b) {return b - a}).slice(0, 3);
    var top3avg = getAvgVal();
    $('#top3avg').append('Средний результат в топ-3: ' + top3avg);  

    function getAvgVal(){
        var sum = 0;
        for (var i = 0; i < top3.length; i++){
            sum += top3[i];
        }
        return sum / top3.length;
    }
}

