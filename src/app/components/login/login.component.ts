import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthRequest} from "../../models/auth-request";
import {FormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatError,
    FormsModule,
    NgIf,
    MatInput
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userService :UserService, private router: Router) {
  }

  authRequest: AuthRequest = new AuthRequest();
  isLoading: boolean = false;
  error?: string;


  connectUser() {
    this.isLoading = true;
    this.userService.login(this.authRequest).subscribe(data => {
      window.localStorage.setItem("token", data.token);
      this.router.navigate([""]);
    }, error => {
      this.error = error.type;
      this.isLoading = false;
    })
    console.log(this.authRequest);
  }
}
