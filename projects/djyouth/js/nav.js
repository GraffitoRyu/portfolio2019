$(document).ready(function(){
  // 대전 청년공간 내비게이션 jquery




  // 1. 데스크탑 내비게이션
  if($(window).width() >= 1200) {
    // 1-1. 내비게이션 열기 (마우스 올리기)
    $('nav#gnb-pc ul.category li:not(.category-blog)').on('mouseenter', function(){
      $('#dropdown').stop().animate({height:341}, 300);
    });
    // 1-2. 내비게이션 닫기 (마우스 빼기)
    $('#inct-header').on('mouseleave', function(){
      $('#dropdown').stop().animate({height:0}, 300, function(){
        $('#dropdown').removeAttr('style');
        $('#dropdown').removeClass();
      });
    });

    // 1-2. 내비게이션 마우스 오버 위치에 따른 로고 변경
    // 1-2-1. 함수 호출
    navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul.dropdown-space');
    /*navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul li a.rest');
    navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul li a.dododo');*/
    navLogo('nav#gnb-pc ul.category li.category-community', '#dropdown ul.community');
    navLogo('nav#gnb-pc ul.category li.category-policy', '#dropdown ul.support');
    navLogo('nav#gnb-pc ul.category li.category-youthnet', '#dropdown ul.youthnet');
    // 1-2-2. 함수 정의
    function navLogo(category, menulist) {
      $(category).on('mouseenter', function(){
        var menuIndex = $(category).index();
        $('#dropdown .logo-box-wide img').eq(menuIndex).addClass('on');
        $('#dropdown .logo-box-1200 img').eq(menuIndex).addClass('on');
        $('#dropdown .logo-box-wide img').eq(menuIndex).siblings().removeClass('on');
        $('#dropdown .logo-box-1200 img').eq(menuIndex).siblings().removeClass('on');
        if(menuIndex == 0) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('support');
        } else if(menuIndex == 1) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('trip');
        } else if(menuIndex == 2) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('youthnet');
        } else if(menuIndex == 3) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('community');
        }/* else if(menuIndex == 4) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('support');
        } else if(menuIndex == 5) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('youthnet');
        }*/
      });
      $(menulist).on('mouseenter', function(){
        var menuIndex = $(menulist).index();
				if(menuIndex != 1) {
					$('#dropdown .logo-box-wide img').eq(menuIndex).addClass('on');
	        $('#dropdown .logo-box-1200 img').eq(menuIndex).addClass('on');
					$('#dropdown .logo-box-wide img').eq(menuIndex).siblings().removeClass('on');
					$('#dropdown .logo-box-1200 img').eq(menuIndex).siblings().removeClass('on');
				}
        if(menuIndex == 0) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('support');
        } else if(menuIndex == 1) {
					$(menulist).find('a.trip').on('mouseenter', function(){
						$('#dropdown').removeClass();
						$('#dropdown').addClass('trip');
						$('#dropdown .logo-box-wide img').eq(1).addClass('on');
						$('#dropdown .logo-box-1200 img').eq(1).addClass('on');
						$('#dropdown .logo-box-wide img').eq(1).siblings().removeClass('on');
						$('#dropdown .logo-box-1200 img').eq(1).siblings().removeClass('on');
					});
					$(menulist).find('a.rest').on('mouseenter', function(){
						$('#dropdown').removeClass();
						$('#dropdown').addClass('rest');		
						$('#dropdown .logo-box-wide img').eq(4).addClass('on');
						$('#dropdown .logo-box-1200 img').eq(4).addClass('on');
						$('#dropdown .logo-box-wide img').eq(4).siblings().removeClass('on');
						$('#dropdown .logo-box-1200 img').eq(4).siblings().removeClass('on');
					});
					$(menulist).find('a.dododo').on('mouseenter', function(){
						$('#dropdown').removeClass();
						$('#dropdown').addClass('dododo');
						$('#dropdown .logo-box-wide img').eq(5).addClass('on');
						$('#dropdown .logo-box-1200 img').eq(5).addClass('on');
						$('#dropdown .logo-box-wide img').eq(5).siblings().removeClass('on');
						$('#dropdown .logo-box-1200 img').eq(5).siblings().removeClass('on');
					});

        } else if(menuIndex == 2) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('youthnet');
        } else if(menuIndex == 3) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('community');
        } /* else if(menuIndex == 4) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('support');
        } else if(menuIndex == 5) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('youthnet');
        }*/
      });
    }
  } else if($(window).width() >= 1024 && $(window).width() < 1200) {
    // 1-1. 내비게이션 열기 (마우스 올리기)
    $('nav#gnb-pc ul.category li:not(.category-blog)').on('mouseenter', function(){
      $('#dropdown').stop().animate({height:326}, 300);
    });
    // 1-2. 내비게이션 닫기 (마우스 빼기)
    $('#inct-header').on('mouseleave', function(){
      $('#dropdown').stop().animate({height:0}, 300, function(){
        $('#dropdown').removeAttr('style');
        $('#dropdown').removeClass();
      });
    });

    // 1-2. 내비게이션 마우스 오버 위치에 따른 로고 변경
    // 1-2-1. 함수 호출
    navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul.dropdown-space');
    /*navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul li a.rest');
    navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul li a.dododo');*/
    navLogo('nav#gnb-pc ul.category li.category-community', '#dropdown ul.community');
    navLogo('nav#gnb-pc ul.category li.category-policy', '#dropdown ul.support');
    navLogo('nav#gnb-pc ul.category li.category-youthnet', '#dropdown ul.youthnet');
    // 1-2-2. 함수 정의
    function navLogo(category, menulist) {
      $(category).on('mouseenter', function(){
        var menuIndex = $(category).index();
        $('#dropdown .logo-box-wide img').eq(menuIndex).addClass('on');
        $('#dropdown .logo-box-1200 img').eq(menuIndex).addClass('on');
        $('#dropdown .logo-box-wide img').eq(menuIndex).siblings().removeClass('on');
        $('#dropdown .logo-box-1200 img').eq(menuIndex).siblings().removeClass('on');
        if(menuIndex == 0) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('support');
        } else if(menuIndex == 1) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('trip');
        } else if(menuIndex == 2) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('youthnet');
        } else if(menuIndex == 3) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('community');
        }/* else if(menuIndex == 4) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('support');
        } else if(menuIndex == 5) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('youthnet');
        }*/
      });
      $(menulist).on('mouseenter', function(){
        var menuIndex = $(menulist).index();
				if(menuIndex != 1) {
					$('#dropdown .logo-box-wide img').eq(menuIndex).addClass('on');
	        $('#dropdown .logo-box-1200 img').eq(menuIndex).addClass('on');
					$('#dropdown .logo-box-wide img').eq(menuIndex).siblings().removeClass('on');
					$('#dropdown .logo-box-1200 img').eq(menuIndex).siblings().removeClass('on');
				}
        if(menuIndex == 0) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('support');
        } else if(menuIndex == 1) {
					$(menulist).find('a.trip').on('mouseenter', function(){
						$('#dropdown').removeClass();
						$('#dropdown').addClass('trip');
						$('#dropdown .logo-box-wide img').eq(1).addClass('on');
						$('#dropdown .logo-box-1200 img').eq(1).addClass('on');
						$('#dropdown .logo-box-wide img').eq(1).siblings().removeClass('on');
						$('#dropdown .logo-box-1200 img').eq(1).siblings().removeClass('on');
					});
					$(menulist).find('a.rest').on('mouseenter', function(){
						$('#dropdown').removeClass();
						$('#dropdown').addClass('rest');		
						$('#dropdown .logo-box-wide img').eq(4).addClass('on');
						$('#dropdown .logo-box-1200 img').eq(4).addClass('on');
						$('#dropdown .logo-box-wide img').eq(4).siblings().removeClass('on');
						$('#dropdown .logo-box-1200 img').eq(4).siblings().removeClass('on');
					});
					$(menulist).find('a.dododo').on('mouseenter', function(){
						$('#dropdown').removeClass();
						$('#dropdown').addClass('dododo');
						$('#dropdown .logo-box-wide img').eq(5).addClass('on');
						$('#dropdown .logo-box-1200 img').eq(5).addClass('on');
						$('#dropdown .logo-box-wide img').eq(5).siblings().removeClass('on');
						$('#dropdown .logo-box-1200 img').eq(5).siblings().removeClass('on');
					});
        } else if(menuIndex == 2) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('youthnet');
        } else if(menuIndex == 3) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('community');
        } /* else if(menuIndex == 4) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('support');
        } else if(menuIndex == 5) {
          $('#dropdown').removeClass();
          $('#dropdown').addClass('youthnet');
        }*/
      });
    }
  } else if($(window).width() < 1024 && $(window).width() >= 768) {




    // 2. 태블릿 및 모바일 내비게이션

    // 2-1. 내비게이션 열기 (열기 버튼 클릭)
    $('button#gnb-open-btn').on('click',function(e){
      e.preventDefault();
      $('#gnb-mobile').addClass('on').stop().animate({opacity:1}, 300);
      $('#gnb-mobile .gnb-mobile-box').stop().animate({width:250}, 300);
      $('#gnb-mobile .gnb-close').stop().animate({opacity:1}, 300);
    });

    // 2-2-1. 내비게이션 닫기 (닫기 버튼 클릭)
    $('#gnb-mobile .gnb-close button').on('click', function(e){
      e.preventDefault();
      $('#gnb-mobile .gnb-close').stop().animate({opacity:0}, 180);
      $('#gnb-mobile .gnb-mobile-box').stop().animate({width:0}, 300, function(){
        $('#gnb-mobile').stop().animate({opacity:0}, 300, function(){
          $('#gnb-mobile ul.gnb-mobile-list > li').removeClass('on');
          $('#gnb-mobile').removeClass('on');
          $('#gnb-mobile ul.toggle').removeAttr('style');
          $('#gnb-mobile .gnb-mobile-box').removeAttr('style');
        });
      });
    });

    // 2-2-2. 내비게이션 닫기 (바깥 영역 클릭)
    $('#gnb-mobile').on('click', function(e){
      if(!$(e.target).is('#gnb-mobile .gnb-mobile-box, #gnb-mobile .gnb-mobile-box *')) {
        e.preventDefault();
        $('#gnb-mobile .gnb-close').stop().animate({opacity:0}, 180);
        $('#gnb-mobile .gnb-mobile-box').stop().animate({width:0}, 300, function(){
          $('#gnb-mobile').stop().animate({opacity:0}, 300, function(){
            $('#gnb-mobile ul.gnb-mobile-list > li').removeClass('on');
            $('#gnb-mobile').removeClass('on').removeAttr('style');
            $('#gnb-mobile .gnb-mobile-box').removeAttr('style');
          });
        });
      }
    })

    // 2-3. 토글메뉴 (아코디언)
    // 2-3-1. 토글 함수 호출
    //gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-trip');
    //gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-rest');
    //gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-dododo');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-space');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-community');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-support');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-youthnet');		
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-blog');

    // 2-3-2. 토글 함수 선언
    function gnbMobile(category) {

      $(category).children('button.open-toggle').on('click', function(e){
		    if(!$(category).hasClass('on')) {
					e.preventDefault();
          var depth2Length = $(category).find('ul.toggle li').length;
          var toggleHeight = depth2Length * 40;

          $(category).addClass('on');
          $(category).children('ul.toggle').stop().animate({height: toggleHeight}, 300);
          $(category).siblings().children('ul.toggle').stop().animate({height: 0}, 300, function(){
            $(category).siblings().removeClass('on');
            $(category).siblings().children('ul.toggle').removeAttr('style');
          });
				} else if($(category).hasClass('on')) {
					e.preventDefault();
					alert('click');
					$(this).parents('li').removeClass('on');
					$(category).children('ul.toggle').stop().animate({height: 0}, 300, function(){
						$(category).children('ul.toggle').removeAttr('style');
					});
		    };
			});
    }

    // 2-4. 모바일 로컬 내비게이션 (lnb)
    var toggleLength = 0;
    $('nav#lnb-mobile ul.lnb-list > li.lnb-toggle button.lnb-btn').on('click', function(e){
      if($(this).hasClass('on') == false) {
        e.preventDefault();
        var toggleLength = $(this).siblings('ul.lnb-toggle-list').children('li.lnb-menu').length;
        var toggleHeight = toggleLength * 50;
        $(this).siblings('ul.lnb-toggle-list').stop().animate({height: toggleHeight}, 400, function(){
          $(this).siblings('button.lnb-btn').addClass('on');
        });
      } else if ($(this).hasClass('on') == true) {
        e.preventDefault();
        $(this).siblings('ul.lnb-toggle-list').stop().animate({height: 0}, 400, function(){
          $('ul.lnb-toggle-list').removeAttr('style');
          $(this).siblings('button.lnb-btn').removeClass('on');
        });
      };
    });

  } else if($(window).width() < 768) {
    // 2. 태블릿 및 모바일 내비게이션

    // 2-1. 내비게이션 열기 (열기 버튼 클릭)
    $('button#gnb-open-btn').on('click',function(e){
      e.preventDefault();
      $('#gnb-mobile').addClass('on').stop().animate({opacity:1}, 300);
      $('#gnb-mobile .gnb-mobile-box').stop().animate({width:250}, 300);
      $('#gnb-mobile .gnb-close').stop().animate({opacity:1}, 300);
    });

    // 2-2-1. 내비게이션 닫기 (닫기 버튼 클릭)
    $('#gnb-mobile .gnb-close button').on('click', function(e){
      e.preventDefault();
      $('#gnb-mobile .gnb-close').stop().animate({opacity:0}, 180);
      $('#gnb-mobile .gnb-mobile-box').stop().animate({width:0}, 300, function(){
        $('#gnb-mobile').stop().animate({opacity:0}, 300, function(){
          $('#gnb-mobile ul.gnb-mobile-list > li').removeClass('on');
          $('#gnb-mobile').removeClass('on');
          $('#gnb-mobile ul.toggle').removeAttr('style');
          $('#gnb-mobile .gnb-mobile-box').removeAttr('style');
        });
      });
    });

    // 2-2-2. 내비게이션 닫기 (바깥 영역 클릭)
    $('#gnb-mobile').on('click', function(e){
      if(!$(e.target).is('#gnb-mobile .gnb-mobile-box, #gnb-mobile .gnb-mobile-box *')) {
        e.preventDefault();
        $('#gnb-mobile .gnb-close').stop().animate({opacity:0}, 180);
        $('#gnb-mobile .gnb-mobile-box').stop().animate({width:0}, 300, function(){
          $('#gnb-mobile').stop().animate({opacity:0}, 300, function(){
            $('#gnb-mobile ul.gnb-mobile-list > li').removeClass('on');
            $('#gnb-mobile').removeClass('on').removeAttr('style');
            $('#gnb-mobile .gnb-mobile-box').removeAttr('style');
          });
        });
      };
    });

    // 2-3. 토글메뉴 (아코디언)
    // 2-3-1. 토글 함수 호출
    //gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-trip');
    //gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-rest');
    //gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-dododo');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-space');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-community');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-support');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-youthnet');
    gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-blog');

    // 2-3-2. 토글 함수 선언
    function gnbMobile(category) {
      if($(category).hasClass('on') == false) {
        $(category).children('button.open-toggle').on('click', function(e){
          e.preventDefault();
          var depth2Length = $(category).find('ul.toggle li').length;
          var toggleHeight = depth2Length * 40;

          $(category).addClass('on');
          $(category).children('ul.toggle').stop().animate({height: toggleHeight}, 300);
          $(category).siblings('li').children('ul.toggle').stop().animate({height: 0}, 300, function(){
            $(category).siblings('li').removeClass('on');
            $(category).siblings('li').children('ul.toggle').removeAttr('style');
          });
        });
      } /*else if($(category).hasClass('on') == true) {
        $(category).children('button.open-toggle').on('click', function(e){
          $(category).removeClass('on');
          $(category).children('ul.toggle').stop().animate({height: 0}, 300, function(){
            $(category).children('ul.toggle').removeAttr('style');
          });
        });
      }*/

      // 2-4. 모바일 로컬 내비게이션 (lnb)
      var toggleLength = 0;
      $('nav#lnb-mobile ul.lnb-list > li.lnb-toggle button.lnb-btn').on('click', function(e){
        if($(this).hasClass('on') == false) {
          e.preventDefault();
          var toggleLength = $(this).siblings('ul.lnb-toggle-list').children('li.lnb-menu').length;
          var toggleHeight = toggleLength * 40;
          $(this).siblings('ul.lnb-toggle-list').stop().animate({height: toggleHeight}, 400, function(){
            $(this).siblings('button.lnb-btn').addClass('on');
          });
        } else if ($(this).hasClass('on') == true) {
          e.preventDefault();
          $(this).siblings('ul.lnb-toggle-list').stop().animate({height: 0}, 400, function(){
            $('ul.lnb-toggle-list').removeAttr('style');
            $(this).siblings('button.lnb-btn').removeClass('on');
          });
        };
      });
    };
  }





  // 3. 맨 위로 이동하기 버튼
  $('.go-to-top a').on('click', function(e) {
    e.preventDefault();
    var moveToTop = this.hash;
    $('html, body').stop().animate({scrollTop: $(moveToTop).offset().top}, 800);
  });





  // 4. 브러우저 창 리사이징에 따른 내비게이션 적용
  // 4-1. 리사이징 기본 세팅
  var resized = null;
  $(window).resize(function(){
    clearTimeout(resizedNav);
    resized = setTimeout(resizedNav, 300);
  });

  // 4-2. 리사이징 후 적용될 함수 (1~2번의 내비게이션 로직 적용)
  function resizedNav() {
    // 1. 데스크탑 내비게이션
    if($(window).width() >= 1200) {
      // 1-1. 내비게이션 열기 (마우스 올리기)
      $('nav#gnb-pc ul.category li:not(.category-blog)').on('mouseenter', function(){
        $('#dropdown').stop().animate({height:341}, 300);
      });
      // 1-2. 내비게이션 닫기 (마우스 빼기)
      $('#inct-header').on('mouseleave', function(){
        $('#dropdown').stop().animate({height:0}, 300, function(){
          $('#dropdown').removeAttr('style');
          $('#dropdown').removeClass();
        });
      });

      // 1-2. 내비게이션 마우스 오버 위치에 따른 로고 변경
      // 1-2-1. 함수 호출
      navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul.dropdown-space');
			/*navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul li a.rest');
			navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul li a.dododo');*/
			navLogo('nav#gnb-pc ul.category li.category-community', '#dropdown ul.community');
			navLogo('nav#gnb-pc ul.category li.category-policy', '#dropdown ul.support');
			navLogo('nav#gnb-pc ul.category li.category-youthnet', '#dropdown ul.youthnet');
			// 1-2-2. 함수 정의
			function navLogo(category, menulist) {
				$(category).on('mouseenter', function(){
					var menuIndex = $(category).index();
					$('#dropdown .logo-box-wide img').eq(menuIndex).addClass('on');
					$('#dropdown .logo-box-1200 img').eq(menuIndex).addClass('on');
					$('#dropdown .logo-box-wide img').eq(menuIndex).siblings().removeClass('on');
					$('#dropdown .logo-box-1200 img').eq(menuIndex).siblings().removeClass('on');
					if(menuIndex == 0) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('support');
					} else if(menuIndex == 1) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('trip');
					} else if(menuIndex == 2) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('youthnet');
					} else if(menuIndex == 3) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('community');
					}/* else if(menuIndex == 4) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('support');
					} else if(menuIndex == 5) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('youthnet');
					}*/
				});
				$(menulist).on('mouseenter', function(){
					var menuIndex = $(menulist).index();
					if(menuIndex != 1) {
						$('#dropdown .logo-box-wide img').eq(menuIndex).addClass('on');
						$('#dropdown .logo-box-1200 img').eq(menuIndex).addClass('on');
						$('#dropdown .logo-box-wide img').eq(menuIndex).siblings().removeClass('on');
						$('#dropdown .logo-box-1200 img').eq(menuIndex).siblings().removeClass('on');
					}
					if(menuIndex == 0) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('support');
					} else if(menuIndex == 1) {
						$(menulist).find('a.trip').on('mouseenter', function(){
							$('#dropdown').removeClass();
							$('#dropdown').addClass('trip');
							$('#dropdown .logo-box-wide img').eq(1).addClass('on');
							$('#dropdown .logo-box-1200 img').eq(1).addClass('on');
							$('#dropdown .logo-box-wide img').eq(1).siblings().removeClass('on');
							$('#dropdown .logo-box-1200 img').eq(1).siblings().removeClass('on');
						});
						$(menulist).find('a.rest').on('mouseenter', function(){
							$('#dropdown').removeClass();
							$('#dropdown').addClass('rest');		
							$('#dropdown .logo-box-wide img').eq(4).addClass('on');
							$('#dropdown .logo-box-1200 img').eq(4).addClass('on');
							$('#dropdown .logo-box-wide img').eq(4).siblings().removeClass('on');
							$('#dropdown .logo-box-1200 img').eq(4).siblings().removeClass('on');
						});
						$(menulist).find('a.dododo').on('mouseenter', function(){
							$('#dropdown').removeClass();
							$('#dropdown').addClass('dododo');
							$('#dropdown .logo-box-wide img').eq(5).addClass('on');
							$('#dropdown .logo-box-1200 img').eq(5).addClass('on');
							$('#dropdown .logo-box-wide img').eq(5).siblings().removeClass('on');
							$('#dropdown .logo-box-1200 img').eq(5).siblings().removeClass('on');
						});

					} else if(menuIndex == 2) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('youthnet');
					} else if(menuIndex == 3) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('community');
					} /* else if(menuIndex == 4) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('support');
					} else if(menuIndex == 5) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('youthnet');
					}*/
				});
      }
    } else if($(window).width() >= 1024 && $(window).width() < 1200) {
      // 1-1. 내비게이션 열기 (마우스 올리기)
      $('nav#gnb-pc ul.category li:not(.category-blog)').on('mouseenter', function(){
        $('#dropdown').stop().animate({height:326}, 300);
      });
      // 1-2. 내비게이션 닫기 (마우스 빼기)
      $('#inct-header').on('mouseleave', function(){
        $('#dropdown').stop().animate({height:0}, 300, function(){
          $('#dropdown').removeAttr('style');
          $('#dropdown').removeClass();
        });
      });

      // 1-2. 내비게이션 마우스 오버 위치에 따른 로고 변경
      // 1-2-1. 함수 호출
      navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul.dropdown-space');
			/*navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul li a.rest');
			navLogo('nav#gnb-pc ul.category li.category-space', '#dropdown ul li a.dododo');*/
			navLogo('nav#gnb-pc ul.category li.category-community', '#dropdown ul.community');
			navLogo('nav#gnb-pc ul.category li.category-policy', '#dropdown ul.support');
			navLogo('nav#gnb-pc ul.category li.category-youthnet', '#dropdown ul.youthnet');
			// 1-2-2. 함수 정의
			function navLogo(category, menulist) {
				$(category).on('mouseenter', function(){
					var menuIndex = $(category).index();
					$('#dropdown .logo-box-wide img').eq(menuIndex).addClass('on');
					$('#dropdown .logo-box-1200 img').eq(menuIndex).addClass('on');
					$('#dropdown .logo-box-wide img').eq(menuIndex).siblings().removeClass('on');
					$('#dropdown .logo-box-1200 img').eq(menuIndex).siblings().removeClass('on');
					if(menuIndex == 0) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('support');
					} else if(menuIndex == 1) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('trip');
					} else if(menuIndex == 2) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('youthnet');
					} else if(menuIndex == 3) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('community');
					}/* else if(menuIndex == 4) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('support');
					} else if(menuIndex == 5) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('youthnet');
					}*/
				});
				$(menulist).on('mouseenter', function(){
					var menuIndex = $(menulist).index();
					if(menuIndex != 1) {
						$('#dropdown .logo-box-wide img').eq(menuIndex).addClass('on');
						$('#dropdown .logo-box-1200 img').eq(menuIndex).addClass('on');
						$('#dropdown .logo-box-wide img').eq(menuIndex).siblings().removeClass('on');
						$('#dropdown .logo-box-1200 img').eq(menuIndex).siblings().removeClass('on');
					}
					if(menuIndex == 0) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('support');
					} else if(menuIndex == 1) {
						$(menulist).find('a.trip').on('mouseenter', function(){
							$('#dropdown').removeClass();
							$('#dropdown').addClass('trip');
							$('#dropdown .logo-box-wide img').eq(1).addClass('on');
							$('#dropdown .logo-box-1200 img').eq(1).addClass('on');
							$('#dropdown .logo-box-wide img').eq(1).siblings().removeClass('on');
							$('#dropdown .logo-box-1200 img').eq(1).siblings().removeClass('on');
						});
						$(menulist).find('a.rest').on('mouseenter', function(){
							$('#dropdown').removeClass();
							$('#dropdown').addClass('rest');		
							$('#dropdown .logo-box-wide img').eq(4).addClass('on');
							$('#dropdown .logo-box-1200 img').eq(4).addClass('on');
							$('#dropdown .logo-box-wide img').eq(4).siblings().removeClass('on');
							$('#dropdown .logo-box-1200 img').eq(4).siblings().removeClass('on');
						});
						$(menulist).find('a.dododo').on('mouseenter', function(){
							$('#dropdown').removeClass();
							$('#dropdown').addClass('dododo');
							$('#dropdown .logo-box-wide img').eq(5).addClass('on');
							$('#dropdown .logo-box-1200 img').eq(5).addClass('on');
							$('#dropdown .logo-box-wide img').eq(5).siblings().removeClass('on');
							$('#dropdown .logo-box-1200 img').eq(5).siblings().removeClass('on');
						});

					} else if(menuIndex == 2) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('youthnet');
					} else if(menuIndex == 3) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('community');
					} /* else if(menuIndex == 4) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('support');
					} else if(menuIndex == 5) {
						$('#dropdown').removeClass();
						$('#dropdown').addClass('youthnet');
					}*/
				});
      }
    } else if($(window).width() < 1024 && $(window).width() >= 768) {




      // 2. 태블릿 및 모바일 내비게이션

      // 2-1. 내비게이션 열기 (열기 버튼 클릭)
      $('button#gnb-open-btn').on('click',function(e){
        e.preventDefault();
        $('#gnb-mobile').addClass('on').stop().animate({opacity:1}, 300);
        $('#gnb-mobile .gnb-mobile-box').stop().animate({width:250}, 300);
        $('#gnb-mobile .gnb-close').stop().animate({opacity:1}, 300);
      });

      // 2-2-1. 내비게이션 닫기 (닫기 버튼 클릭)
      $('#gnb-mobile .gnb-close button').on('click', function(e){
        e.preventDefault();
        $('#gnb-mobile .gnb-close').stop().animate({opacity:0}, 180);
        $('#gnb-mobile .gnb-mobile-box').stop().animate({width:0}, 300, function(){
          $('#gnb-mobile').stop().animate({opacity:0}, 300, function(){
            $('#gnb-mobile ul.gnb-mobile-list > li').removeClass('on');
            $('#gnb-mobile').removeClass('on');
            $('#gnb-mobile ul.toggle').removeAttr('style');
            $('#gnb-mobile .gnb-mobile-box').removeAttr('style');
          });
        });
      });

      // 2-2-2. 내비게이션 닫기 (바깥 영역 클릭)
      $('#gnb-mobile').on('click', function(e){
        if(!$(e.target).is('#gnb-mobile .gnb-mobile-box, #gnb-mobile .gnb-mobile-box *')) {
          e.preventDefault();
          $('#gnb-mobile .gnb-close').stop().animate({opacity:0}, 180);
          $('#gnb-mobile .gnb-mobile-box').stop().animate({width:0}, 300, function(){
            $('#gnb-mobile').stop().animate({opacity:0}, 300, function(){
              $('#gnb-mobile ul.gnb-mobile-list > li').removeClass('on');
              $('#gnb-mobile').removeClass('on').removeAttr('style');
              $('#gnb-mobile .gnb-mobile-box').removeAttr('style');
            });
          });
        }
      })

      // 2-3. 토글메뉴 (아코디언)
      // 2-3-1. 토글 함수 호출
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-trip');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-rest');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-dododo');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-community');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-support');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-youthnet');

      // 2-3-2. 토글 함수 선언
      function gnbMobile(category) {
        if($(category).hasClass('on') == false) {
          $(category).children('button.open-toggle').on('click', function(e){
            e.preventDefault();
            var depth2Length = $(category).find('ul.toggle li').length;
            var toggleHeight = depth2Length * 40;

            $(category).addClass('on');
            $(category).children('ul.toggle').stop().animate({height: toggleHeight}, 300);
            $(category).siblings('li').children('ul.toggle').stop().animate({height: 0}, 300, function(){
              $(category).siblings('li').removeClass('on');
              $(category).siblings('li').children('ul.toggle').removeAttr('style');
            });
          });
        } /*else if($(category).hasClass('on') == true) {
          $(category).children('button.open-toggle').on('click', function(e){
            $(category).removeClass('on');
            $(category).children('ul.toggle').stop().animate({height: 0}, 300, function(){
              $(category).children('ul.toggle').removeAttr('style');
            });
          });
        }*/

        // 2-4. 모바일 로컬 내비게이션 (lnb)
        var toggleLength = 0;
        $('nav#lnb-mobile ul.lnb-list > li.lnb-toggle button.lnb-btn').on('click', function(e){
          if($(this).hasClass('on') == false) {
            e.preventDefault();
            var toggleLength = $(this).siblings('ul.lnb-toggle-list').children('li.lnb-menu').length;
            var toggleHeight = toggleLength * 50;
            $(this).siblings('ul.lnb-toggle-list').stop().animate({height: toggleHeight}, 400, function(){
              $(this).siblings('button.lnb-btn').addClass('on');
            });
          } else if ($(this).hasClass('on') == true) {
            e.preventDefault();
            $(this).siblings('ul.lnb-toggle-list').stop().animate({height: 0}, 400, function(){
              $('ul.lnb-toggle-list').removeAttr('style');
              $(this).siblings('button.lnb-btn').removeClass('on');
            });
          };
        });
      }
    } else if($(window).width() < 768) {
      // 2. 태블릿 및 모바일 내비게이션

      // 2-1. 내비게이션 열기 (열기 버튼 클릭)
      $('button#gnb-open-btn').on('click',function(e){
        e.preventDefault();
        $('#gnb-mobile').addClass('on').stop().animate({opacity:1}, 300);
        $('#gnb-mobile .gnb-mobile-box').stop().animate({width:250}, 300);
        $('#gnb-mobile .gnb-close').stop().animate({opacity:1}, 300);
      });

      // 2-2-1. 내비게이션 닫기 (닫기 버튼 클릭)
      $('#gnb-mobile .gnb-close button').on('click', function(e){
        e.preventDefault();
        $('#gnb-mobile .gnb-close').stop().animate({opacity:0}, 180);
        $('#gnb-mobile .gnb-mobile-box').stop().animate({width:0}, 300, function(){
          $('#gnb-mobile').stop().animate({opacity:0}, 300, function(){
            $('#gnb-mobile ul.gnb-mobile-list > li').removeClass('on');
            $('#gnb-mobile').removeClass('on');
            $('#gnb-mobile ul.toggle').removeAttr('style');
            $('#gnb-mobile .gnb-mobile-box').removeAttr('style');
          });
        });
      });

      // 2-2-2. 내비게이션 닫기 (바깥 영역 클릭)
      $('#gnb-mobile').on('click', function(e){
        if(!$(e.target).is('#gnb-mobile .gnb-mobile-box, #gnb-mobile .gnb-mobile-box *')) {
          e.preventDefault();
          $('#gnb-mobile .gnb-close').stop().animate({opacity:0}, 180);
          $('#gnb-mobile .gnb-mobile-box').stop().animate({width:0}, 300, function(){
            $('#gnb-mobile').stop().animate({opacity:0}, 300, function(){
              $('#gnb-mobile ul.gnb-mobile-list > li').removeClass('on');
              $('#gnb-mobile').removeClass('on').removeAttr('style');
              $('#gnb-mobile .gnb-mobile-box').removeAttr('style');
            });
          });
        };
      });

      // 2-3. 토글메뉴 (아코디언)
      // 2-3-1. 토글 함수 호출
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-trip');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-rest');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-dododo');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-community');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-support');
      gnbMobile('#gnb-mobile .gnb-mobile-box ul.gnb-mobile-list li.m-youthnet');

      // 2-3-2. 토글 함수 선언
      function gnbMobile(category) {
        if($(category).hasClass('on') == false) {
          $(category).children('button.open-toggle').on('click', function(e){
            e.preventDefault();
            var depth2Length = $(category).find('ul.toggle li').length;
            var toggleHeight = depth2Length * 40;

            $(category).addClass('on');
            $(category).children('ul.toggle').stop().animate({height: toggleHeight}, 300);
            $(category).siblings('li').children('ul.toggle').stop().animate({height: 0}, 300, function(){
              $(category).siblings('li').removeClass('on');
              $(category).siblings('li').children('ul.toggle').removeAttr('style');
            });
          });
        } /*else if($(category).hasClass('on') == true) {
          $(category).children('button.open-toggle').on('click', function(e){
            $(category).removeClass('on');
            $(category).children('ul.toggle').stop().animate({height: 0}, 300, function(){
              $(category).children('ul.toggle').removeAttr('style');
            });
          });
        }*/

        // 2-4. 모바일 로컬 내비게이션 (lnb)
        var toggleLength = 0;
        $('nav#lnb-mobile ul.lnb-list > li.lnb-toggle button.lnb-btn').on('click', function(e){
          if($(this).hasClass('on') == false) {
            e.preventDefault();
            var toggleLength = $(this).siblings('ul.lnb-toggle-list').children('li.lnb-menu').length;
            var toggleHeight = toggleLength * 40;
            $(this).siblings('ul.lnb-toggle-list').stop().animate({height: toggleHeight}, 400, function(){
              $(this).siblings('button.lnb-btn').addClass('on');
            });
          } else if ($(this).hasClass('on') == true) {
            e.preventDefault();
            $(this).siblings('ul.lnb-toggle-list').stop().animate({height: 0}, 400, function(){
              $('ul.lnb-toggle-list').removeAttr('style');
              $(this).siblings('button.lnb-btn').removeClass('on');
            });
          };
        });
      };
    }
  }
});
