$(document).on("load scroll", function () {
  $(".circle").each(function (index, element) {
      let circleTopOffset = $(element).offset().top - $(window).scrollTop();
      if (circleTopOffset < 250) {
          $(element).addClass("active");
      } else {
          $(element).removeClass("active");
      }
  });

  $(".steps__item").each(function (index, element) {
      let itemTopOffset = $(element).offset().top - $(window).scrollTop();
      if (itemTopOffset < 250) {
          $(element).addClass("active");
      } else {
          $(element).removeClass("active");
      }
  });
});

