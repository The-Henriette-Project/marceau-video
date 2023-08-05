export function timeObject(timestamp){
    
    var minutes = Math.floor(timestamp / 60);
    var hours = Math.floor(minutes / 60);   
    var seconds = Math.floor(timestamp - minutes * 60);
    var floatSeconds = timestamp - minutes * 60;
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    floatSeconds = floatSeconds < 10 ? '0' + floatSeconds : floatSeconds;

    return {
        timestamp: timestamp,
        hours,
        minutes,
        seconds,
        floatSeconds, 
        
        floatLabel: `${hours}:${minutes}:${floatSeconds}`,
        label: `${hours}:${minutes}:${seconds}`,
    }
}

export function zeroTimeObject(){
    return {
        timestamp: 0,
        hours: '00',
        minutes: '00',
        seconds: '00',
        floatSeconds: '00', 
        label: "00:00:00",
        floatLabel: "00:00:00.00"
    }
}

export function vttString(data){
    return "data:text/vtt;base64," + btoa(`WEBVTT
    00:01.000 --> 00:04.000
    This is a test
    00:05.000 --> 00:09.000
    yes, a test`)
}
