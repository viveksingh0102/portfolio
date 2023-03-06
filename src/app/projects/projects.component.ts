import { Component } from '@angular/core';
import { projects } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  myProjects:projects[]=[{
    title:'iEMS || Product',
    technologies:'Angular, Node JS,Microsoft SQL,Bootstrap',
    desc:['The main aim of this project is to monetarized total power consumption of industry']
  },
  {
    title:'HRMS (Hr management system ) || P&G Product',
    technologies:'Angular, Node, Microsoft SQL, Bootstrap',
    desc:['This HR System project involved the management of recruitment, performance management and training process for employees',
  'The goal was to create an efficient and centralized platform for HR operations streamlining the handling of various HR task related to the employee life cycle.']
  },
  {title:'On Shelf Availability (OSA) || P&G Project',
technologies:'Microsoft SQL, Azure',
desc:['OSA plays a crucial role in keeping a track of products on shelf availability. 24 vendors ( Lulu Hyper Mart, Reliance retail , Dmart ,Apollo, ABRL Super……) are associated with P&G.',
' Sales , Profit & Loss records are tracked weekly , 3day, 3 day predictive.Sales are Products availability are being forecasted 3 days in a week.']},
{
  title:'URL Shortner',
  technologies:'Angular, Node JS, Microsoft SQL,Bootstrap',
  desc:['An url shortner is the website that reduce the length of your URL',
'the idea is to minimize the web page address into something that is easier to remember and track']
},
{title:'Portfolio',
technologies:'Angular',
desc:['A portfolio is a living and changing collection of records that reflect your accomplishments, skills, experiences, and attributes.',
'It highlights and showcases samples of some of your best work, along with life experiences, values and achievements.']}
,{
  title:'Crud Application',
  technologies:'Angular, Node js, Microsoft SQL, Bootstrap',
  desc:['In computer programming, create, read, update and delete are the four basic operations of persistent storage',
'CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information using computer-based forms and reports.']
}]
}
