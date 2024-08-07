import { Component, OnInit } from '@angular/core';
import { Personal, Links, Project, Experience, Certificate } from "../MyInfo";

import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Card {
  type: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'portfolio';
  mydata!: Personal;
  link!: Links;
  project!: Project[];
  experience!: Experience[];
  certificate!: Certificate[];
  darkMode = false;
  constructor(private http: HttpClient) { }
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
    this.getProject();
    this.getContent();  
    this.getExperience();
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

  getProject(){
    let url = '../../assets/data/Projects.json';
    this.http.get(url).subscribe((data:any) => {
      // console.log(data.projects);
      this.project = data.projects;
    });

  }
  getContent(){
    let url = '../../assets/data/Content.json';
    this.http.get(url).subscribe((data:any) => {
      // console.log(data.projects);
      this.mydata = data.Personal;
      this.link = data.Links;
      this.certificate = data.Certificate;
    });


  }
  getExperience(){
    let url = '../../assets/data/Experience.json';
    this.http.get(url).subscribe((data:any) => {
      // console.log(data.projects);
      this.experience = data.Experience;
    });
  }
}
