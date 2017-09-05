const initialState = {
    memes: []
}

let mainReducer = (state = initialState, action) => {
    let newMemes = [...state.memes]
    switch(action.type) {
        case "ADD_MEME": 
            newMemes = [...newMemes, action.meme]
            return {memes: newMemes}
        case "EDIT_MEME": 
            newMemes[action.index] = action.editedMeme
            return {memes: newMemes}
        case "DELETE_MEME":
            newMemes.splice(action.index, 1)
            return {memes: newMemes}
        default: 
            return {
                ...state
            }
    }
}

export default mainReducer