// var winHeight = $(window).height();
// var height = (winHeight * 16.6666) / 100;
// var lineHeight = height + "px";

// $("button").css("line-height", lineHeight);
// $("button").css("height", height);

///right code for buttons

$(document).ready(function() {
  $(document).on("click", ".day", function(e) {
    e.preventDefault();
    console.log($(this).attr("id"));
  });
});
//first week of the month
