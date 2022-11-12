$(document).ready(function(){
    
    function calculate(){
        let money = parseInt($(".Myselect1 option:selected").attr("prise")) + parseInt($(".Myselect2 option:selected").attr("prise")) +
              parseInt($(".Myselect3 option:selected").attr("prise")); 
        
        let days = parseInt($(".Myselect1 option:selected").attr("days")) + parseInt($(".Myselect2 option:selected").attr("days")) +
              parseInt($(".Myselect3 option:selected").attr("days"));
        
        $(".number .resOnne").text(money);
        $(".number .resTwwo").text(days);
    }
    $("select").on("change", function(){
        calculate();
    });
    calculate();
});
