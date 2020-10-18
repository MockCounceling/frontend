import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { CollegeService } from "../college.service";
@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent {
  college:any;
  checkoutForm:any;
  
  constructor(private collegeService: CollegeService,    private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      rank: "",
      gender: "",
      category:""
  });}

  ngOnInit() {
    
  }
  onSubmit(customerData:any) {
    this.college = this.collegeService.getAdvanceColleges(customerData.gender,customerData.rank,customerData.category);
    this.checkoutForm.reset();
  }
}
