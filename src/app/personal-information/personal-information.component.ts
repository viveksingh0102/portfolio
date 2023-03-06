import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  myData:string[][] = [
    ['Name', 'Vivek Singh'],
    ['DOB','02/01/1998'],
    ['Work Exp','1 Year'],
    ['Education', 'B.tech'],
    ['Interest','Cricket']
  ];
  aboutMe:string[] = [
    'Hi, I am Softaware Engineer with 1 year of experience in Software Industry.',
    'Worked as a Frontend Developer ',
    'Delivered all Project withing deadlines. Always eager to learn new technologies'
  ]
}
