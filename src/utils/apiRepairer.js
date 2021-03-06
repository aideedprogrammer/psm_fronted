import React from "react";
import {redirectLogout} from "../index";

export default {
    checkROC: (data,  prop,id,) => {
        return new Promise((resolve, reject) => {
            fetch(`${global.ipServer}laporan/checkROC/${data}/${global.global_id}?token=${global.token}&id=${id}`, {
                method: 'GET',
                headers: {
                    'x-access-token': global.token
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    // return response.json()
                })
                .then((data) => {
                    return resolve(data.status);

                })
        });
    },

    list: (data, prop) => {
        return new Promise((resolve, reject) => {

            fetch(`${global.ipServer}laporan/list/${global.global_id}`, {
                method: 'POST',
                body: data,
                headers: {
                    'x-access-token': global.token
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    // return response.json()
                })
                .then((result) => {
                    return resolve(result)
                })

        });
    },

    view: (data, prop) => {
        return new Promise((resolve, reject) => {

            fetch(`${global.ipServer}laporan/view/${global.global_id}/${data}`, {
                method: 'POST',
                headers: {
                    'x-access-token': global.token
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    // return response.json()
                })
                .then((result) => {
                    return resolve(result)
                })

        });
    },

    delete: (data, prop) => {
        return new Promise((resolve, reject) => {

            fetch(`${global.ipServer}laporan/delete/${global.global_id}/${global.global_id}?token=${global.tokenId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': global.token
                },
                body: JSON.stringify({data: data}),
            })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    // return response.json()
                })
                .then((result) => {
                    return resolve(result)
                })

        });
    },

    updateAPI: (data, id, prop) => {
        return new Promise((resolve, reject) => {
            fetch(`${global.ipServer}laporan/update/${id}/${global.global_id}?token=${global.tokenId}`, {
                method: 'POST',
                body: data,
                headers: {
                    'x-access-token': global.token
                },
            })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    // return response.json()
                })
                .then((result) => {
                    return resolve(result)
                })

        });
    },

}
