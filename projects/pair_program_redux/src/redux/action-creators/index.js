export let addMeme = (meme) => {
    return {
        type: "ADD_MEME",
        meme
    }
}

export let editMeme = (editedMeme, index) => {
    return {
        type: "EDIT_MEME",
        editedMeme,
        index
    }
}

export let deleteMeme = (index) => {
    return {
        type: "DELETE_MEME",
        index
    }
}