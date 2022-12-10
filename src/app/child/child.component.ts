import { Component, inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'child',
  standalone: true,
  template: ``,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private app = inject(AppComponent);
  ngOnInit(): void {
    this.app.name = 'Jane';
  }
}