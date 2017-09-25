import axios from 'axios';
const url = "http://localhost:8080/expenses/";

export let loadExpenses = () => {
    return (dispatch) => {
        axios.get(url).then((response) => {
            let expenses = response.data.data
            dispatch(setExpenses(expenses))
        })
            .catch((err) => {
                console.error(err)
            })
    }
}

export let addExpense = (expense) => {
    return (dispatch) => {
        axios.post(url, expense).then((response) => {
            dispatch(loadExpenses())
        })
            .catch((err) => {
                console.error(err)
            })
    }
}

export let deleteExpense = (id) => {
    return (dispatch) => {
        axios.delete(url + id).then((response) => {
            dispatch(loadExpenses())
        })
            .catch((err) => {
                console.error(err)
            })
    }
}

export let editExpense = (id, editedExpense) => {
    return (dispatch) => {
        axios.put(url + id, editedExpense).then((response) => {
            dispatch(loadExpenses())
        })
            .catch((err) => {
                console.error(err)
            })
    }
}
export let changeFilter = (filter) => {
    return {
        type: "CHANGE_FILTER",
        filter
    }
}
export let setExpenses = (expenses) => {
    return {
        type: "SET_EXPENSES",
        expenses
    }
}