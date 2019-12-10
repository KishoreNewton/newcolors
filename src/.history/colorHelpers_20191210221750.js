import chroma from "chroma-js"

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function generatePalette(starterPalette){
    let newPalettee = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    }
    for(let level of levels){
        newPalettee.colors[level] = []
    }
    for(let color of starterPalette.colors){
        let scale = getScale(color.color, 10).reverse()
    }
}

function getRange(hexColor){
    const end = "#FFF"
    return [ 
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ]
}

function getScale(hexColor, numberOfColors){
    chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors)
}
