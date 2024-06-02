import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  tabChanged(event: MatTabChangeEvent) {
    const selectedIndex = event.index;

    // Based on the selected index, you can perform actions such as changing the section
    const sectionId = ["home", "about", "work", "projects", "contact"][selectedIndex];
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  

}
