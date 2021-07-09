import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tateti-square',
  templateUrl: './tateti-square.component.html',
  styleUrls: ['./tateti-square.component.css'],
})
export class TatetiSquareComponent {
  @Input() value: string = 'X' && 'Z';
}
