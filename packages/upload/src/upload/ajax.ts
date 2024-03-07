class AjaxRequest {
    url: string;
    method: string;
    data?: any;

    constructor(url: string, method: string = 'GET', data?: any) {
        this.url = url;
        this.method = method;
        this.data = data;
    }

    send(): Promise<any> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(this.method, this.url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(`AJAX request failed with status ${xhr.status}`));
                    }
                }
            };
            if (this.method === 'POST' || this.method === 'PUT') {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(this.data));
            } else {
                xhr.send();
            }
        });
    }
}

export { AjaxRequest };