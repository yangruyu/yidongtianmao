$(function(){
    var flag=false;
    var move = function(n,dir){
        flag=true;
        var active=$('.lunbo-inner .active');
        active.addClass(dir)
            .delay(600)
            .queue(function(){
                flag=false;
                $(this).removeClass('active')
                    .removeClass(dir)
                    .dequeue();

            })
        var op=(dir=='left')?'right':'left';
        $(n).addClass(op);
        $(n).get(0).offsetWidth;
        $(n).removeClass(op)
            .addClass('active');
        $('.btn li').removeClass('active').eq(items.index(n)).addClass('active');
    }
    var you=$('.lefta');
    var zuo=$('.righta');
    var items=$('.lunbo-inner .time');
    you.on('click',function(){
        if(flag){
            return;
        }
        var active=$('.lunbo-inner .active');
        if(active.next().length){
            var n=active.next();
        }else {
            var n=items.eq(0)
        }
        move(n,'left');
    })
    zuo.on('click',function(){
        if(flag){
            return
        }
        var active=$('.lunbo-inner .active');
        if(active.prev().length){
            var n=active.prev();
        }else {
            var n=items.eq(-1)
        }
        move(n,'right');
    })
    $('.btn li').on('click',function(){
        if($(this).index()>items.index($('.lunbo-inner .active'))){
            var d='left';
        }else {
            var d='right';
        }
        var n=items.eq($(this).index());
        move(n,d);
    })

    var t=setInterval(function(){
        you.trigger('click');
    },3000);
    $(document).on('mousewheel',function(e){
        var ee= e.originalEvent.deltaY;
        if(ee>0){
            $('.header').addClass('red');
        }
        if(ee<0){
            $('.header').removeClass('red');
        }
    })


})