$(".show-btn").click(function () {
  $(".container div").slideDown();
});
$(".hide-btn").click(function () {
  $(".container div").slideUp();
});

$(".toggle-btn").click(function () {
  $(".container div").slideToggle();
});
/**toggle은 두가지 기능을 가지고 있음 show/hide 둘다 */
