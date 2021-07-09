import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class RestService {}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  mostarPagina = false;
  public respuesta: any;

  constructor(
  ) {}

  ngOnInit(): void {}
}
