import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

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
    this.router.navigate(['web5'])
  }

  navegacion5(){
    this.router.navigate(['web6'])
  }

}
