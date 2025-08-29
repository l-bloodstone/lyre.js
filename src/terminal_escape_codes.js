const codes = Object.freeze({
    reset: "\x1b[0m",
    bold: "1",
    dim: "2",
    italic: "3",
    underline: "4",
    invert: "7",
    black: "30",
    red: "31",
    green: "32",
    brown: "33",
    blue: "34",
    magenta: "35",
    cyan: "36",
    white: "37",
    blackBg: "40",
    redBg: "41",
    greenBg: "42",
    brownBg: "43",
    blueBg: "44",
    magentaBg: "45",
    cyanBg: "46",
    whiteBg: "47",
    prefix : "\x1b[",
    suffix : "m"
})

function encode(msg, options) {
    let codeStr = ""
    for (let i = 0; i < options.length; i++) {
        if (i === options.length - 1) {
            codeStr += `${codes[options[i]]}`
        } else {
            codeStr += `${codes[options[i]]};`
        }
    }
    return `${codes.prefix}${codeStr}${codes.suffix}${msg}${codes.reset}`
}

export default { encode }
