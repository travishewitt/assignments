function trouble (hour, isTalking) {
    if (isTalking && hour < 7 || hour > 20) {
        return true;
    } else {
        return false;
    }
}

console.log(trouble(10, true));