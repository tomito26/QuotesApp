import { Component, OnInit, Input } from '@angular/core';
import { QuotesDetails } from '../quotes-details'

@Component({
  selector: 'app-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.css']
})
export class QuoteMessageComponent implements OnInit {
  @Input() message:QuotesDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
