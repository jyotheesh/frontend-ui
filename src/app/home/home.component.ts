import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class HomeComponent implements OnInit {

  eligibityForm: FormGroup;
  userid;
  ages;
  msgs;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {
    this.eligibityForm = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
      propertyDetails: new FormControl('', [Validators.required]),
      propertyValue: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      grossIncome: new FormControl('', [Validators.required, Validators.min(0)]),
      otherEMI: new FormControl('', [Validators.required, Validators.min(0)]),
      eligibleAmount: new FormControl('', [Validators.required, Validators.min(0)]),
      loanAmount: new FormControl('', [Validators.required, Validators.min(0)]),
      tenure: new FormControl('', [Validators.required, Validators.min(0)]),
      interest: new FormControl('', [Validators.required, Validators.min(0)]),
    });

    if (localStorage.getItem("UserDetails") != null) {
      let localUser = localStorage.getItem("UserDetails");
      this.userid = JSON.parse(localUser).user_id;
      console.log(this.userid);
    }
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.eligibityForm.controls[controlName].hasError(errorName);
  }

  onChanges(event: any) {
    let age = event.target.value;
    if (age >= 18 && age <= 30) {
      this.ages = "25";
    }
    else if (age >= 31 && age <= 45) {
      this.ages = "15";
    }
    else if (age >= 46 && age <= 60) {
      this.ages = "10";
    }
    else if (age >= 61 && age <= 200) {
      this.ages = "5";
    }
  };

  apply(value) {
    // console.log(value);
    // this.eligibityForm.reset();
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      accept: () => {
        // this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
        console.log(value);
        console.log("Yes");
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Saved successfully ' });
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        console.log("No");
        // this.eligibityForm.reset();
      }

    });

  }
}
