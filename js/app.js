//var salaryInput = $('input[id="city-type"]').numeric({ negative: false });
/*
salaryInput.keyup(function () {
    var yearsalary = $(this).val();
    // calculate salaries and limit to 2 decimal places
    var hoursalary = (yearsalary * 12 *52 / 1100).toFixed(0);
    var monthsalary = (yearsalary * 12 *52).toFixed(2);

    $("#hour").html("" + hoursalary);
    $("#month").html("$" + monthsalary);
});
*/

$('document').ready(function(){
    var $displayingElement = $('#eat-out-slide');
    $('#eat-out').keyup(function(e){
        if (e.which == 13) {
            updateResult();
            show($('#go-to-bars-slide'));
        }
        //if (allFilled)  $('#results').fadeIn(1000);
    });

    $('#go-to-bars').keyup(function(e){
        if (e.which == 13) {
            updateResult();
            show($('#results'));
        }
        //if (allFilled)  $('#results').fadeIn(1000);
    });

    var updateResult = function() {
        var eat = $('#eat-out').val(),
            bar = $('#go-to-bars').val(),
            allFilled = (eat !== '' && bar !== ''),
            yearlyMoney, tripsToParis;

        eat = !(eat) ? 0 : parseFloat(eat);
        bar = !(bar) ? 0 : parseFloat(bar);

        yearlyMoney = (eat + bar) * 10 * 52;
        tripsToParis = Math.floor(yearlyMoney / 1100);

        $('#money-result').text('$' + yearlyMoney);
        $('#trips-result').text(tripsToParis);
    }

    var show = function($element) {
        if ($displayingElement) $displayingElement.hide();
        $element.fadeIn(1000);
        $displayingElement = $element;
    }

    show($displayingElement);
});
