import axios from 'axios';
const url = "http://localhost:8080/bounties/";

export let loadData = () => {
    return (dispatch) => {
        axios.get(url).then((response) => {
            let bounties = response.data.data
            dispatch(setData(bounties))
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export let addItem = (bounty) => 
    return (dispatch) => {
        axios.post(url, bounty).then((response) => {
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
            console.error
        })
    }
}

export let editItem = (id, editedItem) => {
    return (dispatch) => {
        axios.put(url+id, editedItem).then((response) => {
            dispatch(loadData())
        })
        .catch((err) => {
            console.error
        })
    }
}

export let setData = (bounties) => {
    return {
        type: "SET_DATA",
        bounties
    }
}