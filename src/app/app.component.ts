import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'monaco-angular-test';

  constructor(
    public router: Router
  ){}

  ngOnInit(){
    
  }

  showEditor(){
    this.router.navigate(['test']);
  }
}
