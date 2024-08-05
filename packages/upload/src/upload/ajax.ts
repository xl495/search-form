class AjaxRequest {
    url: string = '';
    method: string = 'POST';
    headers?: Record<string, string> = {};

    constructor({
        baseURL,
        method = 'post',
        headers = {}
    }: {
        baseURL: string,
        method?: string,
        headers?: {}
    }
    ) {
        this.url = baseURL;
        this.method = method;
        this.headers = headers;
    }

    send(
        file: File,
        config?: {
            onUploadProgress?: (progressEvent: any) => void,
            onUploadError?: (error: any) => void
        }
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(this.method, this.url, true);

            if (config && config.onUploadProgress) {
                xhr.upload.onprogress = config.onUploadProgress;
            }

            if (config && config.onUploadError) {
                xhr.upload.onerror = config.onUploadError;
            }

            // headers
            for (const key in this.headers) {
                if (this.headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, this.headers[key]);
                }
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error(`AJAX request failed with status ${xhr.status}`));
                    }
                }
            };
            const formData = new FormData();
            formData.append('file', file);
            xhr.setRequestHeader('content-type', 'multipart/form-data');
            xhr.send(formData);
        });
    }
}

export { AjaxRequest };