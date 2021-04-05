import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  @ViewChild("myInput") private _inputElement: ElementRef;
  @Input() money: string  = '';
  exchange: any;
 

  
  ansvalue: any;
  sel: any;
  value1: string;

  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
    
    this.ansvalue = 'Push the button for convert';
    
    
    
   }

  ngOnInit() {
    this.loadPost();
    
  }
  loadPost(){
    this.exchange = '';
    this.httpClient.get('http://api.exchangeratesapi.io/v1/latest?access_key=a61857aefe0a645fa024950e9bbb0c87')
    .subscribe(result =>  this.exchange = result);
  }
  Convert(){
    
    this.sel = document.getElementById("a1");
    this.ansvalue = this.sel.options[this.sel.selectedIndex].value1.value;
    this.ansvalue = `Unit : ${parseFloat(this.ansvalue) * parseFloat(this.money)} (EUR)`;
  }

  ngAfterViewInit() {
    this._inputElement.nativeElement.focus();
  }
}

