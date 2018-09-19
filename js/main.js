

var elem = document.querySelector('.is-testimonies');
var infScroll = new InfiniteScroll( elem, {
  // options
  path: '/page{{#}}/',
  append: '.testimony-post',
  elementScroll: '.section-with-overflow',
  history: false,
});