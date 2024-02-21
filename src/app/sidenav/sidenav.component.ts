import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Admin',
      icon: 'fa-sharp fa-solid fa-user-tie',
    },
     {
      number: '2',
      name: 'Leave',
      icon: 'fa-sharp fa-solid fa-calendar-days',
    },
     {
      number: '3',
      name: 'Time',
      icon: 'fa-sharp fa-solid fa-clock',
    },
     {
      number: '4',
      name: 'My Info',
      icon: 'fa-sharp fa-solid fa-circle-info',
    },
     {
      number: '5',
      name: 'Recruitment',
      icon: 'fa-sharp fa-solid fa-user-check',
    },
  ]

}
