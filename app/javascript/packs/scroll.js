

$(function() {
  $("a").click(function(e) {
    e.preventDefault();

    let hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function() {
      window.location.hash = hash;
    });
  });
});

