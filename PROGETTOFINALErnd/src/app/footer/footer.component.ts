import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="navbar navbar-expand navbar-dark bg-dark altezza">
    <div class="container-fluid">
    <ul>
     <li><a href="https://www.calcolatriceonline.it/">calcolatrice</a></li>
     <li> <a href="https://www.bancaditalia.it/compiti/operazioni-cambi/archivio-cambi/index.html"> Tassi di cambio </a></li>
     <li><a href="https://www.google.it/">google</a></li>

    </ul>


    </div>
  </footer> `,
  styles: [`
  .altezza{
    height: 5vh;
    width: 100vw;
    height: 10vh;
  }
  ul li {
    display: inline;
    margin: 10px;
  }


  `],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
