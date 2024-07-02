import { Component, OnInit } from '@angular/core';
import { Personal, Links, Project, Experience, Certificate } from "./MyInfo";
import data from '../assets/data/Content.json';
import work from '../assets/data/Experience.json';
import build from '../assets/data/Projects.json';

interface Card {
  type: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  mydata: Personal = data.Personal;
  link: Links = data.Links;
  project: Project[] = build.projects;
  experience: Experience[] = work.Experience;
  certificate: Certificate[] = data.Certificate;
  darkMode = false;

  filterText = '';

  cards: Card[] = [
    { type: 'about', title: 'About Us' },
    { type: 'work', title: 'Work Experience' },
    { type: 'projects', title: 'Projects' },
    { type: 'contact', title: 'Contact Us' }
  ];

  filteredData: Card[] = [];

  ngOnInit() {
    this.filteredData = this.cards;
  }

  filterCards() {
    if (!this.filterText) {
      this.filteredData = this.cards;
    } else {
      const filter = this.filterText.toLowerCase();
      this.filteredData = this.cards.filter(card => card.title.toLowerCase().includes(filter));
    }
  }

  isCardVisible(type: string): boolean {
    return this.filteredData.some(card => card.type === type);
  }
}
