import * as formatter from "./formatter.js"
import timer from "./timer.js"
import { enc } from "./console_codes.js"

export function err(msg, msgOptions) {
    console.error(formatter.errorFormat(msg, msgOptions))
}

export function error(msg, msgOptions) {
    console.error(formatter.errorFormat(msg, msgOptions))
}

export function warn(msg, msgOptions) {
    console.warn(formatter.warningFormat(msg, msgOptions))
}

export function info(msg, msgOptions) {
    console.info(formatter.infoFormat(msg, msgOptions))
}

export function debug(msg, trace=true, msgOptions) {
    console.debug(formatter.debugFormat(msg, msgOptions))
    if (trace) {
        console.trace()
    }
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
