/**
 * 取得api路徑
 * @param { 範例:"TEST" } apicode 
 * @returns 
 */
function getApiUrl(apicode) {

    const host = window.location.origin;

    //依據目前端的domain判斷 配對API的URL
    const env = {
        "http://localhost:3000": "http://localhost:3100", //開發環境
        "http://127.0.0.1:3000": "http://127.0.0.1:3100", //開發環境0
    }

    const urlMap = new Map([
        ["LOGIN", env[host] + "/auth/AccountLogin"],
        ["SPOTIFY_SEARCH", env[host] + "/FrontStage/GetIndexData"],
        ["SPOTIFY_NEWRELEASE", env[host] + "/FrontStage/GetNewReleases"]
    ])

    return urlMap.get(apicode);
}

export function statusParase(statusCode){
    const statusMap = new Map([
        [400]
    ])
}

export async function fetchGet(key,params){
    return new Promise(async (resolve, reject) => {
        const token = localStorage.getItem("token") == null?'': localStorage.getItem("token");
        let paramsStr = new URLSearchParams(params);
        apiUrl += "?"+paramsStr;
        const rawResponse = await fetch(getApiUrl(key), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
            },
        });
        resolve(rawResponse.json());
    });
};

export async function fetchPost(key,data){
    return new Promise(async (resolve, reject) => {
        const token = localStorage.getItem("token") == null?'': localStorage.getItem("token");
        const rawResponse = await fetch(getApiUrl(key), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
            },
            body: JSON.stringify(data)
        });
        resolve(rawResponse.json()); // 正確完成的回傳方法
    });
}

export async function fetchPut(key,data){
    return new Promise(async (resolve, reject) => {
        const token = localStorage.getItem("token") == null?'': localStorage.getItem("token");
        const rawResponse = await fetch(getApiUrl(key), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
            },
            body: JSON.stringify(data)
        });
        resolve(rawResponse.json()); // 正確完成的回傳方法
    });
}

export async function fetchDelete(key,data){
    return new Promise(async (resolve, reject) => {
        const token = localStorage.getItem("token") == null?'': localStorage.getItem("token");
        const rawResponse = await fetch(getApiUrl(key), {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
            },
            body: JSON.stringify(data)
        });
        resolve(rawResponse.json()); // 正確完成的回傳方法
    });
}

