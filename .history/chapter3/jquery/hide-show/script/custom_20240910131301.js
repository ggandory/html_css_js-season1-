$(".show-btn").click(function () {
  $(".container div").fadeIn(2000);
});
$(".hide-btn").click(function () {
  $(".container div").fadeOut(2000);
});

$(".toggle-btn").click(function () {
  $(".container div").fadeToggle();
});
/**toggle은 두가지 기능을 가지고 있음 show/hide 둘다 */
