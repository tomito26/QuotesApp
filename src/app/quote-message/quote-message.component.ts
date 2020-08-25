import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuotesDetails } from '../quotes-details'

@Component({
  selector: 'app-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.css']
})
export class QuoteMessageComponent implements OnInit {
  @Input() message:QuotesDetails;
  @ Output() removeQuote = new EventEmitter<boolean>()

  quoteDelete(deleteItem:boolean){
    this.removeQuote.emit(deleteItem)
  }
  numberOfLikes:number =  0;
  numberOfDislikes:number = 0;

  
  upVote(){
    this.numberOfLikes++
  }
  downVote(){
    this.numberOfDislikes++
  }
  constructor() { }

  ngOnInit(): void {
  }

}
