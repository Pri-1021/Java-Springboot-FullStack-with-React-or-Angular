import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone : true
})
export class App {
  protected title = 'product-management';
  email : string = 'ayoubyouhad@gmail.com';
}
