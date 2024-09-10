$(".add-btn").click(function () {
  $(".container div").fadeIn(2000);
});
$(".remove-btn").click(function () {
  $(".container div").fadeOut(2000);
});

$(".toggle-btn").click(function () {
  $(".container div").fadeToggle(2500);
});
/**toggle은 두가지 기능을 가지고 있음 show/hide 둘다 */
