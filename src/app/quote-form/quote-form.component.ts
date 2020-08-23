import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotesDetails } from '../quotes-details';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new QuotesDetails("","","",new Date())
  @Output() addQuote = new EventEmitter<QuotesDetails>();

  submitQuotes(){
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
