

$(function () {
  $('.skill-item').click(function() {
    let description_id = this.id.replace('-button', '-description');
    $('#'+description_id).toggleClass('skill-description-hidden skill-description-visible');
  })
});
