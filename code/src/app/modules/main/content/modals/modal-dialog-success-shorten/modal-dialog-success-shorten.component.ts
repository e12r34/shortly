import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-dialog-success-shorten',
  templateUrl: './modal-dialog-success-shorten.component.html',
  styleUrls: ['./modal-dialog-success-shorten.component.css']
})
export class ModalDialogSuccessShortenComponent {

  @Input() shortenLink:string ="";
  @Input() isSuccesShorten:boolean=false

  isCopied:boolean=false
  constructor(){

  }

  copyShortenLink(name:any){

    this.isCopied=true

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
      this.isCopied=false
    }, 2000);
  }
}
