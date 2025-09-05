export function now(){
    const time = Date.now() / 1000
    const second = parseInt(time % 60).toString().padStart(2, "0")
    const minute = parseInt((time % (60 * 60)) / 60).toString().padStart(2, "0")
    const hour = parseInt(time / (60 * 60 ) % 10).toString().padStart(2, "0");
    return `[${hour}:${minute}:${second}]`
}

export default { now }
