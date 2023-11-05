document.addEventListener("DOMContentLoaded", function () {
    var carouselImages = document.querySelectorAll(".carousel-item img");
  
    carouselImages.forEach(function (image) {
      image.addEventListener("click", function () {
        var carousel = document.querySelector("#carouselExampleAutoplaying");
  
        if (!carousel.querySelector(".carousel-item.active").contains(image)) {
          carousel.querySelector(".carousel-control-next").click();
        }
      });
    });
  });
  