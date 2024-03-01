import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VoitureService} from "../../services/voiture.service";
import {Voiture} from "../../models/voiture";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-detail-voiture',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './detail-voiture.component.html',
  styleUrl: './detail-voiture.component.scss'
})
export class DetailVoitureComponent {

  constructor(
    private activatedRoute :ActivatedRoute,
    private voitureService :VoitureService,
   ) {

  }

  voiture?: Voiture;
  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    let id:number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("id"));
    this.voitureService.getOne(id).subscribe(data => {
      this.voiture = data;
      this.isLoading = false;
    })
  }

}
