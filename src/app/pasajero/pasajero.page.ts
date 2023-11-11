import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioModel } from '../models/UsuarioModel';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoModel } from '../models/VehiculoModel';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PasajeroPage implements OnInit {

  userInfoReceived: UsuarioModel | undefined;
  vehiculoInfoReceived: VehiculoModel | undefined;
  idUserHtmlRouterLink: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['userInfo'];
   }

  ngOnInit() {
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
  }

}
