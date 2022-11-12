$(window).scroll(() => {
   let scrollDistance = $ (window).scrollTop() + 500;
    $(".section").each((i, el) => {
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $('nav li:eq(' + i +')').find('a').addClass('active');
        }
    })
});