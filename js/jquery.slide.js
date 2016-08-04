+function($){

        $.fn.x=function(x){
            $(this).css({
                transform:'translate3d('+x+'px,0,0)'
            })
            return this;
        }
        $.fn.y=function(y){
            $(this).css({
                transform:'translate3d(0,'+y+'px,0)'
            })
            return this;
        }
        $.fn.t=function(t){
           var t=t/1000;
            $(this).css({
                transition:'all '+t+'s  ease'
        })
            return this;
        }
        $.fn.c=function(t){
            $(this)
                .delay(t)
                .queue(function(){
                    $(this).css({
                        transition:'none'
                    }).dequeue();
                })
            return this;
        }
        $.fn.slide=function(op){
        option={
            w:$(document).width(),
            loop:'false',
            duration:'6'
        }
        $.extend(option,op);
        var dw=option.w;
        var inner= $(this).find('ul');
        inner.width(inner.children().length * dw);
        inner.children().width( dw );
        var o ;
        var index=0;
        inner.on('touchstart',function(ev){
            $(this).css({
                transition:'none'
            })
            o=ev.originalEvent.changedTouches[0].clientX;
        })
        inner.on('touchmove',function(ev){
            var x=ev.originalEvent.changedTouches[0].clientX;
            $(this).x( -dw *index + (x-o));
        })
        inner.on('touchend',function(ev){
            var x=ev.originalEvent.changedTouches[0].clientX;
            if(Math.abs (x-o)>dw/5){
                if(x < o){
                    index+=1;
                    if(index===inner.children().length){
                        index-=1;
                    }
                }else {
                    index-=1;
                    if(index===-1){
                        index=0
                    }
                }
                $(this).t(600).x( -dw*index).c(600);
            }else {
                $(this).t(600).x( -dw*index).c(600);
            }
        })
    }


}(jQuery)