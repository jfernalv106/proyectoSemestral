import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioModel } from '../models/UsuarioModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.page.html',
  styleUrls: ['./registrarusuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistrarusuarioPage implements OnInit {

  userInfoReceived: UsuarioModel | undefined;
  idUserHtmlRouterLink: any;

  tipoPerfil!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    // Si quiero obtener un valor por URL usando routerLink
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    // Obteniendo el ID podria buscar en algún arreglo o BD el usuario con el id
    console.log("Valor obtenido desde URL: ",this.idUserHtmlRouterLink);
   }

  ngOnInit() {
  }

  guardar(){
    this.router.navigate(['/login']);
  }

  salir(){
    this.router.navigate(['/login']);

  }

  seleccion(ev: any) {
    this.tipoPerfil = ev.target.value;
    console.log(this.tipoPerfil)
  }

}
