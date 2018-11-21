$('#btnSearch').click(function () {
    $.ajax({
        url: 'http://localhost:3001/request?name=' + $('#name').val()
            + '&phone=' + $('#phone').val() + '&address=' + $('#address').val() + '&note=' + $('#note').val(),
        type: 'POST',
        dataType: 'json',
        timeout: 10000
    })
    .done(function() {
    });
});