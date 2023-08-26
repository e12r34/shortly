import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  buttonCopyText="Copy!"
  dataCurrentShortenObject:any=[]
  // inputUrl:string=""
  isSuccesShorten:boolean=false
  loading_full:boolean=true
  newShortenLink:string=""


  constructor(){
  }

  receiveLoading($event:boolean){
    this.loading_full=$event
  }

  receiveIsSuccessShorten($event:boolean){
    this.isSuccesShorten=$event
  }

  receiveNewShortenLink($event:string){
    this.newShortenLink=$event
  }

  receiveDataCurrentShortenObject($event:object){
    this.dataCurrentShortenObject=$event
  }

  //when shorten link is clicked


  //get shorten data from local storage
  ngOnInit() {
    var dataCurrentShortenString:any = localStorage.getItem("shortenData")
    dataCurrentShortenString!=null ? this.dataCurrentShortenObject=JSON.parse(dataCurrentShortenString):null
    setTimeout(() => {
      this.loading_full=false
    }, 1000);

  }



}
