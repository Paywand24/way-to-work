$(document).ready(function () {
  // Store the original content when the page loads
  var originalContent = {};

  $("#editButton").on("click", function () {
    // Store the original content before editing
    storeOriginalContent();

    // Toggle for elements
    $(
      "#name, #title, #phone, #email, #website, #linkedin, #address, #edu1, #edu1Title, #edu1School, #edu2, #edu2Title, #edu2College, #edu3, #edu3Title, #edu3University, #lang1, #lang2, #profile, #exp1Date, #exp1Company, #exp1Title, #exp1Desc, #exp2Date, #exp2Company, #exp2Title, #exp2Desc, #skill1, #skill2, #skill3, #skill4, #interest1, #interest2, #interest3, #interest4"
    ).attr("contenteditable", function (i, attr) {
      return attr === "true" ? "false" : "true";
    });

    // Toggle for the image
    $("#profileImage").attr("contenteditable", function (i, attr) {
      return attr === "true" ? "false" : "true";
    });

    // Toggle display of buttons
    $("#editButton").hide();
    $("#saveButton, #cancelButton, #changeImage").show();
  });

  $("#saveButton").on("click", function () {
    // Save functionality goes here

    // Toggle for elements
    $(
      "#name, #title, #phone, #email, #website, #linkedin, #address, #edu1, #edu1Title, #edu1School, #edu2, #edu2Title, #edu2College, #edu3, #edu3Title, #edu3University, #lang1, #lang2, #profile, #exp1Date, #exp1Company, #exp1Title, #exp1Desc, #exp2Date, #exp2Company, #exp2Title, #exp2Desc, #skill1, #skill2, #skill3, #skill4, #interest1, #interest2, #interest3, #interest4"
    ).attr("contenteditable", "false");

    // Toggle for the image
    $("#profileImage").attr("contenteditable", "false");

    // Toggle display of buttons
    $("#editButton").show();
    $("#saveButton, #cancelButton, #changeImage").hide();
  });

  $("#cancelButton").on("click", function () {
    // Reset functionality goes here
    resetToOriginalContent();

    // Toggle for elements
    $(
      "#name, #title, #phone, #email, #website, #linkedin, #address, #edu1, #edu1Title, #edu1School, #edu2, #edu2Title, #edu2College, #edu3, #edu3Title, #edu3University, #lang1, #lang2, #profile, #exp1Date, #exp1Company, #exp1Title, #exp1Desc, #exp2Date, #exp2Company, #exp2Title, #exp2Desc, #skill1, #skill2, #skill3, #skill4, #interest1, #interest2, #interest3, #interest4"
    ).attr("contenteditable", "false");

    // Toggle for the image
    $("#profileImage").attr("contenteditable", "false");

    // Toggle display of buttons
    $("#editButton").show();
    $("#saveButton, #cancelButton, #changeImage").hide();
  });

  // Add the click event for the changeImage button
  $("#changeImage").on("click", function () {
    // Trigger the hidden file input
    $("#imageInput").click();
  });

  // Add change event for the hidden file input
  $("#imageInput").on("change", function (e) {
    // Handle the selected image file
    var file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function (readerEvent) {
        // Update the profileImage source with the new image data
        $("#profileImage").attr("src", readerEvent.target.result);
      };
      // Read the image file as a data URL
      reader.readAsDataURL(file);
    }
  });

  // Function to store the original content before editing
  function storeOriginalContent() {
    $(
      "#name, #title, #phone, #email, #website, #linkedin, #address, #edu1, #edu1Title, #edu1School, #edu2, #edu2Title, #edu2College, #edu3, #edu3Title, #edu3University, #lang1, #lang2, #profile, #exp1Date, #exp1Company, #exp1Title, #exp1Desc, #exp2Date, #exp2Company, #exp2Title, #exp2Desc, #skill1, #skill2, #skill3, #skill4, #interest1, #interest2, #interest3, #interest4"
    ).each(function () {
      originalContent[this.id] = $(this).html();
    });
  }

  // Function to reset the content to its original state
  function resetToOriginalContent() {
    $(
      "#name, #title, #phone, #email, #website, #linkedin, #address, #edu1, #edu1Title, #edu1School, #edu2, #edu2Title, #edu2College, #edu3, #edu3Title, #edu3University, #lang1, #lang2, #profile, #exp1Date, #exp1Company, #exp1Title, #exp1Desc, #exp2Date, #exp2Company, #exp2Title, #exp2Desc, #skill1, #skill2, #skill3, #skill4, #interest1, #interest2, #interest3, #interest4"
    ).each(function () {
      $(this).html(originalContent[this.id]);
    });

    // Reset the profileImage to its original source
    $("#profileImage").attr("src", "../src/images/bg-login.jpg");
  }
});
