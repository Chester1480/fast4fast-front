module.exports.Post = async (apiUrl,data) => {
    return new Promise(async function (resolve, reject) {
        try {
            const rawResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            resolve(rawResponse.json()); // 正確完成的回傳方法
        } catch (e) {
            reject(`${apiUrl} post失敗 發生錯誤`);  // 失敗的回傳方法
        }
    });
}

module.exports.Get = async (apiUrl, params) => {
    return new Promise(async function (resolve, reject) {
        try {

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
        } catch (e) {
            reject(`${apiUrl} get失敗 發生錯誤`)
        }
    });
}