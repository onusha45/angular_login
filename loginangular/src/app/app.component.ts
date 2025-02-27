import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { PutPostapiComponent } from './Components/put-postapi/put-postapi.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PutPostapiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loginangular';
}
