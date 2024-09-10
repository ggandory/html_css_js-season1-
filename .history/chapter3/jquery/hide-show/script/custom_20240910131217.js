$(".show-btn").click(function () {
  $(".container div").fadeIn(300);
});
$(".hide-btn").click(function () {
  $(".container div").fadeOut(500);
});

$(".toggle-btn").click(function () {
  $(".container div").fadeToggle();
});
/**toggle은 두가지 기능을 가지고 있음 show/hide 둘다 */
