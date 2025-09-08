import * as formatter from "./formatter.js"
import timer from "./timer.js"
import { enc } from "./console_codes.js"

export function err(msg, msgOptions, RGB) {
    console.error(formatter.errorFormat(msg, msgOptions, RGB))
}

export function error(msg, msgOptions, RGB) {
    console.error(formatter.errorFormat(msg, msgOptions, RGB))
}

export function warn(msg, msgOptions, RGB) {
    console.warn(formatter.warningFormat(msg, msgOptions, RGB))
}

export function info(msg, msgOptions, RGB) {
    console.info(formatter.infoFormat(msg, msgOptions, RGB))
}

export function debug(msg, trace=true, msgOptions, RGB) {
    console.debug(formatter.debugFormat(msg, msgOptions, RGB))
    if (trace) {
        console.trace()
    }
}

export class Custom {
    constructor(name, opts, rgb) {
        this.name = name
        this.opts = opts
        this.rgb = rgb
    }
    log(msg, msgOptions, RGB) {
        console.log(`${timer.now()} ${enc(this.name + " ", this.opts, this.rgb)} ${enc(msg, msgOptions, RGB)}`)
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
