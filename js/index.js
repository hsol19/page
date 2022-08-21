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
    An()
  }
  else if(windowW <= 1134 && windowW > 980){
    nav();
    aside();
    An()
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
$(window).on('scroll',function(){
//  현재의 scrollY의 위치 ->1
//  변수  : $(선택자).offset().top -> 2
// if(1>2){$(#skill>ul>li:nth-child(1)>span).animte({backgroundSize:"값"})}
 const A =$(document).scrollTop();
//  console.log(A)
 const B = $('#box02').offset().top
//  console.log(B)
 if(A>B){
  // console.log('welcome')
  $("#skill>ul>li:nth-child(1)>span").animate({backgroundSize:'80%'})
  $("#skill>ul>li:nth-child(2)>span").animate({backgroundSize:'65%'})
  $("#skill>ul>li:nth-child(3)>span").animate({backgroundSize:'65%'})
  $("#skill>ul>li:nth-child(4)>span").animate({backgroundSize:'60%'})
  $("#skill>ul>li:nth-child(5)>span").animate({backgroundSize:'60%'})
 }
//  if(A>B){{$("#skill>ul>li:nth-child(1)>span").animte({backgroundSize:"80%"})}}
})

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
function Modal(title,pic,year,program,url,text){
  this.title = title;
  this.pic = pic;
  this.year = year;
  this.program = program;
  this.url = url;
  this.text = text;
}


// 2 prototype
Modal.prototype.action = function(){
  const H5 = document.querySelector('#modal h5');
  const Img = document.querySelector('#modal figure>img')
  const Figcaption = document.querySelector('#modal figure>figcaption')
  const Year = document.querySelector('#modal .year')
  const Program = document.querySelector('#modal .program')
  const Url = document.querySelector('#modal .url>a')
  const Text = document.querySelector('#modal .text')

  H5.innerHTML = this.title;
  Img.setAttribute('src',this.pic)
  Figcaption.innerHTML = this.title;
  Year.innerHTML = this.year;
  Program.innerHTML = this.program;
  Url.setAttribute('href',this.url);
  Url.innerHTML = this.url;
  Text.innerHTML = this.text;
}

let modal = [
  new Modal('flower','./pic/flower.jpg','2022','HTML,CSS','http://hskim.dothome.co.kr/flower/flower.html','html과 css로 꽃을 파는 홈페이지를 제작하였다'),
  new Modal('SAMSUNG','./pic/pic02.png','20022','ajax, bootstrap','http://hskim.dothome.co.kr/samsung/index.html','ajax와 bootstrap을 이용하여 삼성홈페이지를 제작하였다'),
  new Modal('lush','./pic/lush.png','2022','HTML,CSS','http://hskim.dothome.co.kr/lush/lush.html','html과 css로 lush 홈페이지를 제작하였다'),
  new Modal('Tiffany','./pic/tiffany.png','2022','React,Javascript,jquery','https://hsol19.github.io','react를 이용해 쥬얼리 사이트를 제작하였다. 정렬기능을 넣어 홈페이지의 완성도를 높혔다'),
  new Modal('Netflix','./pic/netflix.jpg','2022','프로그램5','http://hskim.dothome.co.kr/netflix/index.html','ajax와 bootstrap을 이용하여 넷플릭스홈페이지를 제작하였다'),
  new Modal('iloom,','./pic/iloom.jpg','2022','HTML,CSS,Javascript,Jquery','https://fanciful-phoenix-6a128f.netlify.app/','javascript와 jquery를 이용하였고 반응형으로 일룸홈페이지를 제작하였다')
]
// 3 이벤트
//figure, .close
const btn = document.querySelectorAll('#box03 figure')
const close = document.querySelector('#modal p.close')
  btn.forEach(function(item){
    item.addEventListener('click',play);
  })
  close.addEventListener('click',stop)
function play(){
//#modal -. display변경
//내가 클릭한 figure name값을 가져오기
//modal[2].action();
document.querySelector('#modal').style.display = 'block'
let num = this.getAttribute('name');
console.log(num)
modal[num].action();
}

function stop(){
  document.querySelector('#modal').style.display = 'none'
  //#modal -> none
}


function Ci(){
  $('#box01 .com>div:last-child').fadeOut(2000,function(e){
    $(this).prependTo('.com').css('display','block');
  })

}
setInterval(Ci,3000)


function An(){
 
    // $(window).scroll(function(){
    //   $('#skill>ul>li>span').each(function(e){
    //     const A = $(this).offset().top+$(this).outerHeight();
    //     const B =$(window).scrollTop()+$(window).height;
    //     if(B>A){
    //       $(this).animate({'opacity':'1'},1000)
    //     }
    //   })
    // })

}
// 870

