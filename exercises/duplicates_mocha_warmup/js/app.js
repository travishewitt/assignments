let duplicates = function (string) {
    //greedy approach
    //take what we can get as we go
    //this is called a graph
    let graph = {};
    let output = [];
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (!graph[arr[i]]) {
            graph[arr[i]] = arr[i];
        } else {
            if (!output.includes(arr[i])) {
                output.push(arr[i]);
            }
        }
    }
    return output;
}

module.exports = duplicates;
