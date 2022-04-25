import Info from "./info";

export class JSONRPCException {
    constructor(code) {
        this.code = code;
    }
}

class Api {
    constructor() {
        this.wrongCreditionalsCode = 1000;
    }

    async login(phone, password) {
        let result = await this.call({
            login: {
                phone: phone, password: password
            }
        });
        result = result[0]
        if (result.error != null) throw new JSONRPCException(result.error.code)

        result = result.result;

        return result;
    }

    async order(token, products_view, address) {
        const products = [];
        for (const productsKey in products_view) {
            products[productsKey] = {
                id: products_view[productsKey].id,
                count: products_view[productsKey].count
            }
        }

        let result = await this.call({
            verify: {
                token: token
            },
            add_order: {
                products: products,
                address: address
            }
        });
        for (let resultElement of result) {
            if (resultElement.error !== undefined) {
                throw new JSONRPCException(resultElement.error)
            }
        }
    }

    async call(methods) {
        let body = []

        let i = 0
        for (const methodEntry of Object.entries(methods)) {
            body.push({
                "jsonrpc": "2.0", "id": i, "method": methodEntry[0], "params": methodEntry[1]
            });
            i++;
        }

        body = JSON.stringify(body)
        console.log(body)

        let response = await fetch(`https://functions.yandexcloud.net/${Info.function_id}`, {
            method: "POST", headers: {
                'Content-Type': 'application/json',
            }, body: body
        });

        if (response.ok) {
            return await response.json()
        } else {
            console.error(`Can't call functions due to network error`)
        }
    }
}

export default Api