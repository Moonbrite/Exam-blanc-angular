import {Component, OnInit} from '@angular/core';
import {VoitureService} from "../../services/voiture.service";
import {Voiture} from "../../models/voiture";
import {Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.scss'
})
export class VoitureComponent implements OnInit{

  constructor(
    private voitureService:VoitureService,
    private router:Router) {
  }

  voitures?: Voiture[];

  isLoading = false;

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    this.isLoading = true;
    this.voitureService.getAll().subscribe(data => {
      this.voitures = data;
      this.isLoading = false
    })
  }


}
