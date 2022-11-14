import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente6',
  templateUrl: './componente6.component.html',
  styleUrls: ['./componente6.component.css']
})
export class Componente6Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegacion(){
    this.router.navigate(['web1'])
  }

  navegacion2(){
    this.router.navigate(['web2'])
  }

  navegacion3(){
    this.router.navigate(['web3'])
  }

  navegacion4(){
    this.router.navigate(['web4'])
  }

  navegacion5(){
    this.router.navigate(['web5'])
  }


}
