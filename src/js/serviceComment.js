$(function () {
  $pgNumber = $('.pgNumber')
  $pgNumber.each(function(index,item){
    $(this).on('click', function () {
      item = $(this)
      $(this).addClass('pgon').siblings().removeClass('pgon')
     //获取元素的下标
     //  console.log($(this).index())
      if(item.index()===1){
        $pgUp = $('.pgUp')
        $pgUp.addClass('enable').off('click')
      }
      if(item.index()!==1) {
        $('.pgUp').removeClass('enable').on('click',function () {
          $(item).prev().addClass('pgon').siblings().removeClass('pgon')
          item = item.prev()
          console.log($pgNumber.length)
          if(item.index() ===1){
            $('.pgUp').off('click').addClass('enable')
          }else{
            $('.pgUp').removeClass('enable')
          }
          if(item.index() ===$pgNumber.length+1){
            $('.pgDn').off('click').addClass('enable')
          }else{
            $('.pgDn').removeClass('enable')
          }
          if(item.index()<4){
            $('.ell').css({"display":"none"})
          }
        })
        if(item.index()>4){
          $('.ell').css({"display":"block"})
        }else{
          $('.ell').css({"display":"none"})
        }
      }
      if(item.index()!==$pgNumber.length+1){
        $('.pgDn').on('click',function () {
          $(item).next().addClass('pgon').siblings().removeClass('pgon')
          item = item.next()
          if(item.index() ===$pgNumber.length+1){
            $('.pgDn').off('click').addClass('enable')
          }else{
            $('.pgDn').removeClass('enable')
          }
          if(item.index() ===1){
            $('.pgUp').off('click').addClass('enable')
          }else{
            $('.pgUp').removeClass('enable')
          }
          if(item.index()>4){
            $('.ell').css({"display":"block"})
          }
        })
      }
      if(item.index()=== $pgNumber.length+1){
        $('.pgDn').addClass('enable').off('click')
      }else{
        $('.pgDn').removeClass('enable')
      }
    })
  })
  /*点击查看更多项目*/
  $findMore = $('.btn001')
  $findMore.on('click',function () {
   $('.boxtap').children().css({"display":"block"})
    $findMore.text("全部加载完毕")
  })

})