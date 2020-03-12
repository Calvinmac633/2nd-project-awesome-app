$(document).ready(function() {
  var ViewNotes = $(".days");
  $.get("/api/calendar", function(data) {
    for (var i = 1; i <= data.days.length; i++) {
      const iso = data.days[i - 1];
      ViewNotes.append(`<button class="day" id = "${iso}">${i}</button>`);
    }
  });
});
