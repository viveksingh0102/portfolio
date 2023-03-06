import { Component } from '@angular/core';
import { graduation, school} from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  graduationList: graduation[] = [{
    institute:'AKTU',
    course:'B.Tech',
    duration:'2018-2022',
    grade:'1st Division'
  }]
  schoolingList:school[]=[{
    board:"UP Board",
    school:"BIC",
    duration:'2015-2017',
    grade:'1st Division',
    subject:'PCM'
  },
  {
    board:"UP Board",
    school:"MAVM",
    duration:"2013-2015",
    grade:'1st Division',
    subject:"PCM"
  }
  ]
 
}
