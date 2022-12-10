import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'my-app',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ChildComponent],
  template: `
  <child></child>
  {{name}}
  `,
})
export class AppComponent {
  name = 'Brecht';
}
