import React from "react";
class AccessWithBack extends React.Component{

    constructor() {
        super();
        this._apiBase = 'http://46.101.170.185:8888'
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