import {Component, OnInit} from '@angular/core';
import {Voiture} from "../../models/voiture";
import {ActivatedRoute, Router} from "@angular/router";
import {VoitureService} from "../../services/voiture.service";
import {FormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgForOf, NgIf} from "@angular/common";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MarqueService} from "../../services/marque.service";
import {Marque} from "../../models/marque";

@Component({
  selector: 'app-admin-edit-voiture',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatError,
    FormsModule,
    NgIf,
    MatInput,
    MatOption,
    MatSelect,
    NgForOf
  ],
  templateUrl: './admin-edit-voiture.component.html',
  styleUrl: './admin-edit-voiture.component.scss'
})
export class AdminEditVoitureComponent implements OnInit{

  constructor(
    private activatedRoute :ActivatedRoute,
    private voitureService :VoitureService,
    private router: Router,
    private marqueService :MarqueService
    ) {
  }

  marques?:Marque [];
  voiture?: Voiture;

  ngOnInit(): void {
    let id:number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get("id"));
    this.voitureService.getOne(id).subscribe(data => {
      this.voiture = data;
    })
    this.marqueService.getAll().subscribe(
      data => {
        this.marques = data
      }
    )
  }

  submitForm(voiture:Voiture) {
    this.voitureService.edit(voiture,voiture.id).subscribe(
      data => {
        return this.router.navigate(['/admin'])
      }
    )
  }

}
