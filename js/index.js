var salaryInput = $('input[id="city-type"]').numeric({ negative: false });

salaryInput.keyup(function () {
    var yearsalary = $(this).val();
    // calculate salaries and limit to 2 decimal places
    var hoursalary = (yearsalary * 12 *52 / 1100).toFixed(0);
    var monthsalary = (yearsalary * 12 *52).toFixed(2);

    $("#hour").html("" + hoursalary);
    $("#month").html("$" + monthsalary);
});
