let cnt=0;

function onBoxClick(id){
    if(cnt%2==0 && cnt<9){
        const x=document.getElementById(id);
        if(x.innerHTML==""){
            x.innerHTML='*'; 
            cnt++;
            const b1=document.getElementById("b1").innerHTML;
            const b2=document.getElementById("b2").innerHTML;
            const b3=document.getElementById("b3").innerHTML;
            const b4=document.getElementById("b4").innerHTML;
            const b5=document.getElementById("b5").innerHTML;
            const b6=document.getElementById("b6").innerHTML;
            const b7=document.getElementById("b7").innerHTML;
            const b8=document.getElementById("b8").innerHTML;
            const b9=document.getElementById("b9").innerHTML;
            const results=document.getElementById("results");
            results.innerHTML="player 2 move";
            if((b1==b2 && b2==b3) && b1!=""){
                    results.innerHTML="player 1 wins";
                    cnt=19;
            }
            else if((b4==b5 && b5==b6) && b4!=""){
                    results.innerHTML="player 1 wins";
                    cnt=19;
            }
            else if((b7==b8 && b8==b9) && b7!=""){
                    results.innerHTML="player 1 wins";
                    cnt=19;
            }
            else if((b1==b4 && b4==b7) && b1!=""){
                    results.innerHTML="player 1 wins";
                    cnt=19;
            }
            else if((b2==b5 && b5==b8) && b5!=""){
                    results.innerHTML="player 1 wins";
                    cnt=19;
            }
            else if((b3==b6 && b6==b9)&&b6!=""){
                    results.innerHTML="player 1 wins";
                    cnt=19;
            }
            else if((b1==b5 && b5==b9) && b1!=""){
                    results.innerHTML="player 1 wins";
                    cnt=19;
            }
            else if((b3==b5 && b5==b7) && b5!=""){
                    results.innerHTML="player 1 wins";
                    cnt=19;
            }
            if(cnt==9){
                results.innerHTML="Game draw"
            } 
        }
    }
    else if(cnt%2==1 && cnt<9){
        const x=document.getElementById(id);
        if(x.innerHTML==""){
            x.innerHTML='#'; 
            cnt++; 
            const b1=document.getElementById("b1").innerHTML;
            const b2=document.getElementById("b2").innerHTML;
            const b3=document.getElementById("b3").innerHTML;
            const b4=document.getElementById("b4").innerHTML;
            const b5=document.getElementById("b5").innerHTML;
            const b6=document.getElementById("b6").innerHTML;
            const b7=document.getElementById("b7").innerHTML;
            const b8=document.getElementById("b8").innerHTML;
            const b9=document.getElementById("b9").innerHTML;
            const results=document.getElementById("results");
            results.innerHTML="player 1 move";
            if((b1==b2 && b2==b3) && b1!=""){
                    results.innerHTML="player 2 wins";
                    cnt=10;
            }
            else if((b4==b5 && b5==b6) && b4!=""){
                    results.innerHTML="player 2 wins";
                    cnt=10;
            }
            else if((b7==b8 && b8==b9) && b7!=""){
                    results.innerHTML="player 2 wins";
                    cnt=10;
            }
            else if((b1==b4 && b4==b7) && b1!=""){
                    results.innerHTML="player 2 wins";
                    cnt=10;
            }
            else if((b2==b5 && b5==b8) && b5!=""){
                    results.innerHTML="player 2 wins";
                    cnt=10;
            }
            else if((b3==b6 && b6==b9)&&b6!=""){
                    results.innerHTML="player 2 wins";
                    cnt=10;
            }
            else if((b1==b5 && b5==b9) && b1!=""){
                    results.innerHTML="player 2 wins";
                    cnt=10;

            }
            else if((b3==b5 && b5==b7) && b5!=""){
                    results.innerHTML="player 2 wins";
                    cnt=10;
            }
            if(cnt==9){
                results.innerHTML="Game draw"
            }
        }
    }
}
document.onkeydown=function(e){
    if(e.key=="Enter"){
        const b1=document.getElementById("b1");
        const b2=document.getElementById("b2");
        const b3=document.getElementById("b3");
        const b4=document.getElementById("b4");
        const b5=document.getElementById("b5");
        const b6=document.getElementById("b6");
        const b7=document.getElementById("b7");
        const b8=document.getElementById("b8");
        const b9=document.getElementById("b9");
        const results=document.getElementById("results");
        b1.innerHTML="";
        b2.innerHTML="";
        b3.innerHTML="";
        b4.innerHTML="";
        b5.innerHTML="";
        b6.innerHTML="";
        b7.innerHTML="";
        b8.innerHTML="";
        b9.innerHTML="";
        cnt=0;
        results.innerHTML="";
        
    }

}



