function sendMessage() {
  var messageInput = document.getElementById("messageInput");
  var messagesContainer = document.getElementById("messages");

  var messageText = messageInput.value.trim();

  if (messageText !== "") {
    // Create a new message element
    var messageElement = document.createElement("div");
    messageElement.className = "message";

    // Create a circular profile picture
    var profilePicture = document.createElement("img");
    profilePicture.src =
      "https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?s=612x612&w=0&k=20&c=GVYAgYvyLb082gop8rg0XC_wNsu0qupfSLtO7q9wu38="; // You can replace this with the URL of your profile pictures
    messageElement.appendChild(profilePicture);

    // Create a message content element
    var messageContent = document.createElement("div");
    messageContent.className = "message-content";
    messageContent.textContent = messageText;
    messageElement.appendChild(messageContent);

    // Append the message element to the messages container
    messagesContainer.appendChild(messageElement);

    // Clear the input field
    messageInput.value = "";
  }
}
