var sec=0
var min=0
var hr=0
var Interval

function start(){
    watch()
   Interval= setInterval(watch,1000)
}

function stop(){
    clearInterval(Interval)
}

function reset(){
    clearInterval(Interval)
    sec=0
    min=0
    document.getElementById('watch').innerText="00:00:00"
}

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function watch(){
    sec++
        if(sec==60){
            min++
            sec=0
            if(min==60){
                min=0
                hr++
            }
        }   
    document.getElementById('watch').innerHTML=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}