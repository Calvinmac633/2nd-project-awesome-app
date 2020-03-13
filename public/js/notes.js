$(document).ready(function() {
  //var for what day the user picks
  $.get("/api/tasks/", function(data) {
    $(".navbar-brand").append(data[11].date);
    console.log(data[11].date);
  });
});
