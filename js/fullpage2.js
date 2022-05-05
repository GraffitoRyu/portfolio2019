const isMobile = navigator.userAgent.match(
    /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/
);
$(document).ready(function(){
    if (isMobile) $('html').addClass('mobile-device');


  /*

    < 스크롤 이벤트로 풀페이지 구현하기 >

    1. 첫 페이지가 활성화 되어있을 경우.
      - 위로 스크롤 할 때 : 아무 이벤트 일어나지 않게 하기
    2. 마지막 페이지가 활성화 되어있을 경우.
      - 아래로 스크롤 할 때 : 아무 이벤트 일어나지 않게 하기
    3. 공통 이벤트
      * 변화해야 하는 컨트롤 대상
        1) 배경 이미지 슬라이드 (#main-bg)
        2) 섹션 앵커 (ul#section-anchor)
        3) 메인 텍스트 박스 (ul#main-textbox)
      * 구분은 "on" 클래스 활용
  */

  var bgPos = 0; // 배경 위치값
  var bg = $('#main-bg .bg-item'); // 배경이미지
  var anchor = $('ul#section-anchor li'); // 섹션 앵커
  var textbox = $('ul#main-textbox li'); // 메인 텍스트
  var scrollEvent = false; // 스크롤 연쇄 반응 제어장치, 스크롤 시 한 섹션씩 나오도록


  // 마우스 휠 이벤트를 활용한 PC 환경에서의 풀페이지

  if(!isMobile) {
    window.addEventListener('wheel', function(e) {

      var nowBG = $('#main-bg .bg-item.on'); // 현재 배경이미지
      var nowAnchor = $('ul#section-anchor li.on'); // 활성화된 섹션 앵커
      var nowTextbox = $('ul#main-textbox li.on'); // 현재 메인 텍스트
      var nowIndexBG = nowBG.index(); // 배경이미지 인덱스
      var nowIndexAnchor = nowAnchor.index(); // 섹션 앵커 인덱스
      var nowIndexTextbox = nowTextbox.index(); // 메인 텍스트 인덱스


      if (e.deltaY < 0) {
        // 위로 스크롤 했을 때
        // console.log('scrolling up');
        if(!$('#main-bg .bg-1').is('.on') && scrollEvent == false) {
          scrollEvent = true; // 스크롤 연쇄 반응 제어장치
          bgPos = bgPos + 100;
          bg.eq(nowIndexBG).removeClass('on');
          bg.eq(nowIndexBG - 1).addClass('on');
          anchor.eq(nowIndexAnchor).removeClass('on');
          anchor.eq(nowIndexAnchor - 1).addClass('on');
          textbox.eq(nowIndexTextbox).removeClass('on');
          textbox.eq(nowIndexTextbox - 1).addClass('on');
          $('#main-bg').animate({top: bgPos + 'vh'}, 600, function(){
            scrollEvent = false; // 스크롤 연쇄 반응 제어장치
          });
          return bgPos;
        }
      } else if (e.deltaY > 0) {
        // 아래로 스크롤 했을 때
        // console.log('scrolling down');
        if(!$('#main-bg .bg-4').is('.on') && scrollEvent == false) {
          scrollEvent = true; // 스크롤 연쇄 반응 제어장치
          bgPos = bgPos - 100;
          bg.eq(nowIndexBG).removeClass('on');
          bg.eq(nowIndexBG + 1).addClass('on');
          anchor.eq(nowIndexAnchor).removeClass('on');
          anchor.eq(nowIndexAnchor + 1).addClass('on');
          textbox.eq(nowIndexTextbox).removeClass('on');
          textbox.eq(nowIndexTextbox + 1).addClass('on');
          $('#main-bg').animate({top: bgPos + 'vh'}, 600, function(){
            scrollEvent = false; // 스크롤 연쇄 반응 제어장치
          });
          return bgPos;
        }
      }
    });
  } else {
    return false;
    // 모바일 터치 스크롤

    var nowBG; // 현재 배경이미지
    var nowAnchor; // 활성화된 섹션 앵커
    var nowTextbox; // 현재 메인 텍스트
    var nowIndexBG; // 배경이미지 인덱스
    var nowIndexAnchor; // 섹션 앵커 인덱스
    var nowIndexTextbox; // 메인 텍스트 인덱스

    var startY; // 터치 시작 지점

    $(document).on('touchstart', function(e){

      nowBG = $('#main-bg .bg-item.on'); // 현재 배경이미지
      nowAnchor = $('ul#section-anchor li.on'); // 활성화된 섹션 앵커
      nowTextbox = $('ul#main-textbox li.on'); // 현재 메인 텍스트
      nowIndexBG = nowBG.index(); // 배경이미지 인덱스
      nowIndexAnchor = nowAnchor.index(); // 섹션 앵커 인덱스
      nowIndexTextbox = nowTextbox.index(); // 메인 텍스트 인덱스

      startY = e.originalEvent.touches[0].screenY;
      return startY;
    });

    $(document).on('touchmove', function(e){
      var endY = e.originalEvent.changedTouches[0].screenY; // 터치 끝 지점

      var dif = startY - endY;

      if(dif < 0) {
        // 아래로 터치 이동 = 스크롤 업
        // alert(dif);
        if(!$('#main-bg .bg-1').is('.on') && scrollEvent == false) {
          scrollEvent = true; // 스크롤 연쇄 반응 제어장치
          bgPos = bgPos + 100;
          bg.eq(nowIndexBG).removeClass('on');
          bg.eq(nowIndexBG - 1).addClass('on');
          anchor.eq(nowIndexAnchor).removeClass('on');
          anchor.eq(nowIndexAnchor - 1).addClass('on');
          textbox.eq(nowIndexTextbox).removeClass('on');
          textbox.eq(nowIndexTextbox - 1).addClass('on');
          $('#main-bg').animate({top: bgPos + 'vh'}, 600, function(){
            scrollEvent = false; // 스크롤 연쇄 반응 제어장치
          });
          return bgPos;
        }
      } else if(dif > 0) {
        // 위로 터치 이동 = 스크롤 다운
        // alert(dif);
        if(!$('#main-bg .bg-4').is('.on') && scrollEvent == false) {
          scrollEvent = true; // 스크롤 연쇄 반응 제어장치
          bgPos = bgPos - 100;
          bg.eq(nowIndexBG).removeClass('on');
          bg.eq(nowIndexBG + 1).addClass('on');
          anchor.eq(nowIndexAnchor).removeClass('on');
          anchor.eq(nowIndexAnchor + 1).addClass('on');
          textbox.eq(nowIndexTextbox).removeClass('on');
          textbox.eq(nowIndexTextbox + 1).addClass('on');
          $('#main-bg').animate({top: bgPos + 'vh'}, 600, function(){
            scrollEvent = false; // 스크롤 연쇄 반응 제어장치
          });
          return bgPos;
        }
      }
    })
  }

  // 섹션 앵커 클릭으로 이동
  $('ul#section-anchor li').on('click', function(e){
    e.preventDefault();

    // 현재 활성화된 섹션 인덱스
    var nowIndex = $(this).index();

    bgPos = -100 * nowIndex;
    $('#main-bg').stop().animate({top: bgPos + 'vh'}, 600);

    bg.eq(nowIndex).addClass('on');
    bg.eq(nowIndex).siblings().removeClass('on');
    anchor.eq(nowIndex).addClass('on');
    anchor.eq(nowIndex).siblings().removeClass('on');
    textbox.eq(nowIndex).addClass('on');
    textbox.eq(nowIndex).siblings().removeClass('on');


  });



});
