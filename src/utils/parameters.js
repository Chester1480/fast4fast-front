export function getDataByType (type = 'input') {
    const inputs = document.querySelectorAll(type);
    let parameters = {};
    inputs.forEach(info =>{
        parameters[info.id] = info.value
    })
    return parameters;
}