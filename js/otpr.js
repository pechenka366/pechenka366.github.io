$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done.(function () {
            $(this).find("input").val("");
            alert("Запрос отправлен");
            $("form").trigger("reset");
        });
        return false;
    })
})
