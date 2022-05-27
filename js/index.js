import $ from 'jquery'

$(function(){
  //1 window -> 함수의 적용
  let windowW = $(window).width();
  //console.log(windowW);

  // resize -> reset
  $(window).on('resize',function(e){
    window.location.reload();
  })

  if(windowW > 1134){
    nav();
    aside();
  }
  else if(windowW <= 1134 && windowW > 980){
    nav();
    aside();
  } 
  else if(windowW <= 980 && windowW > 580){
    tnav()
    gallery()
  } 
  else if(windowW <= 580){
    tnav()
    gallery()
    FormData()
  } 


  //함수

  // 1.nav
  function nav(){
    $('nav li>a').on('click',function(e){
      const navA = $(this).attr('href');
      const aPos = $(navA).offset().top;
      const headerHeight = $('#header').innerHeight();
      console.log(headerHeight);
      $('html, body').animate({scrollTop:aPos - headerHeight},800);
      return false;
    })
  }
  // 2.nav->tablet, mobile
  function tnav(){
    $('#header .btn').on('click',function(e){
      $(this).hide()
      $('nav').animate({left:0},500);
    })
    $('nav li>a').on('click',function(e){
      let aHref = $(this).attr('href');
      let aPos = $(aHref).offset().top;
      let headerH = $('#header').innerHeight();
      let navW = $('nav').innerWidth();
      let windowW = $(window).width();
        if(windowW >= 580){
          navW += 60;
        }
      $('html,body').animate({scrollTop:aPos - headerH},800)
      $('nav').css('left','-'+navW+'px');
      $('#header .btn').show();
      return false;
    })
    $('nav .close').on('click',function(e){
      let navW = $('nav').innerWidth();
      let windowW = $(window).width();
        if(windowW >= 580){
          navW += 60;
        }
      $('nav').animate({left:'-'+navW+'px'},500)
      $('#header .btn').show();
    })
  }
  // 3.aside
    function aside(){
    $('aside li>a').on('click',function(e){
    const asideA = $(this).attr('href');
    const asidePos = $(asideA).offset().top;
    const headerTop = $('#header').innerHeight();
    $('html,body').animate({scrollTop:asidePos-headerTop});
    return false;
    });
  }
  
  
  
  // 4. gallery
  // console.log($('#box03 #all figure').width())
  // console.log($('#box03 #all figure').outerWidth(true)) -> figure 1개의 크기
  function gallery(){
   const figureW = $('#box03 #all figure').outerWidth(true)  
  //준비하기
  $('#all figure:last').prependTo('#all');
  $('#all').css('margin-left', '-'+figureW+'px');
  
  //이벤트
  $('#box03 .prev').on('click',function(e){
    $('#all').animate({marginLeft: '+='+figureW+'px'},600,function(){
      $('#all figure:last').prependTo('#all');
      $('#all').css('margin-left','-'+figureW+'px')
    });
  });
  $('#box03 .next').on('click',function(e){
    $('#all').animate({marginLeft: '-='+figureW+'px'},600,function(){
      $('#all figure:first').appendTo('#all');
      $('#all').css('margin-left','-'+figureW+'px')
    });
  });

}
//form -> mobile
 function FormData(){
  let $liForm = $('#box04 li>input, #box04 li>textarea');
    $liForm.removeAttr('placeholder');
    $liForm.on('focus',function(e){
      $(this).prev('label').fadeOut(400);
    });
    $liForm.on('blur',function(e){
      let str = $(this).val();
      if(str === ''){
        $(this).prev('label').fadeIn();
      }
    }); 
}

  // 5 modal
})




//객체 생성

// 1 생성자 함수
// 2 prototype
// 3 이벤트

