import { ApiService } from '../../../services/api/api.service';
import { Component } from '@angular/core';
import { PATH } from '../../../services/api/'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  inputUrl:string=""
  constructor(private apiService: ApiService){

  }

  doShortenLink(){
    this.apiService.get(PATH.SHORTEN_FULL_PATH(this.inputUrl)).subscribe(
      (res:any)=>{
        alert("Succses")

        var dataShortenInStorage:any=[]
        dataShortenInStorage = localStorage.getItem("shortenData")

        var dataShortenInStorageIsNotNull:boolean
        dataShortenInStorage!=null? dataShortenInStorageIsNotNull=true: dataShortenInStorageIsNotNull=false

        var dataShorten:any={}
        dataShorten['code'] =res['result']['code']
        dataShorten['original_link'] = res['result']['original_link']
        dataShorten['short_link'] = res['result']['short_link']

        console.log(dataShortenInStorage)
        console.log(dataShortenInStorageIsNotNull)
        var dataShortens:any=[]

        if(dataShortenInStorageIsNotNull){
          dataShortens=JSON.parse(dataShortenInStorage)
          localStorage.removeItem("shortenData")
        }

        dataShortens.push(dataShorten)
        localStorage.setItem("shortenData",JSON.stringify(dataShortens))
        console.log("done")

      },
      (error)=>{
        console.log(error)
        alert("error")
      }
    )
  }
}
