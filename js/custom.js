﻿$(function(){
    const timer=setInterval(function(){
        const now = new Date();
        const hr = now. getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();

        if(hr >=10){
            hNum = hr;
        }else{
            hNum="0"+hr;
        };

        if(min>=10){
            mNum = min;
        }else{
            mNum="0"+min;
        };

        if(sec>=10){
            sNum=sec;
        }else{
            sNum="0"+sec;
        };


     //화면에 뿌리는 작업
        $("p span").eq(0).text(hNum);
        $("p span").eq(1).text(mNum);
        $("p span").eq(2).text(sNum);

    },1000); 
    
    //함수 밖이기 때문에 한번 더 선언
    const now = new Date();
    const hr = now.getHours();

    //시간에 따라 화면 테마 변경
    if(hr>=5 && hr<11){
        $("#wrap").removeClass();
        $("#wrap").addClass("morning");
        $("nav li").removeClass();
        $("nav li").eq(0).addClass("on");
    } else if(hr>=11 && hr<16){
        $("#wrap").removeClass();
        $("#wrap").addClass("afternoon");
        $("nav li").removeClass();
        $("nav li").eq(1).addClass("on");
    } else if(hr>=16 && hr<20){
        $("#wrap").removeClass();
        $("#wrap").addClass("evening");
        $("nav li").removeClass();
        $("nav li").eq(2).addClass("on");
    } else if(hr>=20 && hr<25){
        $("#wrap").removeClass();
        $("#wrap").addClass("night");
        $("nav li").removeClass();
        $("nav li").eq(3).addClass("on");
    };

    $("nav li").on("click",function(){
        const className =$(this).children("a").text();
        //class이름 text로 불러옴
        $("nav li").removeClass();
        $(this).addClass("on");
        $("#wrap").removeClass();
        $("#wrap").addClass(className);
    }) // css에 만들어둔 backgroundimg #wrap.class 불러옴

		
});









