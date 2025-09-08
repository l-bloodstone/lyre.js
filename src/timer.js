export function now(){
    const second = new Date().getSeconds().toString().padStart(2, "0")
    const minute = new Date().getMinutes().toString().padStart(2, "0")
    const hour = new Date().getHours().toString().padStart(2, "0");
    return `[${hour}:${minute}:${second}]`
}

export default { now }
