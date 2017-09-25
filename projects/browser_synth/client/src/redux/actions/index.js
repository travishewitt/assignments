export let changeVolume = (volume) => {
    return {
        type: "CHANGE_VOLUME",
        volume
    }
}

export let changePitch = (pitch) => {
    return {
        type: "CHANGE_PITCH",
        pitch
    }
}


