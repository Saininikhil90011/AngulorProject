import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello1Component } from './components/hello1/hello1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , Hello1Component],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulorpro';
}
