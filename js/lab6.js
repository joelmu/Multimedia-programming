// API key 487c31e57b0b76787de1cda4994c1bd6
// 39d8206a245473e7

function getIMG() {
  var tag = $('.input').val();
  $(".row").html("");
  $.ajax({
    type: "POST",
    url: 'https://api.flickr.com/services/feeds/photos_public.gne',
    dataType: 'jsonp',
    data: {
      "tags": tag,
      "format": "json"
    }
  });
};

function jsonFlickrFeed(json) {

  console.log(json);
  for (var x = 0; x < json.items.length; x++) {
    $(".row").append('<div class="cell mt-2" style="background:url(' + json.items[x].media.m + ') top no-repeat; background-size:cover;background-repeat:no-repeat;" class="img-responsive image"></div>');
  }
};
