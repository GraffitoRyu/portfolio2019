<?
session_start();
include $_SERVER['DOCUMENT_ROOT'] . "/lib/config.php";
include $_SERVER['DOCUMENT_ROOT'] . "/lib/function.php";

include "./count/index_start.php";
//이벤트 푸터
include "./common/inc/wejet.php";

//네이버웹마스터도구설정
$basic_que = "select * from wr_basic where no = '1'";
$result_basic = mysql_query($basic_que);
$row_basic = mysql_fetch_array($result_basic);
//네이버웹마스터도구설정


?>
<!DOCTYPE HTML>
<html lang="ko">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">

<title>2019 전통시장 가을축제</title>


<!-- 네이버웹마스터도구설정 -->
<meta name="naver-site-verification" content="<?=$row_basic[verification]?>"/>
<meta name="description" content="<?=$row_basic[description]?>">
<meta property="og:title" content="<?=$row_basic[title]?>">
<meta property="og:description" content="<?=$row_basic[description]?>">
<meta property="og:image" content="http://www.sijangae.or.kr/common/images/title/logo_fall_v2.png">
<title><?=$row_basic[title]?></title>
<!-- 네이버웹마스터도구설정 -->


<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="robots" content="ALL" />
<meta name="subject" content="" />
<meta name="description" content="" />
<meta property="og:type" content="website">
<meta property="og:title" content="">
<meta property="og:description" content="페이지 설명">
<meta property="og:image" content="http://www.sijangae.or.kr/common/images/title/logo_fall_v2.png">
<meta property="og:url" content="http://www.sijangae.or.kr/">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="">
<meta name="twitter:description" content="페이지 설명">
<meta name="twitter:image" content="http://www.sijangae.or.kr/common/images/title/logo_fall_v2.png">
<meta name="twitter:domain" content="http://www.sijangae.or.kr/">
<!--meta name="viewport" content="width=1200"-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="common/css/style.css">
<link rel="stylesheet" href="common/css/test.css">
<link rel="stylesheet" href="common/css/button.css">
<link rel="stylesheet" href="common/css/thickbox.css">
<link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Courgette&display=swap" rel="stylesheet">
<script src="common/js/jquery-1.8.2.min.js"></script>
<script src="common/js/jquery.easing.1.3.js"></script>
<script src="common/js/jquery.slides.min.js"></script>
<script src="common/js/jquery.touchSlider.js"></script>
<script src="common/js/jquery.animateNumber.js"></script>
<script src="common/js/thickbox.js"></script>
<script src="common/js/common.js"></script>
<script src="common/js/nav.js"></script>

<!--[if lt IE 9]>
	<script src="common/js/html5shiv.min.js"></script>
	<script src="common/js/respond.min.js"></script>
<![endif]-->

<?
	$sql_popup = "select * from wr_popup where blind <> 1 AND DATE_FORMAT( NOW( ) ,  '%Y%m%d' )  BETWEEN s_day AND e_day  order by wdate desc";
	//echo $sql_popup;
	$result_popup = mysql_query($sql_popup);
	$popup_row_cnt = mysql_affected_rows();

	//D-Day
	$nDate = date("Y-m-d"); // 오늘 날짜
	$valDate = "2017-10-19"; // 행사일 ('yyyy-mm-dd' 형식)
	$leftDate = intval((strtotime($valDate)-strtotime($nDate)) / 86400); // 나머지 날짜값
	if($leftDate < 0){
		$leftDate = str_replace('-','+',$leftDate);
	}
?>

<script type="text/javascript">

// 팝업존 slide
$(function() {
	$('.popup-slide').mvSlides({width:1200, height:120, play: {active:false, auto:false, interval:7000, swap:false}});
});
// 메인 slider
$(function() {


	var enableAutoPlay = "<?if($popup_row_cnt > 1) echo 'true'; else echo 'false'; ?>";

	$("#touchSlider").touchSlider({
		sidePage : true,
		btn_prev : $(".touchSlider_wrap").find(".pnBtn.prev"),
		btn_next : $(".touchSlider_wrap").find(".pnBtn.next")
	});
	$(".mobile-item").touchSlider({
		sidePage : false,
		autoplay : {
			enable : enableAutoPlay,
			pauseHover : true,
			addHoverTarget : "",
			interval : 3500
		}
	});
});
</script>
<script type="text/javascript"> //<![CDATA[
var tlJsHost = ((window.location.protocol == "https:") ? "https://secure.comodo.com/" : "http://www.trustlogo.com/");
document.write(unescape("%3Cscript src='" + tlJsHost + "trustlogo/javascript/trustlogo.js' type='text/javascript'%3E%3C/script%3E"));
//]]>
</script>

