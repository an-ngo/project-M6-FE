import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../service/home/home.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  public login(signinForm: any): void{
    this.homeService.login(signinForm.value).subscribe((data)=>{
      this.user = data;
      console.log(data);
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("avatar", data.avatar);
      window.localStorage.setItem("name", data.name);
    });
  }
}
