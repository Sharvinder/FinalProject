import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  proName: string;
  clientName:string;
  location: string;
  projectData: Object;
  citiesList: any[];
  countryList:any[];
  technologiesList:any[];
  teamsList: any[];
  duration:any[];
  startDate:string[];
  endDate:string[];
  priorityList:any[];

  abc() {
    this.projectData = { 'projectName': this.proName,  'Location': this.location, 
    'Duration':this.duration,'ClientName':this.clientName,'StartDate':this.startDate,
    'EndDate':this.endDate};
    alert("Changes Saved!!\n" + JSON.stringify(this.projectData));
  }
  def()
  {
    this.projectData = { 'projectName': this.proName,  'Location': this.location, 
    'Duration':this.duration};
    alert("Project created!!");

  }
  ef()
  {
    this.projectData = { 'projectName': this.proName,  'Location': this.location, 
    'Duration':this.duration};
    alert("reset!!");

  }
  constructor() {
    

    this.citiesList = [{ 'city': "Bangalore" }, { 'city': "Texas" }, { 'city': "seoul" }, { 'city': "Beijing" }];
    this.countryList = [{ 'country': "India" }, { 'country': "USA" }, { 'country': "Korea" }, { 'country': "China" }];
    this.technologiesList=[{'technology':"Java"},{'technology':"Angular"},{'technology':"javascript"}];
     this.priorityList=[{'priority':"High"},{'priority':"Low"},{'priority':"Medium"}]
  
  }

  ngOnInit() {
  }

}