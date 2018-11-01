$(function () {
  //发请求



  //轮播图
  new Swiper ('.swiper-container', {
    effect : 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    }
  });
  //头部隐藏
  let $header = $('.header-wrap')
  let headerHeight = $header.outerHeight(true)
  let ishide = false
  $(window).scroll( function() {
    console.log(headerHeight)
    if(document.documentElement.scrollTop>headerHeight){
      if(!ishide){
        $header.hide().slideDown('slow').addClass('header-wrap header-fixed');
        ishide=true;
      }
    }else if(document.documentElement.scrollTop<headerHeight){
      if(ishide){
        console.log('a');
        $header.removeClass('header-fixed').prependTo('#app')
        ishide=false;
      }
    }
  });
})