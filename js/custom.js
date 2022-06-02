'use strict';

//포트폴리오 홈 화면 썸네일
$(function () {
  var modalId;
  // 	이미지 클릭시 해당 이미지 모달
  $(".thum_card").click(function () {
    modalId = $(this).children().attr("id");
    $("." + modalId).show();
    console.log(modalId);


    // 해당 이미지 가져오기
    var imgSrc = $(this).children(".pfThumnail").attr("src");
    $(".modalBox .thumb").attr("src", imgSrc);




    // 해당 이미지 텍스트 가져오기
    var imgTit = $(this).children(".thum_txt").html();
    $(".modalBox p").html(imgTit);
  });



  //.modal안에 button을 클릭하면 .modal닫기
  $(".modal button").click(function () {
    $("." + modalId).hide();
  });

  //.modal밖에 클릭시 닫힘
  $(".modal").click(function (e) {
    console.log(e.target.className);

    console.log("modahjkhkj")
    if (e.target.className != `modal ${modalId}`) {
      // return false;
    } else {
      $("." + modalId).hide();
    }
  });
});