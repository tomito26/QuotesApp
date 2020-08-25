import { Component } from '@angular/core';
import { QuotesDetails } from "./quotes-details"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteEntry = [
    new QuotesDetails('Thomas Edison',"I have not failed. I've just found 10,000 ways that won't work.",'John Mwangi',new Date(2020,2,26)),
    new QuotesDetails('Albert Einstein','Anyone who has never made a mistake has never done anything new.','James Kimani',new Date(2020,8,30)),
    new QuotesDetails('Nelson Mandela', 'I never lose I either win or learn.','Mabel Karani',new Date(2019,11,23)),
    new QuotesDetails('Bill Gates',`Success is lousy teacher.It seduces smart people into thinking they can't lose.`,'Cardine Ambundo',new Date(2020,3,20)),
    new QuotesDetails('Steve Jobs', 'Have the courage to follow your heart and intution.They somehow know what you truly want to become.','Tamminga Budds',new Date(2020,6,15)),
    new QuotesDetails('Mother Teresa','Not all of us can do  reat things.But we can  small things, with great love.','Ian Olindi',new Date(2018,4,1)),
    new QuotesDetails('Charles Schulz','Just remember once you are over  the hill you begin to pick up speed','Amos Arisi',new Date(2019,4,3))
  ];

  toggleDetail(index){
    this.quoteEntry[index].showDetails = !this.quoteEntry[index].showDetails
  };
  removeItem(removeQuote,index){
    if(removeQuote){
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quoteEntry[index].author}?`)

      if(toDelete){
        this.quoteEntry.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteObject = new QuotesDetails(quote.author,quote.entryQuote,quote.submittedName,quote.date)
    this.quoteEntry.push(quoteObject)
   
  }



}
