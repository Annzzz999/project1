class LocalStorageUtile{
    constructor(){
        this.keyName ='prod'; 
    }
    getProd(){
        const prodLocalStorage = localStorage.getItem(this.keyName);
        if (prodLocalStorage !== null){
            return JSON.parse(prodLocalStorage);

        }
        return[];

    }
    putProd(id) {

    }
}
const LocalStorageUtile =new LocalStorageUtile();
 const a= localStorage.getProd();
 console.log(a);