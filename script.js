
var win=0;
var loose=0;
var rounds=0;
var random_choice=
[
    {
        'choice':'r',
        'img':'rock1.png'
    },
    {
        'choice':'p',
        'img':'paper1.png'
    },
    {
        'choice':'s',
        'img':'scissor1.png'
    }
]


async function rock()
{
    var user=document.getElementById('player')
    var computer=document.getElementById('computer')
    user.style.animationPlayState="running"
    computer.style.animationPlayState='running'
    await sleep(2100)
    user.style.animationPlayState="paused"
    computer.style.animationPlayState='paused'
    user.src="rock1.png"

    const choice1=random_choice[Math.floor(Math.random()*3)]
    computer.src=choice1.img;    
    var a=choice1.choice

    if(a==='r'){
        document.getElementById('resultdraw').style.display='block'
    }
    else if(a=='s'){
        document.getElementById('resultwin').style.display='block'
        win+=1;
        rounds+=1
    }
    else if(a=='p'){
        document.getElementById('resultloose').style.display='block'
        loose+=1;
        rounds+=1;
    }
}

async function paper()
{
    var user=document.getElementById('player')
    var computer=document.getElementById('computer')
    user.style.animationPlayState="running"
    computer.style.animationPlayState='running'
    await sleep(2100)
    user.style.animationPlayState="paused"
    computer.style.animationPlayState='paused'
    user.src="paper1.png"

    const choice1=random_choice[Math.floor(Math.random()*3)]
    computer.src=choice1.img;    
    var a=choice1.choice

    if(a==='p'){
        document.getElementById('resultdraw').style.display='block'
    }
    else if(a=='r'){
        document.getElementById('resultwin').style.display='block'
        win+=1;
        rounds+=1
    }
    else if(a=='s'){
        document.getElementById('resultloose').style.display='block'
        loose+=1;
        rounds+=1;
    }
}

async function scissor()
{
    var user=document.getElementById('player')
    var computer=document.getElementById('computer')
    user.style.animationPlayState="running"
    computer.style.animationPlayState='running'
    await sleep(2100)
    user.style.animationPlayState="paused"
    computer.style.animationPlayState='paused'
    user.src="scissor1.png"

    const choice1=random_choice[Math.floor(Math.random()*3)]
    computer.src=choice1.img;    
    var a=choice1.choice

    if(a==='s'){
        document.getElementById('resultdraw').style.display='block'
    }
    else if(a=='p'){
        document.getElementById('resultwin').style.display='block'
        win+=1;
        rounds+=1
    }
    else if(a=='r'){
        document.getElementById('resultloose').style.display='block'
        loose+=1;
        rounds+=1;
    }
}


function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 } 

function result_continue(a){
    a.parentElement.style.display="none"
    var user=document.getElementById('player')
    var computer=document.getElementById('computer')
    user.src="rock1.png"
    computer.src="rock1.png"
    if(rounds===3){
        document.getElementById('finalresult').style.display="block"
        if (win>loose){
            
            document.getElementById("finalresult").innerHTML=`<h1>You Win!!</h1>
            <button id="reset" onclick="reset()">Re-Play</button>`
        }
        else{
            document.getElementById("finalresult").innerHTML=`<h1>You loose!!</h1>
            <button id="reset" onclick="reset()">Re-Try</button>`
        }
    }
    

    
}

function reset(){
    win=0;
    loose=0;
    rounds=0;
    document.getElementById('finalresult').style.display="none"
}

