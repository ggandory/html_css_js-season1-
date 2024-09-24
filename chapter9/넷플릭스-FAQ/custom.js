$(function () {
  // $('.accordion .content').eq(0).show()
  //위에꺼는 그냥 첫번째 컨텐츠 미리 열어놓고싶으면 활성화하면됨
  $(".accordion .title").click(function () {
    $(this).siblings(".accordion .content").slideUp();
    $(this).next().stop().slideToggle(500);
    $(this).toggleClass("active");
    $(this).siblings(".accordion .title").removeClass("active");
  });
});
