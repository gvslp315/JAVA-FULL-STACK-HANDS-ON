export default class Library{
    id;
    name;
    lang;
    price;
    constructor(){
        this.id=0;
        this.name='';
        this.lang='';
        this.price=0
    }
    setId(id){
        this.id=id
    }
    setName(name){
        this.name=name

    }
    setLang(lang){
        this.lang=lang
    }
    setPrice(price){
        this.price=price
    }
}