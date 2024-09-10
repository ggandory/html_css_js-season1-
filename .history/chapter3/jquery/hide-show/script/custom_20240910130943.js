$(".show-btn").click(function () {
  $(".container div").fadeIn();
});
$(".hide-btn").click(function () {
  $(".container div").fadeOut();
});

$(".toggle-btn").click(function () {
  $(".container div").fadeToggle();
});
/**toggle은 두가지 기능을 가지고 있음 show/hide 둘다 */
