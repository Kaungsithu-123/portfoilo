function changeMood(){
    document.body.classList.toggle("night-mode");
    document.getElementById("mode-icon").classList.toggle("fa-sun");
    document.getElementById("btn-adjust").classList.toggle("btn-primary");

}
$(document).ready(function(){

    let screenHeight=$(window).height();

    $(window).scroll(function () {
        let currentPosition= $(this).scrollTop();

        if (currentPosition >= screenHeight){
            $(".site-nav").addClass("site-nav-scroll");
        }
        else{
            $(".site-nav").removeClass("site-nav-scroll");
            setActive("home");
        }
    })





    $(".menu-icon").click(function () {
        if ($(".navbar-collapse").hasClass("show")){
            $(".menu-icon").removeClass("fa-times");
            $(".menu-icon").addClass("fa-bars");
        }
        else{
            $(".menu-icon").removeClass("fa-bars");
            $(".menu-icon").addClass("fa-times");
        }
        if($(".navbar-toggler").hasClass("collapsed")){
            $(".menu-icon").removeClass("fa-times");
            $(".menu-icon").addClass("fa-bars");
        }
        else{
            $(".menu-icon").removeClass("fa-bars");
            $(".menu-icon").addClass("fa-times");
        }

    })
});
$(window).on("load",function () {
    $(".loader-container").fadeOut(500,function () {
        $(this).remove();
    });
});


   