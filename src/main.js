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

  $(".yes-step").change(function() {
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
      if ($("#step1-rad-y").is(":checked")) {
        setTimeout(function() {
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
        }, 300);
      }
      if ($("#step2-rad-y").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-yes").length > 0) {
            $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-y").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
      if ($("#step3-rad-y").is(":checked")) {
        setTimeout(function() {
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
        }, 300);
      }
      if ($("#step4-rad-y").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-yes").length > 0) {
            $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-y").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
      if ($("#step5-rad-y").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-yes").length > 0) {
            $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-y").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
      if ($("#step6-rad-y").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").fadeOut("slow");
          if ($("#" + parentID + "-yes").length > 0) {
            $("[id^=" + parentID + "]").css("display", "none");
            $("#" + parentID + "-rad-y").prop("checked", false);
            $("#step7, #step7-q").fadeIn("fast");
          }
        }, 300);
      }
      if ($("#step7-rad-y").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-yes").length > 0) {
            $("#" + parentID + "-no").css("display", "none");
            $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-y").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
      if ($("#step8-rad-y").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-yes").length > 0) {
            $("#" + parentID + "-no").css("display", "none");
            $("#" + parentID + "-a, #" + parentID + "-yes").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-y").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
    });
  });

  $(".no-step").change(function() {
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
      if ($("#step1-rad-n").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-no").length > 0) {
            $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-n").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
      if ($("#step2-rad-n").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").fadeOut("slow");
          if ($("#" + parentID + "-no").length > 0) {
            $("[id^=" + parentID + "]").css("display", "none");
            $("#" + parentID + "-rad-n").prop("checked", false);
            $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
          }
        }, 300);
      }
      if ($("#step3-rad-n").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-no").length > 0) {
            $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-n").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
      if ($("#step4-rad-n").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").fadeOut("slow");
          if ($("#" + parentID + "-no").length > 0) {
            $("[id^=" + parentID + "]").css("display", "none");
            $("#" + parentID + "-rad-n").prop("checked", false);
            $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
          }
        }, 300);
      }
      if ($("#step5-rad-n").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").fadeOut("slow");
          if ($("#" + parentID + "-no").length > 0) {
            $("[id^=" + parentID + "]").css("display", "none");
            $("#" + parentID + "-rad-n").prop("checked", false);
            $("#" + nextParent + ", #" + nextParent + "-q").fadeIn("fast");
          }
        }, 300);
      }
      if ($("#step6-rad-n").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").fadeOut("slow");
          if ($("#" + parentID + "-no").length > 0) {
            $("[id^=" + parentID + "]").css("display", "none");
            $("#" + parentID + "-rad-n").prop("checked", false);
            $("#step8 , #step8-q").fadeIn("fast");
          }
        }, 300);
      }
      if ($("#step7-rad-n").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-no").length > 0) {
            $("#" + parentID + "-yes").css("display", "none");
            $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-n").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
      if ($("#step8-rad-n").is(":checked")) {
        setTimeout(function() {
          $("#" + parentID + "-q").css("display", "none");
          if ($("#" + parentID + "-no").length > 0) {
            $("#" + parentID + "-yes").css("display", "none");
            $("#" + parentID + "-a, #" + parentID + "-no").fadeIn("fast");
            $("#" + parentID + "-a")
              .find("ul")
              .css("display", "none");
            $("#" + parentID + "-rad-n").prop("checked", false);
            $(".back-to-last").css("display", "none");
            $(".back-to-last-err").css("display", "inline-block");
          }
        }, 300);
      }
    });
  });

  $(".back-to-last-err").click(function() {
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

    var nextParent = this_
      .closest("div")
      .parent()
      .next("div")
      .attr("id");

    $("div").each(function() {
      switch (parentID) {
        case "step1":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-err").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step2":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-err").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step3":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-err").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step4":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-err").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step5":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-err").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step6":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-err").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          break;
        case "step7":
          $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
          $(".back-to-last-err").css("display", "none");
          $(".back-to-last").css("display", "inline-block");
          document.getElementById(parentID + "-a").style.display = "none";
          break;
        case "step8":
          if ($(".match").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-err").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
            document.getElementById(parentID + "-a").style.display = "none";
          }
          if ($(".match2").is(":visible")) {
            $("#" + parentID + ", #" + parentID + "-q").fadeIn("fast");
            $(".back-to-last-err").css("display", "none");
            $(".back-to-last").css("display", "inline-block");
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
    var nextParent = this_
      .closest("div")
      .parent()
      .next("div")
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
        case "step5":
          $("#" + parentID).css("display", "none");
          $("#" + previousParent + ", #" + previousParent + "-q").fadeIn(
            "fast"
          );
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
      }
    });
  });

  $(".finish").click(function() {
    window.parent.location.href = "https://www.companioncard.nsw.gov.au/";
  });
});
