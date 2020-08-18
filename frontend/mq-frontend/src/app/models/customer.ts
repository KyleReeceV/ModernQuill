export class Customer{
    cId:number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    points:number;
    address:string;

    constructor(cId:number, firstname:string, lastname:string, points:number, address:string, email:string, password:string){
        this.email = email;
        this.password = password;
        this.cId = cId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.points = points;
        this.address = address;
    }
}
