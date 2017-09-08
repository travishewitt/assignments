import axios from 'axios'
const url = "https://api.vschool.io/travis/todo/"

export let loadData = () => {
    return (dispatch) => {
        axios.get(url).then((response) => {
            let todos = response.data
            console.log(todos)
            dispatch(setData(todos))
        })
        .catch((err) =>  {
            console.error(err)
        })
    }
}

export let addItem = (todo) => {
    return (dispatch) => {
        axios.post(url, todo).then((response) => {
            dispatch(loadData())
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export let deleteItem = (id) => {
    return (dispatch) => {
        axios.delete(url+id).then((response) => {
            dispatch(loadData())
        })
        .catch((err) => {
            console.error(err)
        })
    }

}

export let editItem = (id, editedItem) => {
    return (dispatch) => {
        axios.put(url+id, editedItem).then((response) => {
            dispatch(loadData())
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export let setData = (todos) => {
    return {
        type: "SET_DATA",
        todos
    }
}