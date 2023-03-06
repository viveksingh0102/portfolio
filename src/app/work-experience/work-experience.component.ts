import { Component } from '@angular/core';
import { workexp} from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  exp: workexp[] = [{
   role:'Software Developer',
   company:'Tranzita Systems',
   duration:'2022-2023',
   desc:[
    'Worked with multiple team to develop web and desktop applications',
    'Worked on different technologies such as (Angular, Node js, mssql, Azure etc).',
   ]
  }]
}
