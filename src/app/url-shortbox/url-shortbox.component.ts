import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UrlShortnerService } from '../url-shortner.service';

@Component({
  selector: 'app-url-shortbox',
  templateUrl: './url-shortbox.component.html',
  styleUrls: ['./url-shortbox.component.css']
})
export class UrlShortboxComponent implements OnInit {
  urlShortForm;
  getUrlData;
  listurl;

  errorflag: boolean = false;
  //reg:string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'; 
  reg: string = '(\b(https?|ftp|file)://)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]';
  constructor(private urlshortservice: UrlShortnerService) {
    this.urlShortForm = new FormGroup({
      'longurl': new FormControl('', [Validators.required, Validators.pattern(this.reg)]),
      'description': new FormControl('', Validators.required),
      'shorturl': new FormControl()
    })

  }

  ngOnInit(): void {

    this.getAllurls();
  }

  getAllurls() {
    this.urlshortservice.getAllUrlData().subscribe((data) => {
      this.listurl = data;

    })
  }
  sendData() {
    if (this.urlShortForm.valid) {

      this.urlshortservice.generateURLShortner(this.urlShortForm.value).subscribe((data) => {


        console.log(data.message);
        this.getUrlData = data;
        this.getAllurls();


      })


    }

  }
  
  copyMessage(val: any) {

    let new_val = 'https://url-shortner-nodejs.herokuapp.com/' + val
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = new_val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }

  DeleteData(shorturlid) {
    this.urlshortservice.deleteURL(shorturlid).subscribe((data) => {
      this.getAllurls();
    })
  }
}


