$(document).ready(function(){
  /*
    < 더 큐브 내비게이션 >
    헤더 배경색 변경을 위한 JS

    1. 페이지 첫 진입 시 작동되는 JS
    2. 윈도우 창 크기를 늘리거나 줄였을 경우 작동되는 JS
    3. 내비게이션 메뉴 클릭하면 이동하는 JS
    4. 모바일 내비게이션 호출 JS

  */

  // 1. 페이지 첫 진입 시 작동
  // 1-1. 데스크탑 (1024px 이상)
  if($(window).width() >= 1024) {
    // 스크롤되는 과정을 변수로 선언 (이렇게 해야 clearTimeout에 사용할 수 있고, 이를 통해 오작동을 방지할 수 있음)
    var scrolled = null;
    // 스크롤 시 작동하는 프로그램 호풀
    $(window).scroll(function(){
      // 스크롤 작동 후 실행하는 프로그램이 1번만 실행되도록 하는 초기화 장치
      clearTimeout(scrolled);
      // 스크롤이 "0.05초"간 이루어지고, 스크롤이 끝났을 때 실행되는 함수 "scrollDone"를 지정함.
      // 이 과정을 변수 "scrolled"로 선언
      scrolled = setTimeout(scrollDone, 50);
    });
    // 스크롤이 끝나고 실행할 함수 "scrollDone" 선언
    function scrollDone() {
      // 현재 화면에 보이는 위치가 페이지 최상단으로부터 얼만큼 떨어져있는지를 확인하는 변수
      var nowTop = $(window).scrollTop();
      // 각 섹션의 위치를 변수로 선언,
      // 섹션이 화면에서 어느정도의 면적을 차지할 때, 메뉴가 바뀌도록 200px씩 빼기
      var aboutTop = $('#cube-about').offset().top - 300; // ABOUT (소개) 섹션
      var featTop = $('#cube-features').offset().top - 300; // FEATURES (특징) 섹션
      var appTop = $('#cube-app').offset().top - 300; // APP (앱) 섹션
      var contactTop = $('#cube-contact').offset().top - 300; // CONTACT (문의) 섹션
      // "헤더 레이아웃 변경"
      // 현재 위치가 페이지 최상단으로부터 600px이상 떨어져 있을 경우
      if(nowTop >= 200) {
        $('#header').addClass('scrolled');
      // 현재 위치가 페이지 최상단으로부터 떨어진 거리가 600px미만일 경우
    } else if(nowTop < 200) {
        $('#header').removeClass('scrolled');
      }
      // "화면 위치에 따라, 내비게이션 메뉴 글자 색상이 변화"
      if(nowTop < aboutTop) {
        // 메인비주얼
        $('nav#cube-nav ul li:nth-child(1)').addClass('active');
        $('nav#cube-nav ul li:nth-child(1)').siblings('li').removeClass('active');
      } else if(nowTop >= aboutTop && nowTop < featTop) {
        // 더 큐브 소개
        $('nav#cube-nav ul li:nth-child(2)').addClass('active');
        $('nav#cube-nav ul li:nth-child(2)').siblings('li').removeClass('active');
      } else if(nowTop >= featTop && nowTop < appTop) {
        // 더 큐브 특징
        $('nav#cube-nav ul li:nth-child(3)').addClass('active');
        $('nav#cube-nav ul li:nth-child(3)').siblings('li').removeClass('active');
      } else if(nowTop >= appTop && nowTop < contactTop) {
        // 더 큐브 앱
        $('nav#cube-nav ul li:nth-child(4)').addClass('active');
        $('nav#cube-nav ul li:nth-child(4)').siblings('li').removeClass('active');
      } else if(nowTop >= contactTop) {
        // 컨택트 어스
        $('nav#cube-nav ul li:nth-child(5)').addClass('active');
        $('nav#cube-nav ul li:nth-child(5)').siblings('li').removeClass('active');
      }
    }
  // 1-2. 태블릿과 모바일 (1024px 미만)
  } else if ($(window).width() < 1024) {
    var scrolled = null;

    $(window).scroll(function(){
      clearTimeout(scrolled);
      scrolled = setTimeout(scrollDone, 50);
    });
    function scrollDone() {
      var nowTop = $(window).scrollTop();
      var aboutTop = $('#cube-about').offset().top - 300; // ABOUT (소개) 섹션
      var featTop = $('#cube-features').offset().top - 300; // FEATURES (특징) 섹션
      var appTop = $('#cube-app').offset().top - 300; // APP (앱) 섹션
      var contactTop = $('#cube-contact').offset().top - 300; // CONTACT (문의) 섹션

      if(nowTop >= 200) {
        $('#header').addClass('scrolled');
      } else if(nowTop < 200) {
        $('#header').removeClass('scrolled');
      }
      // "화면 위치에 따라, 내비게이션 메뉴 글자 색상이 변화"
      if(nowTop < aboutTop) {
        // 메인비주얼
        $('nav#cube-nav ul li:nth-child(1)').addClass('active');
        $('nav#cube-nav ul li:nth-child(1)').siblings('li').removeClass('active');
      } else if(nowTop >= aboutTop && nowTop < featTop) {
        // 더 큐브 소개
        $('nav#cube-nav ul li:nth-child(2)').addClass('active');
        $('nav#cube-nav ul li:nth-child(2)').siblings('li').removeClass('active');
      } else if(nowTop >= featTop && nowTop < appTop) {
        // 더 큐브 특징
        $('nav#cube-nav ul li:nth-child(3)').addClass('active');
        $('nav#cube-nav ul li:nth-child(3)').siblings('li').removeClass('active');
      } else if(nowTop >= appTop && nowTop < contactTop) {
        // 더 큐브 앱
        $('nav#cube-nav ul li:nth-child(4)').addClass('active');
        $('nav#cube-nav ul li:nth-child(4)').siblings('li').removeClass('active');
      } else if(nowTop >= contactTop) {
        // 컨택트 어스
        $('nav#cube-nav ul li:nth-child(5)').addClass('active');
        $('nav#cube-nav ul li:nth-child(5)').siblings('li').removeClass('active');
      }
    }
  }

  // 2. 윈도우 창 크기를 늘리거나 줄였을 경우 작동되는 JS
  // 2-1. "창 크기 변화 (리사이징) 감지 장치"를 먼저 설정
  // 화면 크기 변화 과정을 변수로 선언 (위와 마찬가지로 오작동 방지를 위한 장치)
  var resized = null;
  $(window).resize(function(){
    clearTimeout(resized);
    resized = setTimeout(resizeDone, 50);
  });
  // 2-2. 화면 크기 변화 완료 후 작동되는 함수
  // 여기 안에는 위(1. 페이지 첫 진입 시 작동)에 작성했던 내용이 들어감
  function resizeDone() {
    // 1. 페이지 첫 진입 시 작동
    // 1-1. 데스크탑 (1024px 이상)
    if($(window).width() >= 1024) {
      // 스크롤되는 과정을 변수로 선언 (이렇게 해야 clearTimeout에 사용할 수 있고, 이를 통해 오작동을 방지할 수 있음)
      var scrolled = null;
      // 스크롤 시 작동하는 프로그램 호풀
      $(window).scroll(function(){
        // 스크롤 작동 후 실행하는 프로그램이 1번만 실행되도록 하는 초기화 장치
        clearTimeout(scrolled);
        // 스크롤이 "0.05초"간 이루어지고, 스크롤이 끝났을 때 실행되는 함수 "scrollDone"를 지정함.
        // 이 과정을 변수 "scrolled"로 선언
        scrolled = setTimeout(scrollDone, 50);
      });
      // 스크롤이 끝나고 실행할 함수 "scrollDone" 선언
      function scrollDone() {
        // 현재 화면에 보이는 위치가 페이지 최상단으로부터 얼만큼 떨어져있는지를 확인하는 변수
        var nowTop = $(window).scrollTop();
        // 각 섹션의 위치를 변수로 선언,
        // 섹션이 화면에서 어느정도의 면적을 차지할 때, 메뉴가 바뀌도록 200px씩 빼기
        var aboutTop = $('#cube-about').offset().top - 300; // ABOUT (소개) 섹션
        var featTop = $('#cube-features').offset().top - 300; // FEATURES (특징) 섹션
        var appTop = $('#cube-app').offset().top - 300; // APP (앱) 섹션
        var contactTop = $('#cube-contact').offset().top - 300; // CONTACT (문의) 섹션
        // "헤더 레이아웃 변경"
        // 현재 위치가 페이지 최상단으로부터 600px이상 떨어져 있을 경우
        if(nowTop >= 200) {
          $('#header').addClass('scrolled');
        // 현재 위치가 페이지 최상단으로부터 떨어진 거리가 600px미만일 경우
      } else if(nowTop < 200) {
          $('#header').removeClass('scrolled');
        }
        // "화면 위치에 따라, 내비게이션 메뉴 글자 색상이 변화"
        if(nowTop < aboutTop) {
          // 메인비주얼
          $('nav#cube-nav ul li:nth-child(1)').addClass('active');
          $('nav#cube-nav ul li:nth-child(1)').siblings('li').removeClass('active');
        } else if(nowTop >= aboutTop && nowTop < featTop) {
          // 더 큐브 소개
          $('nav#cube-nav ul li:nth-child(2)').addClass('active');
          $('nav#cube-nav ul li:nth-child(2)').siblings('li').removeClass('active');
        } else if(nowTop >= featTop && nowTop < appTop) {
          // 더 큐브 특징
          $('nav#cube-nav ul li:nth-child(3)').addClass('active');
          $('nav#cube-nav ul li:nth-child(3)').siblings('li').removeClass('active');
        } else if(nowTop >= appTop && nowTop < contactTop) {
          // 더 큐브 앱
          $('nav#cube-nav ul li:nth-child(4)').addClass('active');
          $('nav#cube-nav ul li:nth-child(4)').siblings('li').removeClass('active');
        } else if(nowTop >= contactTop) {
          // 컨택트 어스
          $('nav#cube-nav ul li:nth-child(5)').addClass('active');
          $('nav#cube-nav ul li:nth-child(5)').siblings('li').removeClass('active');
        }
      }
    // 1-2. 태블릿과 모바일 (1024px 미만)
    } else if ($(window).width() < 1024) {
      var scrolled = null;

      $(window).scroll(function(){
        clearTimeout(scrolled);
        scrolled = setTimeout(scrollDone, 50);
      });
      function scrollDone() {
        var nowTop = $(window).scrollTop();
        var aboutTop = $('#cube-about').offset().top - 300; // ABOUT (소개) 섹션
        var featTop = $('#cube-features').offset().top - 300; // FEATURES (특징) 섹션
        var appTop = $('#cube-app').offset().top - 300; // APP (앱) 섹션
        var contactTop = $('#cube-contact').offset().top - 300; // CONTACT (문의) 섹션

        if(nowTop >= 200) {
          $('#header').addClass('scrolled');
        } else if(nowTop < 200) {
          $('#header').removeClass('scrolled');
        }
        // "화면 위치에 따라, 내비게이션 메뉴 글자 색상이 변화"
        if(nowTop < aboutTop) {
          // 메인비주얼
          $('nav#cube-nav ul li:nth-child(1)').addClass('active');
          $('nav#cube-nav ul li:nth-child(1)').siblings('li').removeClass('active');
        } else if(nowTop >= aboutTop && nowTop < featTop) {
          // 더 큐브 소개
          $('nav#cube-nav ul li:nth-child(2)').addClass('active');
          $('nav#cube-nav ul li:nth-child(2)').siblings('li').removeClass('active');
        } else if(nowTop >= featTop && nowTop < appTop) {
          // 더 큐브 특징
          $('nav#cube-nav ul li:nth-child(3)').addClass('active');
          $('nav#cube-nav ul li:nth-child(3)').siblings('li').removeClass('active');
        } else if(nowTop >= appTop && nowTop < contactTop) {
          // 더 큐브 앱
          $('nav#cube-nav ul li:nth-child(4)').addClass('active');
          $('nav#cube-nav ul li:nth-child(4)').siblings('li').removeClass('active');
        } else if(nowTop >= contactTop) {
          // 컨택트 어스
          $('nav#cube-nav ul li:nth-child(5)').addClass('active');
          $('nav#cube-nav ul li:nth-child(5)').siblings('li').removeClass('active');
        }
      }
    }
  }

  // 3. 내비게이션 메뉴 클릭 시 해당 섹션으로 이동하는 JS
  $('nav#cube-nav ul li a').on('click', function(e){
    e.preventDefault();
    // a 태그의 href 값을 "goToSection"에 저장
    var goToSection = this.hash;
    // 데스크탑 화면에서 헤더 높이 80px 빼기
    if($(window).width() >= 1024) {
      $('html,body').stop().animate({scrollTop: $(goToSection).offset().top - 80}, 800);
    // 모바일 화면에서 헤더 높이 50px 빼기
    } else if($(window).width() < 1024) {
      $('html,body').stop().animate({scrollTop: $(goToSection).offset().top - 50}, 800);
    }
  });


  // 4. 모바일 내비게이션 호출 JS
  if($(window).width() < 1024) {
    $('button#open-nav').on('click',function(e) {
      if(!$('nav#cube-nav').hasClass('open')) {
        e.preventDefault();
        $('nav#cube-nav').addClass('open');
        $('nav#cube-nav').stop().animate({width:200, opacity:1},300);
      } else if($('nav#cube-nav').hasClass('open')) {
        e.preventDefault();
        $('nav#cube-nav').stop().animate({width:0, opacity:0},300,function(){
          $('nav#cube-nav').removeClass('open');
          $('nav#cube-nav').removeAttr('style');
        });
      }
    });
    $('html,body').on('click',function(e){
      if($('nav#cube-nav').hasClass('open')) {
        if(!$(e.target).is('button#open-nav, nav#cube-nav')) {
          e.preventDefault();
          $('nav#cube-nav').stop().animate({width:0, opacity:0},300,function(){
            $('nav#cube-nav').removeClass('open');
            $('nav#cube-nav').removeAttr('style');
          });
        }
      }
    });
  }

  var resizeMobGnb = null;
  $(window).resize(function(){
    clearTimeout(resizeMobGnb);
    resizeMobGnb = setTimeout(resizeMobDone, 50);
  });
  function resizeMobDone() {
    if($(window).width() < 1024) {
      $('nav#cube-nav').removeClass('open');
      $('nav#cube-nav').removeAttr('style');
      $('button#open-nav').on('click',function(e) {
        if(!$('nav#cube-nav').hasClass('open')) {
          e.preventDefault();
          $('nav#cube-nav').addClass('open');
          $('nav#cube-nav').stop().animate({width:200, opacity:1},300);
        } else if($('nav#cube-nav').hasClass('open')) {
          e.preventDefault();
          $('nav#cube-nav').stop().animate({width:0, opacity:0},300,function(){
            $('nav#cube-nav').removeClass('open');
            $('nav#cube-nav').removeAttr('style');
          });
        }
      });
      $('html,body').on('click',function(e){
        if($('nav#cube-nav').hasClass('open')) {
          if(!$(e.target).is('button#open-nav, nav#cube-nav')) {
            e.preventDefault();
            $('nav#cube-nav').stop().animate({width:0, opacity:0},300,function(){
              $('nav#cube-nav').removeClass('open');
              $('nav#cube-nav').removeAttr('style');
            });
          }
        }
      });
    } else if($(window).width() >= 1024) {
      $('nav#cube-nav').removeClass('open');
      $('nav#cube-nav').removeAttr('style');
    };
  };


});
