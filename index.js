
        // window.addEventListener( "keydown" , (e)=>{
        //     var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
        //     var piano=document.querySelector(`.piano_bt[data-key="${e.keyCode}"]`);
        //     if(audio)
        //     {
        //         audio.play()
        //         audio.currentTime=0
        //         piano.classList.add("change")
        //     }
        //     return
        // })
        // var k=document.querySelectorAll(".piano_bt");
        // k.forEach((e)=>{
        //     e.addEventListener(`transitionend` , remove)
        // })
        // function remove(ks){
        //     if(k.propertyName="transform")
        //     {
        //         this.classList.remove("change")
        //     }
        //     return
        // }

        window.addEventListener( "keydown" ,praveen)

        function praveen(e){
            var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
            var piano_class=document.querySelector(`.piano_bt[data-key="${e.keyCode}"]`);
            
            if(audio)
            {
                audio.play()
                audio.currentTime=0;
                piano_class.classList.add("change");
            }
            return
        }

        // var k=document.querySelectorAll(".piano_bt");
        // k.forEach((e)=>{
        //     e.addEventListener(`transitionend` , praveen2)
        // })

        // function praveen2(k){

        //     if(k.propertyName="transform")
        //     {
        //         this.classList.remove("change");
        //     }
        //     return
        // }

        var k=document.getElementsByClassName("piano_bt");
        for (let i = 0; i < k.length; i++) {
            k[i].addEventListener(`transitionend` , function praveen2(){
             this.classList.remove("change")
            });
            }

        
        function onClick(e){
            var mute=document.getElementById("mute");
            var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
            if(mute){
                AudioListener.volume=0;
            }
            else
            {
                AudioListener.volume=1;
            }
        }

        // change BG in piano
        
        function onClickBG(){
            console.log("two");
            var body=document.getElementById("body");
            var body2=document.getElementById("gif");
            var audio =new Audio("./buttons/mixkit-select-click-1109.wav");
            if (Theme)
          {
              audio.play();
              body.classList.toggle("bo_bg_change");
              body2.classList.toggle("change3");
          }
        }

        //  function onClickBG2(){
        //     console.log("one");
        //     var body2=document.getElementById("gif");
        //     var p=document.getElementById("p1");
        //     var audio =new Audio("./buttons/mixkit-quick-win-video-game-notification-269.wav");
        //     if (Theme)
        //   {
        //     setTimeout(()=>{
        //         audio.play();
        //     },2000)  ;
        //     p.classList.toggle("p2");
        //     p.innerHTML="welcome to my world";
        //   }
        // }

        // change theme in piano

        function onClickTheme(){
            var Theme=document.getElementById("Theme");
            var body=document.getElementById("body");
            var piano1=document.getElementById("piano1");
            var piano_upper1=document.getElementById("piano_upper1");
            var audio =new Audio("./buttons/mixkit-arcade-game-jump-coin-216.wav");
        if (Theme)
          {
              audio.play();
              body.classList.toggle("bo_bg_change");
              piano1.classList.toggle("p_bg_change");
              piano_upper1.classList.toggle("pu_bg_change");
          }
        }
        
        var Theme=document.getElementById("Theme");
        Theme.addEventListener(`click`, doStuff);

        function doStuff(){
        for (var i = 1; i <= 11; i++) {
        var element=document.getElementById("piano_bt"+i);
        element.classList.toggle("pb_bg_change");
        }
        }
     
       //  add and remove class

        var au=document.querySelectorAll(".piano_bt")
        for (let i = 0; i < au.length; i++) {
             au[i].addEventListener(`click`, praveen5);
        }
         
        function praveen5(event){
            var innerHTML = event.target.innerHTML;
            change2(innerHTML);
            change(innerHTML);
        }

        function change(){
            var piano1=document.getElementsByClassName(`piano_bt`);
            for (let i = 0; i < piano1.length; i++) {
            
             piano1[i].addEventListener(`click` ,function tr(){
                     this.classList.add("change");
             });
        }}

        function change2(){
            var piano2=document.getElementsByClassName(`piano_bt_smll`);
            for (let i = 0; i < piano2.length; i++) {
            
            piano2[i].addEventListener(`click` ,function tr(){
                     this.classList.add("change");
             });
        }}

        // click to add sound

        function onClick(id){
        switch(id){

            // big_buttons

            case "piano_bt1":
                playMusic("./audio/mixkit-piano-game-over-1941.wav");
            break;
            case "piano_bt2":
                playMusic("./audio/mixkit-little-piano-game-over-1944.wav");
            break;
            case "piano_bt3":
                playMusic("./audio/mixkit-losing-piano-2024.wav");
            break;
            case "piano_bt4":
                playMusic("./audio/mixkit-piano-falling-effect-408.wav");
            break;
            case "piano_bt5":
                playMusic("./audio/mixkit-magic-notification-ring-2344.wav");
            break;
            case "piano_bt6":
                playMusic("./mix/mixkit-cartoon-whistling-738.wav");
            break;
            case "piano_bt7":
                playMusic("./mix/mixkit-flute-mobile-phone-notification-alert-2316.wav");
            break;
            case "piano_bt8":
                playMusic("./mix/mixkit-game-flute-bonus-2313.wav");
            break;
            case "piano_bt9":
                playMusic("./mix/mixkit-musical-alert-notification-2309.wav");
            break;
            case "piano_bt10":
                playMusic("./mix/mixkit-orchestral-violin-jingle-2280.wav");
            break;
            case "piano_bt11":
                playMusic("./mix/mixkit-deep-water-bubbles-1321.wav");
            break;

            // small_bttons

            case "piano_bt12":
                playMusic("./drums/mixkit-western-guitar-drum-single-2333.wav");
            break;
            case "piano_bt13":
                playMusic("./drums/mixkit-deep-dark-horror-drum-557.wav");
            break;
            case "piano_bt14":
                playMusic("./drums/mixkit-hand-tribal-drum-562.wav");
            break;
            case "piano_bt15":
                playMusic("./drums/mixkit-tribal-drum-echoes-574.wav");
            break;
            case "piano_bt16":
                playMusic("./drums/mixkit-tribal-dry-drum-558.wav");
            break;

            case "piano_bt17":
                playMusic("./animals/mixkit-little-bird-calling-chirp-23.wav");
            break;
            case "piano_bt18":
                playMusic("./animals/mixkit-toy-whistler-bird-sound-18.wav");
            break;
            case "piano_bt19":
                playMusic("./animals/mixkit-exotic-tropical-bird-screech-24.wav");
            break;
            case "piano_bt20":
                playMusic("./animals/mixkit-creaking-cartoon-bird-calling-11.wav");
            break;
            case "piano_bt21":
                playMusic("./animals/mixkit-double-little-bird-chirp-21.wav");
            break;
            default:

        }
        }  

        function playMusic(path){
          var audio =new Audio(path);
          audio.play()
          audio.currentTime=0;
        }
