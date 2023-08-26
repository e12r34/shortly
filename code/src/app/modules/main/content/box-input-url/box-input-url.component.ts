import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PATH } from 'src/app/services/api';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-box-input-url',
  templateUrl: './box-input-url.component.html',
  styleUrls: ['./box-input-url.component.css']
})
export class BoxInputUrlComponent {

  inputUrl:string=""
  @Output() emitLoading = new EventEmitter<boolean>()
  loading_full:boolean|undefined

  @Input() dataCurrentShortenObject:any=[]
  @Output() emitDataCurrentShortenObject = new EventEmitter<object>()

  @Output() emitIsSuccesShorten = new EventEmitter<boolean>()
  isSuccesShorten:boolean=false

  @Output() emitNewShortenLink = new EventEmitter<string>()
  newShortenLink:string=""
  constructor(private apiService: ApiService){

  }


  doShortenLink(){
    this.loading_full=true
    this.emitLoading.emit(this.loading_full)


    setTimeout(() => {
      this.loading_full=false
      this.emitLoading.emit(this.loading_full)
    }, 5000);

    this.apiService.get(PATH.SHORTEN_FULL_PATH(this.inputUrl)).subscribe(
      (res:any)=>{
        this.loading_full=false
        this.emitLoading.emit(this.loading_full)

        this.isSuccesShorten=true
        this.emitIsSuccesShorten.emit(this.isSuccesShorten)

        this.newShortenLink=res['result']['short_link']
        this.emitNewShortenLink.emit(this.newShortenLink)

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
        this.emitDataCurrentShortenObject.emit(this.dataCurrentShortenObject)
        this.inputUrl=""

      },
      (error)=>{
        this.loading_full=false
        this.emitLoading.emit(this.loading_full)
      }
    )
  }
}
