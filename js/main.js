$(document).ready(function(){
    // menu hamburguesa
    $(".burger").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({width:"toggle"},500);
    });
    // menu haburguesa pagina normales
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto");
        $(".menu2").animate({width:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");
    });
    //cambio estilo segun scroll
    $(window).on("scroll",function(){
        var posicion = $("#primera").offset();

        if ($(window).scrollTop() > posicion.top -50 ) {
            $("header").removeClass("blanco");
        } else {
            $("header").addClass("blanco");
        }
    });
});