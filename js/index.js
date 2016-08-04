$(function(){
    $('.lunbo').slide();

    var o ;
    var dw=$('.lunbo').height();
    $(document).on('touchstart',function(ev){
          o=ev.originalEvent.changedTouches[0].clientY;
        })
    $(document).on('touchmove',function(ev){
       var x=ev.originalEvent.changedTouches[0].clientY;
        if((o-x)>dw){
            $('.header').addClass('red');
        }else {
            $('.header').removeClass('red');

        }
    })

   /* $(document).on('touchend',function(ev){
        var x=ev.originalEvent.changedTouches[0].clientY;

        if(Math.abs (x-o)<dw){

        }

    })*/


})