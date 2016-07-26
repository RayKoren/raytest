$("#name").on("keyup", function (event) {
    var value = $(this).val();
    $("#output").text(value);
});
