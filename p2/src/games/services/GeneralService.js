export class Generalservice {
    constructor(url, onSuccess, onError) {
        this.url = url;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }

    async fetchData(route) {
        await fetch(this.url+"/"+route).then(async (data)=>{
            const payload = await data.json();
            this.onSuccess(payload);
        },this.onError);
    }  
}