</head>

<body class="main">
	<div id="floatMenu" onclick="location='https://sijangae.or.kr:54116/opinion/opinion.php'">
	</div>
	<script>
	$(document).ready(function() {

		// 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
		var floatPosition = parseInt($("#floatMenu").css('top'));
		// 250px 이런식으로 가져오므로 여기서 숫자만 가져온다. parseInt( 값 );

		$(window).scroll(function() {
			// 현재 스크롤 위치를 가져온다.
			var scrollTop = $(window).scrollTop();
			var newPosition = scrollTop + floatPosition + "px";

			/* 애니메이션 없이 바로 따라감
			 $("#floatMenu").css('top', newPosition);
			 */

			$("#floatMenu").stop().animate({
				"top" : newPosition
			}, 0);

		}).scroll();

	});
	</script>
	<div class="main-notice">
		<div class="popup">
			<img src="common/images/cont/main-notice-popup.jpg" alt="안내입니다. 아프리카 돼지열병 확산으로 인해, 전통시장 가을축제가 취소 또는 연기가 될 수 있습니다. 방문 전 행사 진행 여부를 확인해주세요.">
			<form name="pop_form">
				<!-- <div id="checkPopup" class="popup-btn"><input type="checkbox" name="chkbox" value="checkbox" style="margin-right:5px;">다시 보지 않기</div> -->
				<!-- <div id="closePopup" class="popup-btn"><a href="#">닫기</a></div> -->
				<button id="closePopup" class="popup-btn">오늘 하루 보지않기</button>
			</form>
		</div>
	</div>
	<style>
		.main-notice {position:fixed;  top:0;  left:0;  z-index:1000;  height:100vh;  padding:15px;  background:rgba(0,0,0,0.5);  display:flex;  justify-content:center;  align-items:center;}
		.main-notice .popup {width:100%;  max-width:500px;  overflow:hidden;  font-size:0;}
		.main-notice .popup img {width:100%;}
		.main-notice .popup form {width:100%;  text-align:right; 	background:#f1f1f1;}
		.main-notice .popup form .popup-btn {display:inline-block;	font-size:14px;	line-height:20px;  margin-left:10px;  border:0;  appearance:none;  background:#f1f1f1;}
	</style>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script>
		$(document).ready(function(){
			$('.main-notice').on('click',function(e){
				// if(!$('html').is('.mobile-device') || $(window).width() >= 1024) {
				e.preventDefault();
				if(!$(e.target).is('.main-notice *') || $(e.target).is('#closePopup')){
					$('.main-notice').stop().animate({opacity:0}, 300, function(){
						$('.main-notice').hide();
					});
				};
				// };
			});

			$("#closePopup").on('click', function (e) {
				e.preventDefault();
				setCookieMobile( "todayCookie", "done" , 1);
				$('.main-notice').stop().animate({opacity:0}, 300, function(){
					$('.main-notice').hide();
				});
			});


			function setCookieMobile ( name, value, expiredays ) {
			    var todayDate = new Date();
			    todayDate.setDate( todayDate.getDate() + expiredays );
			    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
			}
			function getCookieMobile () {
			    var cookiedata = document.cookie;
			    if ( cookiedata.indexOf("todayCookier=done") < 0 ){
			         $(".main-notice").show().css({'opacity':1});
			    }
			    else {
			        $(".main-notice").hide().css({'opacity':1});
			    }
			}
			getCookieMobile();
		})
	</script>
	<div id="wrap" class="index_wrap">
		<!-- Popup zone -->
		<div id="popup-zone">
			<div class="popup-slide">

				<?
/*
					$sql_popup = "select * from wr_popup where blind <> 1 AND DATE_FORMAT( NOW( ) ,  '%Y%m%d' )  BETWEEN s_day AND e_day  order by wdate desc";
					//echo $sql_popup;
					$result_popup = mysql_query($sql_popup);
					$popup_row_cnt = mysql_affected_rows();
*/

					while($row_popup = mysql_fetch_assoc($result_popup)){

						if($row_popup[attach1]){
							$attach_real_ext = explode('.',$row_popup[attach1]);
							$attach_ext = $attach_real_ext[sizeof($attach_real_ext)-1];
							$attach_real_file = $row_popup[wdate] . '1.' . $attach_ext;
							$imgtag = "<img src=\"/attach/popup/".$attach_real_file."\" alt=''>";
							?>
								<a href="<?=$row_popup[link]?>" class="slide-item"><?=$imgtag?></a>

							<?
						}

					}

					$result_popup2 = mysql_query($sql_popup);

					while($row_popup2 = mysql_fetch_assoc($result_popup2)){

						if($row_popup2[attach1]){
							$attach_real_ext = explode('.',$row_popup2[attach1]);
							$attach_ext = $attach_real_ext[sizeof($attach_real_ext)-1];
							$attach_real_file = $row_popup2[wdate] . '1.' . $attach_ext;
							$imgtag = "<img src=\"/attach/popup/".$attach_real_file."\" alt=''>";
							?>
								<a href="<?=$row_popup2[link]?>" class="slide-item"><?=$imgtag?></a>

							<?
						}

					}


				?>

				<!--<a href="#" class="slide-item"><img src="common/images/cont/poupzone_cont_img.jpg" alt=""></a>
				<a href="#" class="slide-item"><img src="common/images/cont/poupzone_cont_img.jpg" alt=""></a>
		-		-->

			</div>
			<span class="close-today">
				<input type="radio" id="today" ><label for="today" >오늘하루 열지않기</label>
			</span>
		</div>


		<!-- Popup Mobile -->
		<?
		$sql_mobile_popup = "SELECT * FROM wr_popup WHERE blind <>1 AND DATE_FORMAT( NOW( ) ,  '%Y%m%d' )  BETWEEN s_day AND e_day ORDER BY wdate DESC";
		$result_mobile_popup = mysql_query($sql_mobile_popup);
		$mobile_popup_row_cnt = mysql_affected_rows();
		if($mobile_popup_row_cnt > 1){
		?>
				<div id="popup-zone-mobile">
					<div class="popup-mobile">
						<div class="mobile-item">
						<?

						$i = 1;
						while($row_mobile_popup = mysql_fetch_assoc($result_mobile_popup)){

							$attach_real_ext = explode('.',$row_mobile_popup['attach2']);
							$attach_ext = $attach_real_ext[sizeof($attach_real_ext)-1];
							$attach_real_file = $row_mobile_popup[wdate] . '2'. '.' . $attach_ext;
							$imgtag = "<img src=\"/attach/popup/".$attach_real_file."\" >";
							$i++;

						?>
							<a href="<?=$row_mobile_popup[link]?>" class="moble-item"><?=$imgtag?></a>
							<?}?>
						</div>
						<a href="#" class="btn-close"><img src="/_html/common/images/btn/btn_close02.png" alt="닫기" /></a>
					</div>
				</div>
		<?}else if($mobile_popup_row_cnt == 1){?>

		<div id="popup-zone-mobile">
			<div class="popup-mobile">
				<div class="mobile-item2">
				<?

				$i = 1;
				while($row_mobile_popup = mysql_fetch_assoc($result_mobile_popup)){

					$attach_real_ext = explode('.',$row_mobile_popup['attach2']);
					$attach_ext = $attach_real_ext[sizeof($attach_real_ext)-1];
					$attach_real_file = $row_mobile_popup[wdate] . '2'. '.' . $attach_ext;
					$imgtag = "<img src=\"/attach/popup/".$attach_real_file."\" >";
					$i++;

				?>
					<a href="<?=$row_mobile_popup[link]?>" class="moble-item2"><?=$imgtag?></a>
					<?}?>
				</div>
				<a href="#" class="btn-close"><img src="/_html/common/images/btn/btn_close02.png" alt="닫기" /></a>
			</div>
		</div>

		<?}?>

		<!-- Popup zone //-->

		<!-- Header -->
		<header id="header" style="margin-bottom: 0px;">
			<div class="header-inner">
				<h1 class="header_img_v1"><a href="#"><img src="common/images/title/logo_v2.png" alt="2017 전통시장 가을내음 축제"></a>
					<span class="blink"><a href="#" id="d-day" class="d-day" style="font-family: 'Courgette', cursive;"></a></span>
				</h1>

				<style type="text/css" media="screen">
					@keyframes blink {
					  50% {
					    opacity: 0.0;
					  }
					}
					@-webkit-keyframes blink {
					  50% {
					    opacity: 0.0;
					  }
					}
					.blink {
					  animation: blink 1s step-start 0s infinite;
					  -webkit-animation: blink 1s step-start 0s infinite;
					}
				</style>


				<!-- <div id="d-day"></div> -->

				<script>
				//디데이 종료 일자 설정
				var countDownDate = new Date("sep 20, 2019 00:00:00").getTime();
				//1초마다 갱신되도록 함수 생성,실행
				var x = setInterval(function() {
					// 오늘 날짜 등록
					var now = new Date().getTime();
					// 종료일자에서 현재일자를 뺀 시간
					var distance = countDownDate - now;
					var distancepost = now - countDownDate;
					// 각 변수에 일, 시, 분, 초를 등록
					var d = Math.floor((distance / (1000 * 60 * 60 * 24)) + 1);
					var dpost = Math.floor((distancepost / (1000 * 60 * 60 * 24)));
					var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					var s = Math.floor((distance % (1000 * 60)) / 1000);
					//id가 d-day인 HTML코드에 내용 삽입
					if(d == 0) document.getElementById("d-day").innerHTML = "D-DAY";
					else if(d < 0) document.getElementById("d-day").innerHTML = "D+" + dpost;
					else if(d > 0) document.getElementById("d-day").innerHTML = "D-" + d;
					});
					// document.getElementById("d-day").innerHTML = "-" + d +"일 " + h + "시간 " + m + "분 " + s + "초 남았습니다."; });

				</script>

				<nav id="gnb">
					<ul class="clearB">
						<li><a href="market_festival/market_festival.php" class="trans300">2019 전통시장 가을축제</a></li>
						<li><a href="market_search/market_search.php" class="trans300">참여시장</a></li>
						<!-- <li><a href="https://www.sijangae.or.kr/news/news_view.php?no=385&search=&search_text=&start=0" class="trans300">이벤트</a></li> -->
						<li class="nav-event-btn"><a href="event2019/" class="trans300" target="_blank">이벤트</a></li>
						<li><a href="market_review/market_review.php?s_year=2019&s_type=3" class="trans300">전통시장 여행 후기</a></li>
						<!-- <li><a href="event/event.php" class="trans300">이벤트</a></li> -->
						<li><a href="news/news.php" class="trans300">공지사항</a></li>
						<!-- <li><a href="consumer/consumer-intro.php" class="trans300">소비자의견</a></li> -->
						<li><a href="opinion/opinion.php" class="trans300">고객의 소리</a></li>
					</ul>
					<script>
						// // 모바일 기기 인식
						// if(navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
						//   //모바일(스마트폰+태블릿)일 때 실행 될 스크립트
						//   $('#gnb ul li.nav-event-btn a').attr('href').('https://m.facebook.com/sijangae/photos/a.511455312578520/1092376614486384/?type=3&source=48');
						// }
						// $(window).on('resize', function(){
						// 	if($(window).width() > 1024) {
						// 		$('#gnb ul li.nav-event-btn a').attr('href','https://www.facebook.com/sijangae/photos/a.511455312578520/1092376614486384/?type=3&theater');
						// 	} else {
						// 		$('#gnb ul li.nav-event-btn a').attr('href','https://m.facebook.com/sijangae/photos/a.511455312578520/1092376614486384/?type=3&source=48');
						// 	}
						// })
					</script>
					<div class="right-bnr">
						<a href="https://travelweek.visitkorea.or.kr/" target="_blank">
							<img src="common/images/btn/right-banner-1.png" alt="여행주간">
						</a>
						<a href="http://www.korailtravel.com/web/goods_view/index.asp?page_nm=goods_list&strApart=K&strBpart=M&strCpart=01" target="_blank">
							<img src="common/images/btn/right-banner-2.png" alt="코레일관광개발">
						</a>
						<a href="http://www.sijangtong.or.kr/nation/cms/readAction.do?menu_id=070100" target="_blank">
							<img src="common/images/btn/right-banner-3.png" alt="온누리모바일상품권">
						</a>
					</div>
				</nav>
				<div class="util util_v1">
					<span class="d-day">D-<em><?=$leftDate?></em></span>
					<a href="https://www.facebook.com/sijangae/" target="_blank" class="trans300" style="width:auto; padding-bottom:2px;"><img src="common/images/icon/sns_facebook.png" alt="facebook"></a>
					<a href="https://www.instagram.com/sijangae/" target="_blank" class="trans300" style="width:auto; padding-bottom:2px;"><img src="common/images/icon/sns_instagram.png" alt="instagram"></a>
					<a href="https://www.youtube.com/channel/UCW6xIEpzOU-VUY5T5FDPZ5g" target="_blank" class="trans300" style="width:auto;"><img src="common/images/icon/sns_youtube.png" alt="youtube"></a>
					<a href="#" class="btn-gnb" style="width:24px;"><img src="common/images/btn/btn_gnb.png" alt=""></a>
				</div>
			</div>


			<?if($popup_row_cnt > 0){?>
				<span class="popup-control trans300">팝업닫기 </span>
			<?}?>
        </header>



		<div id="mobile-header">
            <div class="mobile-wrap-inner">
                <nav id="gnb-mobile">
                    <ul>
						<li><a href="market_festival/market_festival.php" class="trans300">2019 전통시장 가을축제</a></li>
						<li><a href="market_search/market_search.php" class="trans300">참여시장</a></li>
						<!-- <li><a href="https://www.sijangae.or.kr/news/news_view.php?no=385&search=&search_text=&start=0" class="trans300">이벤트</a></li> -->
						<li><a href="event2019/" class="trans300">이벤트</a></li>
						<li><a href="market_review/market_review.php?s_year=2019&s_type=3" class="trans300">전통시장 여행 후기</a></li>
						<li><a href="news/news.php" class="trans300">공지사항</a></li>
						<li><a href="opinion/opinion.php" class="trans300">고객의 소리</a></li>
                    </ul>
                </nav>
            </div>
            <span class="btn-gnb-close"></span>
        </div>
		<div class="gnb-active-bg"></div>
		<section class="poster">
			<a href="event2019/" target="_blank" class="pc"><img src="common/images/cont/background_pc_v5.svg" alt="2019 전통시장 가을축제"></a>
			<a href="event2019/" target="_blank" class="mobile"><img src="common/images/cont/background_m.svg" alt="2019 전통시장 가을축제"></a>
		</section>
		<footer id="footer">
			<div class="footer-inner">
				<div class="footer-inner-head clearB">
					<span class="ft-logo"><img src="common/images/title/logo_v2.png" alt="2019 전통시장 가을축제"></span>
					<div class="ft-cont">
						<div class="ft-menu clearB">
							<ul>
								<li><a href="market_festival/market_festival.php">축제소개</a></li>
								<li><a href="#">개인정보취급방침</a></li>
								<li><a href="#">이메일무단수집거부</a></li>
							</ul>
						</div>
						<address>대전시 중구 보문로 246, 대림빌딩 11층</address>
						<span class="copyright">COPYRIGHT © 2018 Tradition Market Fall Festival ALL RIGHTS RESERVED.</span>
					</div>
					<span class="ssl">
						<script language="JavaScript" type="text/javascript">
							TrustLogo("/common/images/icon/icon_ssl.png", "CL1", "none");
						</script>
					</span>
					<span class="parking-info">
						주차! 걱정하지말고 오세요~!<br>
						주차장은 각 시장정보에서 확인하실 수 있습니다
					</span>
				</div>
				<div class="footer-inner-bottom clearB">
					<a href="http://www.mss.go.kr" target="_blank"><img src="common/images/icon/sponsor_01.png" alt="중소벤처기업부"></a>
					<a href="http://www.semas.or.kr" target="_blank"><img src="common/images/icon/sponsor_02.png" alt="소상공인시장진흥공단"></a>
					<span class="btn-gotop trans300"></span>
				</div>
			</div>
		</footer>
		<!-- Footer //-->
	<!-- </div> -->
	<script>
	$(function(){

		// D-day
		if($(window).load()){
			$('.util .d-day em')
				.prop('number', 10)
				.animateNumber(
				{
				  number: <?=$leftDate?>
				},
				2000
			);
		};

		var popup_row_cnt = "<?=$popup_row_cnt?>";

		if(popup_row_cnt > 0){
			var noShow = getCookie('noShow');

			if(noShow != "1")
				$(".popup-control").click();
		}

		$("#today").change(function(){

			if($(this).is(":checked"))
				setCookie('noShow', '1' , 1);

		});

		$(".btn-close").click(function(){
			$("#popup-zone-mobile").hide();
		});
	});
	</script>

</body>
</html>

<script type="text/javascript">

var first_click = true;
$(function(){

	var m_popup_cnt = "<?=$mobile_popup_row_cnt?>";


	if(m_popup_cnt <= 1){
		$(".slidesjs-navigation").css("display","none");
	}else{
		setTimeout(function(){
			if(first_click)
				$(".slidesjs-next").click();

		}, 7000);

	}

	$(".slidesjs-next").on("click", function(){
		first_click = false;
	});

	$("#popup-zone-mobile .btn-close").click(function(){
			$.getJSON("./save_m_popup_close.php", function(){
			// STUB
		});

	});
});

function data(area){
    var url = "main_data.php";
    $.get(url, {area:area}, function(data) {
        $("#main_data").html(data);
    });

$(".trans300").removeClass('active');
$("#data"+area).delay(1000).addClass('active');
$(".map-view").css("display","none");
}

function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
		{
		return unescape(y);
		}
	  }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

</script>
