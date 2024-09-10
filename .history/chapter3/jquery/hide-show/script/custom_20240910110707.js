$("p").css({ display: "none" });

$(".show-btn").click(function () {
  $("p").css({ display: "block" });
});
$(".hide-btn").click(function () {
  $("p").css({ display: "none" });
});

$(".box").css({ display: "none" });

$(".show").click(function () {
  $(".box").css({ display: "block" });
});
$(".hide").click(function () {
  $(".box").css({ display: "none" });
});

/**
제이쿼리 기본 문구

$('선택자').함수(function(){
  $('선택자').메서드();
});
 */
