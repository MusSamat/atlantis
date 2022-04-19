import React from "react";
class AccessWithBack extends React.Component{

    constructor() {
        super();
        this._apiBase = 'https://admin.atlantis.ink'
    }

    async getData(url) {

          const res  = await fetch(`${this._apiBase}${url}`, {
              method: "GET"
          })

        return res.json()
    }
    //
    // async getDataImage() {
    //
    //     const res  = await fetch(`https://admin.simastore.ru/api/sertificate/`, {
    //         method: "GET"
    //     })
    //
    //     return res.json()
    // }


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