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
 errorflag:boolean=false;
  reg:string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  constructor(private urlshortservice: UrlShortnerService) {
    this.urlShortForm = new FormGroup({
      'longurl': new FormControl('', [Validators.required,Validators.pattern(this.reg)]),
      'description':new FormControl('',Validators.required),
      'shorturl':new FormControl()
    }) 

  }

  ngOnInit(): void {

    this.getAllurls();
  }
  
getAllurls()
{
  this.urlshortservice.getAllUrlData().subscribe((data) => {
    this.listurl=data;
     
   })
}
  sendData() {
    if (this.urlShortForm.valid) {
     
      this.urlshortservice.generateURLShortner(this.urlShortForm.value).subscribe((data) => {

        
        console.log(data.message);
        this.getUrlData=data;       
        this.getAllurls();
        
        
      })

      
    }
  
  }

  redirecturl(shorturlid)
  {
    this.urlshortservice.getURLShort(shorturlid).subscribe((data)=>{    
     // this.getAllurls();
      //window.location.href = data.longurl;
    })
  }

  

}
