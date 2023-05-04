/**
 * 取得api路徑
 * @param { 範例:"TEST" } apicode 
 * @returns 
 */
export function getApiUrl (apicode) {

    const host = window.location.origin;

    //依據目前端的domain判斷 配對API的URL
    const env = {
        "http://localhost:5173":"http://localhost:44326", //開發環境
        "http://localhost:3010":"http://localhost:3011", //正式環境
    }

    const urlMap = new Map([
        ["TEST",  env[host]+ "/api/test"],
        ["TEST2", env[host]+ "/api/Test/GetMacAddress"],
        ["LOGIN", env[host]+ "/api/login"]
    ])

    return urlMap.get(apicode);
}

export async function fetchGet(apiUrl,params){
    return new Promise(async(resolve,reject) => {
        let paramsStr = "";
        Object.keys(params).forEach(key => {
            paramsStr += key + "=" + params[key] + "&";
        });
        apiUrl += paramsStr;
        const rawResponse = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        resolve(rawResponse.json());
    });
};

export async function fetchPost(apiUrl,data){
    return new Promise(async (resolve,reject) => {
        const rawResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        resolve(rawResponse.json()); // 正確完成的回傳方法
    });
}

export async function axiosPost(apiUrl,data){
    return new Promise(async (resolve,reject) => {
        const rawResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        resolve(rawResponse.json()); // 正確完成的回傳方法
    });
}
