import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {VoitureService} from "../../services/voiture.service";
import {Voiture} from "../../models/voiture";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgForOf, NgIf} from "@angular/common";
import {MarqueService} from "../../services/marque.service";
import {Marque} from "../../models/marque";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-admin-add-voiture',
  standalone: true,
  imports: [
    FormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    NgForOf
  ],
  templateUrl: './admin-add-voiture.component.html',
  styleUrl: './admin-add-voiture.component.scss'
})
export class AdminAddVoitureComponent implements OnInit{

  constructor(
    private voitureService:VoitureService,
    private router:Router,
    private _snackBar: MatSnackBar,
    private marqueService :MarqueService
    ) {
  }

  voiture :Voiture = new Voiture();

  marques?:Marque [];

  submitForm(voiture:Voiture) {
    this.voitureService.add(voiture).subscribe(
      data => {
        this._snackBar.open("Voiture added","close")
        return this.router.navigate(['/admin'])
      }
    )
  }

  ngOnInit(): void {
    this.marqueService.getAll().subscribe(
      data => {
        this.marques = data
      }
    )
  }

}
