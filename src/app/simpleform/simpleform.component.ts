import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { Title } from '../title.model';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  public titles: Title[] = [];
  profileForm!: FormGroup;
  isSubmitted!: boolean;
  
  constructor(private titleService: TitleService, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm(){
 this.profileForm= this.fb.group({
  title: [''],
 firstName: [''],
  lastName: ['', Validators.required],
   termsAccepted: ['']
 });
 }
  

  ngOnInit(): void {
    this.titleService.getTitles().subscribe((response) => {
      this.titles = response.filter((r) =>
        r.name != "!" //if we write this line in quotes it will not work
      ).sort((a, b) => a.name.localeCompare(b.name));
    });
  }
  submit() {
    this.isSubmitted = true; 
    if(this.profileForm.status=='VALID')
    console.log("Your form data",this.profileForm.value);
 

  }
}
