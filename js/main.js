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
    //scroll suave
    $("a").on("click",function(){
        if (this.hash !== "") {
            var hash = this.hash;
            $("html, body").animate({
                //objeto con una propiedad y valor
                scrollTop: $(hash).offset().top
            }, 800);
            //sintaxis de animate
            // animate ({objeto}, duración);
        }
    });
    //pestañas
    $(".tabs li").click(function(){
        //recoger en tabId el valor del atriburo tab
        var tabId = $(this).attr("tab");
        //elimina la clase current a pestañas y contenido
        $(".tabs li").removeClass("current");
        $(".tab-content").removeClass("current");
        //añade la clase current a la penstaña pulsada
        $(this).addClass("current");
        //añade la clase current al contenido con el mismo ID el valor de la variable tabId
        $("#"+ tabId).addClass("current");
    });
    $(".btn-side").click(function(){
        $(".menu3").animate({width:"toggle"},1500);
        $(".fa-arrow-circle-right").toggle();
        $(".fa-arrow-circle-left").toggle();
    });
    //ventana modal
    $("#open").click(function(){
        $(".modal,.overlay").addClass("visible");
    });
    $("#close, .overlay").click(function(){
        $(".modal,.overlay").removeClass("visible");
    });

});