$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/api/",
        dataType: "text",
        success: function (data) {
            $("#backend").text(data);
        }
    });
 });
