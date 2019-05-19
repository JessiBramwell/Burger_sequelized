$(function () {

  // UPDATE EATEN STATUS ON CLICK
  $(".update-eaten").on("click", function (e) {
    let id = $(this).data("id");
 

    let update = {
      eaten: true
    };

    console.log(update);


    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: update
    }).then(
      function () {
        console.log("updated eaten status to " + update);
        location.reload();
      }
    );
  });

  // ADD RESTAURANT ON FORM SUBMIT
  $(".add-form_restaurant").on("submit", function (e) {
    e.preventDefault();

    let newRest = {
      restaurant_name: $("#rest_name").val().trim()
    };

    $.ajax("/api/restaurant", {
      type: "POST",
      data: newRest
    }).then(
      function () {
        console.log("added " + newRest);
        location.reload()
      }
    );
  });

  // ADD BURGER ON FORM SUBMIT
  $(".add-form_burger").on("submit", function (e) {
    e.preventDefault();

    let newBurger = {
      burger_name: $("#burger_name").val().trim(),
      RestaurantId: $("#restaurant_id").val()
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("added " + newBurger);
        location.reload();
      }
    );
  });

  // DELETE ITEM ON CLICK
  $(".delete-item").on("click", function (e) {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted " + id);
        location.reload();
      }
    );
  });
});