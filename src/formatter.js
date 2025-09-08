import { enc } from "./console_codes.js"
import { now } from "./timer.js"

export function errorFormat(msg, msgOptions) {
    const formatedMsg = `${now()} ${enc("ERROR ", ["bold", "red"])} ${enc(msg, msgOptions)}`
    return formatedMsg
}

export function warningFormat(msg, msgOptions) {
    const formatedMsg = `${now()} ${enc("WARNING ", ["bold", "yellow"])} ${enc(msg, msgOptions)}`
    return formatedMsg
}

export function infoFormat(msg, msgOptions) {
    const formatedMsg = `${now()} ${enc("INFO ", ["bold", "blue"])} ${enc(msg, msgOptions)}`
    return formatedMsg
}

export function debugFormat(msg, msgOptions) {
    const formatedMsg = `${now()} ${enc("DEBUG ", ["bold", "green"])} ${enc(msg, msgOptions)}`
    return formatedMsg
}
