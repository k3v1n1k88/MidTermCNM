$('#btnSearch').click(function () {
    $.ajax({
        url: 'http://localhost:27017/requests?Name=' + $('#name').val()
            + '&Phone=' + $('#phone').val() + '&Address=' + $('#address').val() + '&Note=' + $('#note').val(),
        type: 'POST',
        dataType: 'json',
        timeout: 10000
    })
    .done(function() {
    });
});