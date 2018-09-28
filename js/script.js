$("body").hide();
$("body").fadeIn(500);

// humberger menu
$("#btn-trigger").on("click",function(){
    $("#nav_resp").fadeToggle(500);
    $("#btn-trigger").toggleClass("active");
});

$(".mask").hover(function(){
    $(this).css("opacity","1");
},function(){
    $(this).css("opacity","0");
});

var arrow_footer   = document.getElementById('arrow_footer');
arrow_footer.onclick = function () {  
    window.scroll({
        top:0,
        behavior:'smooth'
    });
};