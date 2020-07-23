let index = 0;

$(".btn").click(function () {
  let $input = $("input").val();
  $(".input").before(
    '<div class="skill"><span class="x">X</span>&nbsp ' + $input + "</div>"
  );
  $(".x").click(function (evt) {
    evt.target.parentNode.remove();
  });
});

$(".btn1").click(function () {
  let lists = allStorage();

  if (Object.keys(localStorage).length) {
    lists.forEach((item) =>
      $(".input").before('<div class="skill">' + item + "</div>")
    );
    $(".x").click(function (evt) {
      evt.target.parentNode.remove();
    });
  } else {
    alert("No previous list.");
  }
});

$(".btn2").click(function () {
  localStorage.clear();
  index = 0;
});

$(".btn3").click(function () {
  let arr = document.querySelectorAll(".skill");

  arr.forEach((item) => {
    localStorage.setItem(index, item.innerHTML);
    index++;
  });
});

function allStorage() {
  let values = [];
  console.log(index);

  for (let x = 0; x < index; x++) {
    values.push(localStorage.getItem(x));
  }
  return values;
}
