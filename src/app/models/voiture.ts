export class Voiture {

  constructor(
    id?: number,
    image?: string,
    prix?: number,
    marque?: string,
    nom?: string,
    nbKm?: number
  ) {
    this.id = id;
    this.image = image;
    this.prix = prix;
    this.marque = marque;
    this.nom = nom;
    this.nbKm = nbKm;
  }

  id?:number;
  image?:string;
  prix?:number;
  marque?:string;
  nom?:string;
  nbKm?:number;

}
