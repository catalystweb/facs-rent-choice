//developed by Daniel Kandilas//

$(document).ready(function() {
  $("[id^=step]").css("display", "none");
  $("body").tooltip({
    selector: '[rel="tooltip"]'
  });

  $(".yes-step").click(function() {
    var this_ = $(this);
    var parentID = this_
      .closest("div")
      .parent()
      .attr("id");

    $("div").each(function() {
      if (parentID == "start") {
        $("#" + parentID).css("display", "none");
        $("#step1,#step1-q").fadeIn("fast");
      }
    });
  });

  $(".next-step").click(function() {
    var this_ = $(this);
    var parentID = this_
      .closest("div")
      .parent()
      .attr("id");
    var nextParent = this_
      .closest("div")
      .parent()
      .next("div")
      .attr("id");
    var previousParent = this_
      .closest("div")
      .parent()
      .prev("div")
      .attr("id");

    $("div").each(function() {
      /* step 1 progression */
      if ($("#step1-rad-y").is(":checked")) {
        $("#" + parentID + "-q").fadeOut("slow");
        if ($("#" + parentID + "-yes").length > 0) {
          $("[id^=" + parentID + "],[id^=" + previousParent + "]").css(
            "display",
            "none"
          );
          $("#" + parentID + "-rad-y").prop("checked", false);
          $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
          $(".back-to-last").css("display", "inline-block");
        }
      }
      if ($("#step1-rad-n").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-no").length > 0) {
          $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }

      /* step 2 progresion */
      if ($("#step2-rad-y").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-yes").length > 0) {
          $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-y").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }
      if ($("#step2-rad-n").is(":checked")) {
        $("#" + parentID + "-q").fadeOut("slow");
        if ($("#" + parentID + "-no").length > 0) {
          $("[id^=" + parentID + "]").css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
        }
      }

      /* step 3 progrssion */
      if ($("#step3-rad-y").is(":checked")) {
        $("#" + parentID + "-q").fadeOut("slow");
        if ($("#" + parentID + "-yes").length > 0) {
          $("[id^=" + parentID + "]").css("display", "none");
          $("#" + parentID + "-rad-y").prop("checked", false);
          $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
          $(".back-to-last").css("display", "inline-block");
        }
      }
      if ($("#step3-rad-n").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-no").length > 0) {
          $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }

      /* step 4 progression */
      if ($("#step4-rad-y").is(":checked")) {
        $("#" + parentID + "-q").fadeOut("slow");
        if ($("#" + parentID + "-yes").length > 0) {
          $("[id^=" + parentID + "]").css("display", "none");
          $("#" + parentID + "-rad-y").prop("checked", false);
          $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
        }
      }
      if ($("#step4-rad-n").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        $("#" + parentID + "-q").fadeOut("slow");
        if ($("#" + parentID + "-no").length > 0) {
          $("[id^=" + parentID + "]").css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $("#step5, #step5-q").fadeIn("fast");
        }
      }

      /* step4 age progression */
      if ($("#step4age-rad-y").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-yes").length > 0) {
          $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-y").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }
      if ($("#step4age-rad-n").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-no").length > 0) {
          $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }

      /* step 5 progression */
      if ($("#step5-rad-y").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-yes").length > 0) {
          $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-y").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }
      if ($("#step5-rad-n").is(":checked")) {
        $("#" + parentID + "-q").fadeOut("slow");
        if ($("#" + parentID + "-no").length > 0) {
          $("[id^=" + parentID + "]").css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
        }
      }

      /* step 6 progression */
      if ($("#step6-rad-y").is(":checked")) {
        $("#" + parentID + "-q").fadeOut("slow");
        if ($("#" + parentID + "-yes").length > 0) {
          $("[id^=" + parentID + "]").css("display", "none");
          $("#" + parentID + "-rad-y").prop("checked", false);
          $("#step7, #step7-q").fadeIn("fast");
        }
      }
      if ($("#step6-rad-n").is(":checked")) {
        $("#" + parentID + "-q").fadeOut("slow");
        if ($("#" + parentID + "-no").length > 0) {
          $("[id^=" + parentID + "]").css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $("#step8 , #step8-q").fadeIn("fast");
        }
      }

      /* step 7 progression */
      if ($("#step7-rad-y").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-yes").length > 0) {
          $("#" + parentID + "-no").css("display", "none");
          $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-y").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }
      if ($("#step7-rad-n").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-no").length > 0) {
          $("#" + parentID + "-yes").css("display", "none");
          $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }

      /* step 8 progression */
      if ($("#step8-rad-y").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-yes").length > 0) {
          $("[id^=" + parentID + "]").css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
        }
      }
      if ($("#step8-rad-n").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-no").length > 0) {
          $("#" + parentID + "-yes").css("display", "none");
          $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }
      /* step 9 progression */
      if ($("#step9-rad-y").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-yes").length > 0) {
          $("#" + parentID + "-no").css("display", "none");
          $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-y").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }
      if ($("#step9-rad-n").is(":checked")) {
        $("#" + parentID + "-q").css("display", "none");
        if ($("#" + parentID + "-no").length > 0) {
          $("#" + parentID + "-yes").css("display", "none");
          $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
          $("#" + parentID + "-a")
            .find("ul")
            .css("display", "none");
          $("#" + parentID + "-rad-n").prop("checked", false);
          $(".back-to-last").css("display", "none");
          $(".next-step").css("display", "none");
          $(".back-to-last-end").css("display", "inline-block");
          $(".finish").css("display", "inline-block");
        }
      }
    });
  });

  $(".back-to-last-end").click(function() {
    var this_ = $(this);
    var parentID = this_
      .closest("div")
      .parent()
      .attr("id");

    $("div").each(function() {
      switch (parentID) {
        case "step1":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step2":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step3":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step4":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step4age":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
            document.getElementById(parentID + "-yes").style.display = "none";
            document.getElementById(parentID + "-no").style.display = "none";
          }
          break;
        case "step5":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step6":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step7":
          $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
          $(".back-to-last-end").css("display", "none");
          $(".finish").css("display", "none");
          $(".back-to-last").css("display", "inline-block");
          $(".next-step").css("display", "inline-block");
          document.getElementById(parentID + "-a").style.display = "none";
          break;
        case "step8":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
        case "step9":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-end").css("display", "none");
            $(".finish").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            $(".next-step").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
      }
    });
  });

  $(".back-to-last").click(function() {
    var this_ = $(this);
    var parentID = this_
      .closest("div")
      .parent()
      .attr("id");
    var previousParent = this_
      .closest("div")
      .parent()
      .prev("div")
      .attr("id");

    $("div").each(function() {
      switch (parentID) {
        case "step1":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
        case "step2":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
          break;
        case "step3":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
          break;
        case "step4":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
          break;
        case "step4age":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
          break;
        case "step5":
          $("#" + parentID).css("display", "none");
          $("#step4, #step4-q").fadeIn("fast");
          break;
        case "step6":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
          break;
        case "step7":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
          break;
        case "step8":
          $("#" + parentID).css("display", "none");
          $("#step6, #step6-q").fadeIn("fast");
          break;
        case "step9":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
          break;
      }
    });
  });

  $(".finish").click(function() {
    window.parent.location.href = "https://www.facs.nsw.gov.au/";
  });
});
