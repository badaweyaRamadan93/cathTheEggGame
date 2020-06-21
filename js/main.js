$(document).ready(function(){
     //variabls
     var hard_mode = 0;
     var normal_mode = 0;
     var easy_mode = 0;
     var speed = 0;
     var msec = 0;
     var sec = 0;
     var min = 0;
     var score = 0;
     var flag_stop = 0;
     var egg1_speed = 0;
     var egg2_speed = 0;
     var egg3_speed = 0;
     var black_egg_speed = 0;
     var press_egg_speed = 0;
     var golden_egg_speed = 0;
     var txt_pname = document.getElementById('textName');
     var errmsg = document.getElementById('error_msg');
     //click btn start
     $('#btnstart').on('click',function(){
        $('#levelprompet').slideDown(1000);
    });
      //validation on easy btn
    $('#easybtn').on('click',function(){
        if(txt_pname.value==""){
            $('#error_msg').css('visibility','visible')
        }
        else{
            speed = 1;
            easy_mode = 1;
            $('#error_msg').css('visibility','hidden');
            $('#levelprompet').slideUp(0);
            $('#btnstart').css('visibility','hidden')
            $('.landing-page').css('background',"url('images/backgroun.jpg')");
            $('.landing-page').css('background-size','cover');
            $('#all_data').show(0);
            document.getElementById("intro").play();
        }
        // game loop
        the_game();

    });  // end validation on easy moode
     //validation on normal mood
     $('#normalbtn').on('click',function(){
        if(txt_pname.value==""){
            $('#error_msg').css('visibility','visible')
        }
        else{
            speed = 2;
            normal_mode = 1;
            $('#golden_egg').show(0);
            $('#black_egg').show(0);
            $('#error_msg').css('visibility','hidden');
            $('#levelprompet').slideUp(0);
            $('#btnstart').css('visibility','hidden')
            $('.landing-page').css('background',"url('images/backgroun.jpg')");
            $('.landing-page').css('background-size','cover');
            $('#all_data').show(0);
            document.getElementById("intro").play();
            
        }
        // game loop
        the_game(); 
    });  // end validation on normaly mood
     //validation on hard btn
    $('#hardbtn').on('click',function(){
        if(txt_pname.value==""){
            $('#error_msg').css('visibility','visible')
        }
        else{
            speed = 3;
            hard_mode = 1;
            $('#golden_egg').show(0);
            $('#black_egg').show(0);
            $('#pressent').show(0);
            $('#error_msg').css('visibility','hidden');
            $('#levelprompet').slideUp(0);
            $('#btnstart').css('visibility','hidden')
            $('.landing-page').css('background',"url('images/backgroun.jpg')");
            $('.landing-page').css('background-size','cover');
            $('#all_data').show(0);
            document.getElementById("intro").play();
        }
        //the game loop
       the_game();

    });  // end validation on hard mood
    the_game = function(){
        $('#timer').animate({display:"block"},10,function(){
            $('#timer').text("Time:"+min+":"+sec+":"+msec);
            msec++;
            if(msec==60){
                msec = 0;
                sec++
            }
            if(sec==60){
                sec == 0;
                min++;
            } 
            // checke game over msg 
            if(min==2 && easy_mode==1){
                flag_stop= 1;
                document.getElementById("lose").play();
                $('#gameOver').show(0);
            }
            if(min==3 && normal_mode==1){
                flag_stop= 1;
                document.getElementById("lose").play();
                $('#gameOver').show(0);
            }
            if(min==5 && hard_mode==1){
                flag_stop= 1;
                document.getElementById("lose").play();
                $('#gameOver').show(0);
            }

            $('#egg1').css("top",parseInt($('#egg1').css('top'))+speed+egg1_speed);
            $('#egg2').css("top",parseInt($('#egg2').css('top'))+speed+egg2_speed);
            $('#egg3').css("top",parseInt($('#egg3').css('top'))+speed+egg3_speed);

            if((sec==5 || sec==25 || sec==55)&& hard_mode==1){
                press_egg_speed=4;
                $('#pressent').show(0);
            }
            $('#pressent').css("top",parseInt($('#pressent').css('top'))+speed+press_egg_speed);

            if((sec==2 || sec==30 || sec==40) && hard_mode==1||normal_mode==1){
                black_egg_speed=3;
                $('#black_egg').show(0);
            }
            $('#black_egg').css("top",parseInt($('#black_egg').css('top'))+speed+black_egg_speed);

            if((sec==3 || sec==12 || sec==20)&& hard_mode==1||normal_mode==1){
                golden_egg_speed=2;
                $('#golden_egg').show(0);
            }
            $('#golden_egg').css("top",parseInt($('#golden_egg').css('top'))+speed+golden_egg_speed);
 

            // check egg colision with floor
            if($('#pressent').css('top')>"560px"){
                $('#pressent').css('top','165px');
                var pressRandom = Math.random()*2000+200;
                if(pressRandom>900){
                    pressRandom = 900;
                }
                $('#pressent').css("left",pressRandom);
                press_egg_speed = 0;
                $('#pressent').hide(0);
            } // end pressent egg collision

            if($('#black_egg').css('top')>"560px"){
                $('#black_egg').css('top','165px');
                var blackRandom = Math.random()*2000+200;
                if(blackRandom>900){
                    blackRandom = 900;
                }
                $('#black_egg').css("left",blackRandom);
                black_egg_speed = 0;
                $('#black_egg').hide(0);
            } // end black egg collision
            if($('#golden_egg').css('top')>"560px"){
                $('#golden_egg').css('top','165px');
                var goldenRandom = Math.random()*2000+200;
                if(goldenRandom>900){
                    goldenRandom = 900;
                }
                $('#golden_egg').css("left",goldenRandom);
                golden_egg_speed = 0;
                $('#golden_egg').hide(0);
            } // end golden egg collision
            if($('#egg1').css('top')>"560px"){
                document.getElementById("braekegg").play();
                $("#egg1").css("top","165px");
                $('#brokenEgg1').show(0).delay(500).hide(0);
                egg1_speed = Math.random()*10;
            } // end egg1 collision
            if($('#egg2').css('top')>"560px"){
                document.getElementById("braekegg").play();
                $("#egg2").css("top","165px");
                $('#brokenEgg2').show(0).delay(500).hide(0);
                egg2_speed = Math.random()*10;
            } // end egg2 collision
            if($('#egg3').css('top')>"560px"){
                document.getElementById("braekegg").play();
                $("#egg3").css("top","165px");
                $('#brokenEgg3').show(0).delay(500).hide(0);
                egg3_speed = Math.random()*10;
            } // end egg3 collision
            // end eggs collision with floor

            if(colision_with_basket($("#egg1"))){
                document.getElementById("catchegg").play();
                $("#egg1").css("top","165px");
                score++;
                console.log(score);
            }
            if(colision_with_basket($("#egg2"))){
                document.getElementById("catchegg").play();
                $("#egg2").css("top","165px");
                score++;
                console.log(score);
            }
            if(colision_with_basket($("#egg3"))){
                document.getElementById("catchegg").play();
                $("#egg3").css("top","165px");
                score++;
                console.log(score);
            }
            if(colision_with_basket($("#black_egg"))){
                document.getElementById("catchegg").play();
                score-=3;
                $("#black_egg").css("top","165px");
                var blackRandom = Math.random()*2000+200;
                if(blackRandom>900)blackRandom = 900;
                $("black_egg").css("left",blackRandom);
                black_egg_speed = 0;
                $("#black_egg").hide(0);
            }
            if(colision_with_basket($("#golden_egg"))){
                document.getElementById("catchegg").play();
                score+=2;
                $("#golden_egg").css("top","165px");
                var goldenRandom = Math.random()*2000+200;
                if(goldenRandom>900)goldenRandom = 900;
                $("golden_egg").css("left",goldenRandom);
                golden_egg_speed = 0;
                $("#golden_egg").hide(0);
            }
            if(colision_with_basket($("#pressent"))){
                document.getElementById("catchegg").play();
                score+=3
                $("#pressent").css("top","165px");
                var pressRandom = Math.random()*2000+200;
                if(pressRandom>900)pressRandom = 900;
                $("pressent").css("left",pressRandom);
                black_egg_speed = 0;
                $("#pressent").hide(0);
            }


             if(flag_stop == 0){
                the_game();
            }  

             if(score<0){
                 score = 0;
             }
             
            $("#score").text('Score:'+score);
            $('#playerName').text('Player Name:'+txt_pname.value);
        }); // end animate function
       
    }; // end game loop function

    $(document).on("mousemove",function(event){
        left = event.pageX;
        console.log(left);
        if(left>1135) left = 1135;
        $('#basket').css("left" , left);

    }); // end mousemove function

    function colision_with_basket($div)
    {
        return(parseInt($div.css('top'))>parseInt($('#basket').css('top'))&&
        parseInt($div.css('left'))>parseInt($("#basket").css('left'))&&
        parseInt($div.css("left"))<parseInt($("#basket").css("left"))+220

        );

    } // end function colision with basket

    $("#stop").on('click',function(){
        if(flag_stop==0){
            flag_stop=1;
            $('#stop').text("Resume");
            $('#stop').css("color","red");
        }
        else{
            flag_stop=0;
            $('#stop').text('Stop');
            $('#stop').css('color','blueviolet');
            the_game();
        }
    }); //end click stop function

    $("#exit").on('click',function(){
        window.location.href = 'index.html';
    }); // end click exit function 
    $('#btn_play_again').on('click',function(){
         flag_stop=0;
         $('#gameOver').hide(0);
         game_start();
         the_game();
    }); // end btn play agin function
    $('#exit_btn').on('click',function(){
        window.location.href = 'index.html';
    }); // end btn exit function
    function game_start(){
        score = 0;
        sec = 0;
        min = 0;
        $("#egg1").css("top","140px");
        $("#egg2").css("top","140px");
        $("#egg3").css("top","140px");
        $("#black_egg").css("top","140px");
        $("#golden_egg").css("top","140px");

    }; // end game start function
      

    });  
    