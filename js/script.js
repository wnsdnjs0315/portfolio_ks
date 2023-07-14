//패밀리사이트
$(function() {
    $('.listOpen').click(function(){
        $('.listOpen').hide()
        $('.family_box').show()
        $('.listClose').show()
        $('.fa-minus').show()
    })
    $('.listClose').click(function(){
        $('.listClose').hide()
        $('.family_box').hide()
        $('.fa-minus').hide()
        $('.listOpen').show()
    })
})



//모바일
 //모바일 gnb
 $(function() {
    $('.btn_gnbm').click(function() {
        $('.gnb_mobilebg').fadeIn(300)
        $('.gnb_mobile').stop().animate({
            right: '0'
        })
    })
     //오른쪽으로 다시 들어가는거
     $('.gnb_close').click(function(){
        $('.gnb_mobilebg').fadeOut(300)
        $('.gnb_mobile').stop().animate({
            right: '-100%'
        })
     })
 })


//오른쪽 아래 버튼
$(function() {
    $('.btn_top').click(function(){
        $(window).scrollTop(0);
    })
})