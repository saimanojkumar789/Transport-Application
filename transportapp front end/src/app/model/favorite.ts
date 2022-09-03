export class Favourite{
    source:string;
    username:string;
    destination:string;

    constructor(sou:string,user:string,desti:string){
        this.source = sou;
        this.username = user;
        this.destination = desti;
    }
}