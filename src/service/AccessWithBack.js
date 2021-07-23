class AccessWithBack  {
    constructor() {
        this._apiBase = 'http://176.126.167.43:8008'
    }

    async getData(url) {
        const res  = await fetch(`${this._apiBase}${url}`, {
            method: "GET"
        })
        return res.json()
    }

    async setData(url, body){
        const res = await fetch(`${this._apiBase}${url}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        })
        return res.json()
    }
}

export default AccessWithBack