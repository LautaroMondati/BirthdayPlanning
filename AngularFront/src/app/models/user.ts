export class User {
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    invitationSent: boolean;

    constructor (id: number, firstName: string, lastName: string, email: string, invitationSent: boolean){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.invitationSent = invitationSent;
    }
    
}
