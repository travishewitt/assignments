function almostIncreasingSequencce(seq) {
    var bad = 0
    var reversed = seq.reverse();
    for (var i = 0; i < seq.length; i++) {
        if (seq[i] <= seq[i - 1]) {
            bad++
        }
        if (bad > 1) return false;
        if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) return false
    }
    return true;
}
}
