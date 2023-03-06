import { Component } from '@angular/core';
import { skills } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  mySkills:skills[]=[{
    name:'Angular, Bootstrap',
    rating:75,
  },{
    name:'Node JS',
    rating:65
  },{
    name:'HTML, CSS, JS',
    rating:80
  },
  {
    name:'MSSQL',
    rating:75
  },
{
  name:'Python',
  rating:85
}]

}
