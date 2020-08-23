export class QuotesDetails {
    showDetails:boolean;
    constructor(public author:string, public entryQuote:string,public submittedName:string, public date:Date){
        this.showDetails = false;
    }
}
