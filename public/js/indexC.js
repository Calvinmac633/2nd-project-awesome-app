// var winHeight = $(window).height();
// var height = (winHeight * 16.6666) / 100;
// var lineHeight = height + "px";

// $("button").css("line-height", lineHeight);
// $("button").css("height", height);

///right code for buttons

$(document).ready(function() {
  $(document).on("click", ".day", function(e) {
    e.preventDefault();
    console.log("Button clicked");
    var date = $(this).attr("id");

    window.location.href = "/task/" + date;
    // console.log(handleTaskEdit());
    var date = $(this).attr("id");
    console.log(date);
    // var getNotes = function() {
    //   return $.ajax({
    //     url: "/api/tasks/" + date,
    //     method: "GET"
    //   });
    // };
    // getNotes(date);
    handleTaskEdit();
  });
});
//first week of the month

//THIS IS PULLED FROM BLOGGERS ACTIVITY
function handleTaskEdit() {
  var currentTask = $(this)
    .parent()
    .parent()
    .data("post");
  window.location.href = "/task?post_id=" + currentTask.id;
}
