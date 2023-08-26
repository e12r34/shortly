import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent {
  @Input() dataCurrentShortenObject:any=[]

  constructor(){}

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
}
