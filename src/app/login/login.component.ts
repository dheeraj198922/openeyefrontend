import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterLink, RouterOutlet ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl('') 
    });
  }

  ngOnInit(): void {
    // Initialize the form
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('') 
    });
  }



  onSubmit() {
    if (this.loginForm.controls['username'].value && this.loginForm.controls['password'].value){
      // Handle login logic here
      console.log('Username:', this.loginForm.controls['username'].value);
      console.log('Password:', this.loginForm.controls['password'].value);
      // For example, you might want to send this data to a backend API
    }
  }
}
