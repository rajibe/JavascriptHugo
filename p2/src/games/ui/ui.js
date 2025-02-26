export const UI = {
    elements: {
        statusBar: null,
        word: null,
        timeBar: null,
        game: null
    },
    init: (element) => {
        throw new TypeError('You must change this!');
    }

}

export const UIBuilder = {
    init: () => ({...UI})    
}