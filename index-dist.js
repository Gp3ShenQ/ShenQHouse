AOS.init();var swiper=new Swiper(".innerSwiper",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0});swiper=new Swiper(".mySwiper",{navigation:{nextEl:".lArrow ",prevEl:".rArrow "},loop:!0});let beforeTop,direction,display;function about(){$(".aboutBox").show(),$(".projectBox").hide(),$(".serviceBox").hide()}function pageNone(){$(".pageBox1").css("display","none"),$(".pageBox2").css("display","none"),$(".pageBox3").css("display","none"),$(".pageBox4").css("display","none")}function detectDisplay(){if($(window).scrollTop()>=1700&&$(window).scrollTop()<=2300){if(display)return;$("main").attr("theme","1800"),$(".mask").css("display"," block"),display=!0}else $(window).scrollTop()<=1700?($("main").attr("theme","1799"),$(".bg1,.bg4,.bg3,.bg2").css("width","25%"),$(".back").css("display","none"),$(".mask").css("display","none"),pageNone(),display=!1):$(window).scrollTop()>=2600&&($(".bg1,.bg4,.bg3,.bg2").css("width","25%"),$(".back").css("display","none"),$(".mask").css("display","block"),pageNone())}function opacityControl(){let o=$(".innerStyle").offset().top-300,s=2*window.innerHeight/3,n=1-($(window).scrollTop()-o)/s>.6?.6:1-($(window).scrollTop()-o)/s;$(window).scrollTop()>o&&(console.log(n),n=1-($(window).scrollTop()-o)/s>.6?.6:1-($(window).scrollTop()-o)/s,$(".mask").css("background-color",`rgba(0,0,0,${n}`))}function blockEvent(){$(".bg1,.bg4,.bg3,.bg2").css("width","25%"),$(".back").css("display","none"),$(".pageBox1").css("display","none"),$(".pageBox2").css("display","none"),$(".pageBox3").css("display","none"),$(".pageBox4").css("display","none"),$(".mask").css("display","block")}$(window).on("scroll",(()=>{const o=$(window).scrollTop();console.log(o),0!=o||$(".point").hasClass("change")?$(".navbar").addClass("bgcwhite"):$(".navbar").removeClass("bgcwhite"),direction=beforeTop<$(window).scrollTop(),setTimeout((()=>{beforeTop=$(window).scrollTop()}),100)})),$(".point").on("click",(function(){$(".point").hasClass("change")?($(".point").removeClass("change"),$(".box").fadeIn(1e3),$(".innerPage").fadeOut(300),$("html,body").animate({scrollTop:0},100),$("footer").fadeIn(1e3)):($(".point").addClass("change"),$(".box").fadeOut(900),$(".innerPage").fadeIn(1e3),$("footer").fadeOut(900),about())})),$(".aboutMe").on("click",(function(){about()})),$(".project").on("click",(function(){$(".aboutBox").hide(),$(".projectBox").show(),$(".serviceBox").hide()})),$(".service").on("click",(function(){$(".aboutBox").hide(),$(".projectBox").hide(),$(".serviceBox").show()})),$(window).scrollTop()>=1800?($("main").attr("theme","1800"),display=!0):$(window).scrollTop()<1800?($("main").attr("theme","1799"),$(".bg1,.bg4,.bg3,.bg2").css("width","25%"),display=!1):$(window).scrollTop()>=2500&&($(".mask").css("display","none"),pageNone()),$(window).on("scroll",(function(){detectDisplay()})),$(".word1").on("click",(function(){$(".bg4,.bg3,.bg2").css("width","0"),$(".bg1").css("width","100%"),$(".pageBox1").css("display","block")})),$(".word2").on("click",(function(){$(".bg1,.bg4,.bg3").css("width","0"),$(".bg2").css("width","100%"),$(".pageBox2").css("display","block")})),$(".word3").on("click",(function(){$(".bg1,.bg4,.bg2").css("width","0"),$(".bg3").css("width","100%"),$(".pageBox3").css("display","block")})),$(".word4").on("click",(function(){$(".bg1,.bg3,.bg2").css("width","0"),$(".bg4").css("width","100%"),$(".pageBox4").css("display","block")})),$(".word1,.word2,.word3,.word4").on("click",(function(){$(".mask").css("display","none"),$(".back").css("display","block")})),$(".back").on("click",(function(){blockEvent()}));