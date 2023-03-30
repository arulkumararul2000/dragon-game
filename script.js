score = 0;
cross=true;
let audio = new Audio('./music/music.mp3');
let audiogo = new Audio('./music/gameover.mp3');

setTimeout(() => {                                                               
    audio.play();                                                                
}, 1000)
document.onkeydown = function (e) {                                              
    console.log("key code is ", e.keyCode)
    if (e.keyCode == 38) {                                                       
        dino = document.querySelector('.dino');                                  
        dino.classList.add('animateDino');                                       
        setTimeout(() => {
            dino.classList.remove('animateDino')                                 
                                                                                 
        }, 700)
    }


    if (e.keyCode == 39) {                                                              
        dino = document.querySelector('.dino');                                         
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))  
        dino.style.left = (dinoX + 112 )+ "px";                                         
                                                                                        
    }



    if (e.keyCode == 37) {                                                               
        dino = document.querySelector('.dino');                                          
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))   
        dino.style.left = (dinoX - 112) + "px";                                          

    }

}


// SetInterval works when we want to some work to work again in a particular interval or a time 
setInterval(() => {
    dino = document.querySelector('.dino');                                        
    gameOver = document.querySelector('.gameOver');                                
    obstacle = document.querySelector('.obstacle');                                

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));   
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));    

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left')); 
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top')); 


    offsetX = Math.abs(dx - ox);                           
                                                           
                                                            
     offsetY = Math.abs(dy - oy);                          
                                                           
    

    if(offsetX < 73 && offsetY < 52)                         
    {                                                         
        gameOver.innerHtml="Game Over,Try again!!"            
        obstacle.classList.remove('obstacleAni');            
                                                              
            audiogo.play();                                   
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },2000)
    }
    else if
        (offsetX <145 && cross){                                    
            score+=1;                                               
            updateScore(score);                                     
                                                                    
            
            
            cross=false;                                           
            setTimeout(()=>{                                       
                                                                  
                cross=true;                                        
            },1000);

            setTimeout(()=>{
                aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));   
                                                                                                                 
                                                                                                               
                                                                                                                    
                newDur=aniDur - 0.1;                                                                         
                                                                                                             

                obstacle.style.animationduration=newDur + 's';                                               
                console.log("new Animation duration ",newDur)
            },500)
        }
},100)

function updateScore(score)                                           
{                                                                     
    console.log(score);                                               
    scoreCount.innerHTML="Your Score :" + score;                      
                                                                      
}