$(".add-btn").click(function () {
  $(".container div").addClass("active");
});
$(".remove-btn").click(function () {
  $(".container div").removeClass("active");
});

$(".toggle-btn").click(function () {
  $(".container div").toggleClass("active");
});
/**toggle은 두가지 기능을 가지고 있음 show/hide 둘다 */
