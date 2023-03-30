$(document).ready(function() {
    $("#send-button").click(function() {
      var message = $("#message-input").val();
      if (message != "") {
        $(".chat-content").append("<div class='chat-message'>" + message + "</div>");
        $("#message-input").val("");
      }
    });
  
    $("#message-input").keypress(function(event) {
      if (event.keyCode === 13) {
        $("#send-button").click();
      }
    });
  });
  