import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente5',
  templateUrl: './componente5.component.html',
  styleUrls: ['./componente5.component.css']
})
export class Componente5Component implements OnInit {

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
    this.router.navigate(['web6'])
  }


}
