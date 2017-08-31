export function up(incrementAmt) {
    return {
        type: "UP",
        incrementAmt: incrementAmt
    }
}

/* export function down(incrementAmt) {
    return {
        type: "DOWN",
        incrementAmt: incrementAmt
    }
}
*/

export function double(incrementAmt) {
    return {
        type: "DOUBLE",
        incrementAmt: incrementAmt
    }
}

export function clear() {
    return {
        type: "CLEAR"
    }
}

