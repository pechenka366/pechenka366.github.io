$("#input-phone").mask("+9(999) 999 99 99");

$('form').submit(function(){
    if($('#input-phone').val() == "" || $('#input-name').val() == "" || $('#phone_1').val() == ""){
    alert("Заполните все поля"); 
    };
}); 
