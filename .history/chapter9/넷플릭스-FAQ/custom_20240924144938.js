$(function () {
  $(".accordion .title").click(function () {
    $(this).siblings(".accordion .content").slideUp();
    $(this).next().stop().slideToggle(300);
    $(this).toggleClass("active");
    $(this).siblings(".accordion .title").removeClass("active");
  });
});
