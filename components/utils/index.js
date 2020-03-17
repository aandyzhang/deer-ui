export const trim = (value = "") => {
    const _value = Array.prototype.join.call(value,"");
    return _value.replace(/\s/g,"");
}


export const debounce = (func, wait) => {
    let timer = null
    return (...args)=> {
        let context = this
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            func.apply(context, args)
        },wait)
    }
}
