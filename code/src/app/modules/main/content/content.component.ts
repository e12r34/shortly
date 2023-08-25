import { ApiService } from '../../../services/api/api.service';
import { Component, OnInit, Output } from '@angular/core';
import { PATH } from '../../../services/api/'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  buttonCopyText="Copy!"
  dataCurrentShortenObject:any=[]
  inputUrl:string=""
  isSuccesShorten:boolean=false
  loading_full:boolean=true
  newShortenLink:string=""


  constructor(private apiService: ApiService){

  }

  copyShortenLink(data:any){

    data.isCopied=true

    const name=data.short_link
    var copyElement = document.createElement("textarea");
    copyElement.style.position = 'fixed';
    copyElement.style.opacity = '0';
    copyElement.textContent = decodeURI(name);
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyElement);
    copyElement.select();
    document.execCommand('copy');
    body.removeChild(copyElement);

    setTimeout(() => {
      data.isCopied=false
    }, 2000);
  }

  //when shorten link is clicked
  doShortenLink(){
    this.loading_full=true
    setTimeout(() => {
      this.loading_full=false
    }, 5000);

    this.apiService.get(PATH.SHORTEN_FULL_PATH(this.inputUrl)).subscribe(
      (res:any)=>{
        this.loading_full=false
        this.isSuccesShorten=true
        this.newShortenLink=res['result']['short_link']
        var dataShortenInStorageIsNotNull:boolean
        this.dataCurrentShortenObject.length>0 ? dataShortenInStorageIsNotNull=true: dataShortenInStorageIsNotNull=false

        var dataShorten = {
          code :res['result']['code'],
          original_link : res['result']['original_link'],
          short_link : res['result']['short_link']
        }
        var dataShortens:any=[]

        if(dataShortenInStorageIsNotNull){
          dataShortens=[...this.dataCurrentShortenObject]
          localStorage.removeItem("shortenData")
        }

        dataShortens.push(dataShorten)
        localStorage.setItem("shortenData",JSON.stringify(dataShortens))

        this.dataCurrentShortenObject=dataShortens
        this.inputUrl=""

      },
      (error)=>{
      }
    )
  }

  //get shorten data from local storage
  ngOnInit() {
    var dataCurrentShortenString:any = localStorage.getItem("shortenData")
    dataCurrentShortenString!=null ? this.dataCurrentShortenObject=JSON.parse(dataCurrentShortenString):null
    setTimeout(() => {
      this.loading_full=false
    }, 1000);
    this.regexTesting()
  }

  regexTesting(){
    const urlRegexPattern = /^(https?:\/\/(www\.)?)?([a-zA-Z]{2,}\.)+[a-zA-Z0-9]{2,}(\/[a-zA-Z0-9]+)*$/
    // console.log(urlRegexPattern.test("google.com"))
    // console.log(urlRegexPattern.test("localhost"))
    // console.log(urlRegexPattern.test("http://subkhan.com"))
  }


}
