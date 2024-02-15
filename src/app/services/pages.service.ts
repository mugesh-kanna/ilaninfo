import { Injectable } from "@angular/core";

@Injectable()
export class PagesService {
    serviceName: string;
    dropValues: any[]=[];
    type: number;


    constructor() { }

    setContactFormValue(s, d, t){
        this.serviceName = s;
        this.dropValues = d;
        this.type = t;
    }

    getContactFormValue(){
        return { service: this.serviceName, dropValues: this.dropValues, type: this.type }
    }
}