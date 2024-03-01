import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,FormBuilder , Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent   {

// constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.addUserForm = this.formBuilder.group({
//       username: ['', [Validators.required, Validators.minLength(5), this.noNumbersOrSpecialCharacters]],
//       firstName: ['', [Validators.required, Validators.minLength(5), this.noNumbersOrSpecialCharacters]],
//       lastName: ['', [Validators.required, Validators.minLength(5), this.noNumbersOrSpecialCharacters]],
//       password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
//       confirmPassword: ['', Validators.required],
//       phoneno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
//     }, { validator: this.passwordMatchValidator });
//   }

//   passwordMatchValidator(formGroup: FormGroup) {
//     const password = formGroup.get('password').value;
//     const confirmPassword = formGroup.get('confirmPassword').value;

//     if (password !== confirmPassword) {
//       formGroup.get('confirmPassword').setErrors({ passwordMismatch: true });
//     } else {
//       formGroup.get('confirmPassword').setErrors(null);
//     }
//   }

//   // Custom validator to check for numbers and special characters
//   noNumbersOrSpecialCharacters(control) {
//     if (/[0-9~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(control.value)) {
//       return { noNumbersOrSpecialCharacters: true };
//     }
//     return null;
//   }



  users: any[] = []; // Assuming you have an array to store user data
  showForm: boolean = false;
  editMode: boolean = false;
  editedUserIndex: number = -1;
  editedUserData: any = {};

  saveUser(userData: any) {
    if (this.editMode) {
      this.users[this.editedUserIndex] = { ...userData };
      this.editMode = false;
      this.editedUserIndex = -1;
    } else {
      this.users.push(userData);
    }
    this.showForm = false;
    this.clearFormData();
  }

  editUser(user: any) {
    this.showForm = true;
    this.editMode = true;
    this.editedUserData = { ...user };
    this.editedUserIndex = this.users.indexOf(user);
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

   clearFormData() {
    this.editedUserData = {};
  }


}
