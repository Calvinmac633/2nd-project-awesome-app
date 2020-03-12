$(document).ready(function() {
  var ViewNotes = $(".days");
  $.get("/api/calendar", function(data) {
    for (var i = 1; i <= data.days.length; i++) {
      ViewNotes.append(`<button id = "${i}">${i}</button>`);
    }
  });
});
