import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponentComponent } from './Components/login-component/login-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loginangular';
}
