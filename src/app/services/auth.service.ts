import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    tokenStatus: boolean = false;

    constructor() { }

    setTokenValue(token){
        this.tokenStatus = token;
    }

    getTokenValue(){
        return this.tokenStatus;
    }
}