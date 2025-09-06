import * as formatter from "./formatter.js"
import timer from "./timer.js"
import { enc } from "./console_codes.js"

export function err(msg, msgOptions) {
    console.log(formatter.errorFormat(msg, msgOptions))
}

export function error(msg, msgOptions) {
    console.log(formatter.errorFormat(msg, msgOptions))
}

export function warn(msg, msgOptions) {
    console.log(formatter.warningFormat(msg, msgOptions))
}

export function info(msg, msgOptions) {
    console.log(formatter.infoFormat(msg, msgOptions))
}

export function debug(msg, msgOptions) {
    console.log(formatter.debugFormat(msg, msgOptions))
}

export class Custom {
    constructor(name, opts) {
        this.name = name
        this.opts = opts
    }
    log(msg, msgOpts) {
        console.log(`${timer.now()} ${enc(this.name + " ", this.opts)} ${enc(msg, msgOpts)}`)
    }
}

export default {
    err,
    error,
    warn,
    info,
    debug,
    Custom
}
