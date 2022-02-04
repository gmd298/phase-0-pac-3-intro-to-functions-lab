function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}


console.log(string);
console.log(string.toUpperCase());

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!"
    }
    if (string === string) {
        return "I would love to!"
    }
}




//function sayHiToHeadphonedRoommate() {
//    if (string === string.toLowerCase()) {
//        return "I can't hear you."
//    } else if (string === string.toUpperCase()) {
//        return "YES INDEED"
//    } else if (string === dinner) {
//        return "I would love to!"
//    }    
//}