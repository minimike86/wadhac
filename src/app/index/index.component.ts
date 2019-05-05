import { Component, OnInit } from '@angular/core';
import { faUnlock, faUserSecret, faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  faUnlock = faUnlock;
  faUserSecret = faUserSecret;
  faFireExtinguisher = faFireExtinguisher;

  constructor() {
  }

  ngOnInit() {
  }

}
