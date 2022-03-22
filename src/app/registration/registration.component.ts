import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
 constructor() { }
  form = new FormGroup({
    soname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
    
  }
}
