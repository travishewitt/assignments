export function loadData(data) {
    return {
        type: "LOAD_DATA",
        data: [{
            title: "hi",
            description: "bye"
        },
        {
            title: "hey there", 
            description: "bae there"
        },
        {
            title: "oh boy", 
            description: "oh girl"
        }]
    }
} 

export function deleteItem(index) {
    return {
        type: "DELETE_ITEM",
        index: index
    }
}