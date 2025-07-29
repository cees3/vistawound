$(document).ready(function () {
  if (window.location.hash) {
    const hash = window.location.hash;

    setTimeout(function () {
      const target = $(hash);
      if (target.length) {
        const offset = target.offset().top - 120; // Adjust this value as needed (e.g., 100–150)

        $("html, body").animate(
          {
            scrollTop: offset,
          },
          800
        );
      }
    }, 300);
  }

  $("#contact-form").submit(function (e) {
    e.preventDefault();

    const form = this;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = {
      Field1: $("#Field1").val().trim(),
      Field2: $("#Field2").val().trim(),
      Field3: $("#Field3").val().trim(),
      Field4: $("#Field4").val().trim(),
      Field5: $("#Field5").val().trim(),
      Field7: $("#Field7").val(),
      Field8: $("#Field8").val(),
      Field9: $("#Field9").val().trim(),
    };

    const $submitBtn = $(form).find("button[type=submit]");
    const $messageBox = $(".form-messege");

    $submitBtn.prop("disabled", true).text("Submitting...");

    var settings = {
      url: "https://swapnildev.wufoo.com/api/v3/forms/zshi516117nclw/entries.json",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic Nkc1Sy02MDdGLVExRUotQ0laQzp6c2hpNTE2MTE3bmNsdw==",
      },
      data: formData,
    };

    // Make the API call
    $.ajax(settings)
      .done(function (response) {
        if (response.Success === 1) {
          $messageBox
            .removeClass("text-danger")
            .addClass("text-success")
            .text("Form submitted successfully! ✅");
          form.reset();
        } else {
          // Show error message
          let errorText = response.ErrorText || "There was an error.";
          if (response.FieldErrors && response.FieldErrors.length > 0) {
            // Just show the first error
            const fieldError = response.FieldErrors[0];
            errorText = `${fieldError.ErrorText}`;
          }

          $messageBox
            .removeClass("text-success")
            .addClass("text-danger")
            .html("❌ " + errorText);
        }

        // Clear message after 10 seconds
        setTimeout(() => {
          $messageBox.fadeOut("slow", () => {
            $messageBox.text("").show(); // Clear and prepare for future
          });
        }, 3000);
      })
      .fail(function (xhr, status, error) {
        console.error("Error:", error);
        $messageBox
          .removeClass("text-success")
          .addClass("text-danger")
          .text("❌ Network or server error. Please try again.");
      })
      .always(function () {
        $submitBtn.prop("disabled", false).text("Send Your Message");
      });
  });
});
