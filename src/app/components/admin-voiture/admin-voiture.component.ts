import {Component, OnInit} from '@angular/core';
import {VoitureService} from "../../services/voiture.service";
import {Router, RouterLink} from "@angular/router";
import {Voiture} from "../../models/voiture";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-admin-voiture',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './admin-voiture.component.html',
  styleUrl: './admin-voiture.component.scss'
})
export class AdminVoitureComponent implements OnInit{

  constructor(
    private voitureService:VoitureService,
    private router:Router) {
  }

  voitures?: Voiture[];

  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.voitureService.getAll().subscribe(data => {
      this.voitures = data;
      this.isLoading = false
    })
  }

  deleteOne(id?: number) {
    this.voitureService.delete(<number>id).subscribe(data => {
      this.ngOnInit()
    })
  }

}
