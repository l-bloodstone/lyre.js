import { enc } from "./console_codes.js"
import { now } from "./timer.js"

export function errorFormat(msg, msgOptions, RGB) {
    const formatedMsg = `${now()} ${enc("ERROR ", ["bold", "red"])} ${enc(msg, msgOptions, RGB)}`
    return formatedMsg
}

export function warningFormat(msg, msgOptions, RGB) {
    const formatedMsg = `${now()} ${enc("WARNING ", ["bold", "yellow"])} ${enc(msg, msgOptions, RGB)}`
    return formatedMsg
}

export function infoFormat(msg, msgOptions, RGB) {
    const formatedMsg = `${now()} ${enc("INFO ", ["bold", "blue"])} ${enc(msg, msgOptions, RGB)}`
    return formatedMsg
}

export function debugFormat(msg, msgOptions, RGB) {
    const formatedMsg = `${now()} ${enc("DEBUG ", ["bold", "green"])} ${enc(msg, msgOptions, RGB)}`
    return formatedMsg
}
