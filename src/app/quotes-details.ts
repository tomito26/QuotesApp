export class QuotesDetails {
    showDetails:boolean;
    constructor(public author:string, public entryQuote:string,public submittedName:string, public date:Date ,public upVote:number,public downVote:number){
        this.showDetails = false;
    }
}
