import { Component } from '@angular/core';

@Component ({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Acme PM';

  onLogoWasClicked(message: string): void {
    this.title = 'ACMe Pm! ' + message;
  }
}
