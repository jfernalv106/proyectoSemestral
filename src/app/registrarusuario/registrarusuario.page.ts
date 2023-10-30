import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsuarioModel } from '../models/UsuarioModel';
import { ActivatedRoute, Router, RouterLinkWithHref } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { UserService } from '../services/user-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registrarusuario',
  templateUrl: './registrarusuario.page.html',
  styleUrls: ['./registrarusuario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule, HttpClientModule, NgFor, NgForOf],
  providers: [UserService]
})
export class RegistrarusuarioPage implements OnInit {

  userRegisterModal: Partial<UsuarioModel> = {
    nombre: '',
    apellido: '',
    mail: '',
    nombre_usuario: '',
    pass: '',
    tipo_usuario:null
  };

  userInfoReceived: UsuarioModel | undefined;
  idUserHtmlRouterLink: any;

  tipoPerfil!: string;

  public alertButtons = ['OK'];

   constructor(private route: Router, private _usuarioService: UserService) {
  }

  ngOnInit() {
  }

  guardar(){
    this.route.navigate(['/login']);
  }

  salir():void{
    this.route.navigate(['/login']);

  }

  seleccion(ev: any) {
    this.tipoPerfil = ev.target.value;
    console.log(this.tipoPerfil)
  }

  async registrarUsuario() {

    if (this.tipoPerfil != 'CONDUCTOR' && this.tipoPerfil != 'PASAJERO') {
      this.alertButtons;
    }
    if (this.tipoPerfil == 'CONDUCTOR') {
      if (this.userRegisterModal.nombre && this.userRegisterModal.apellido && this.userRegisterModal.nombre_usuario && this.userRegisterModal.pass
        && this.userRegisterModal.mail) {
        try {
          const response = await lastValueFrom(this._usuarioService.addNewUser(this.userRegisterModal));
          console.log(response);
          alert('Conductor registrado con éxito!');
          this.salir();
        } catch (error) {
          console.error(error);
          alert('Error al registrar el conductor.');
        }
      } else {
        alert('Por favor, completa todos los campos.');
      }
    }else{
      if (this.userRegisterModal.nombre && this.userRegisterModal.apellido && this.userRegisterModal.nombre_usuario && this.userRegisterModal.pass
        && this.userRegisterModal.mail) {
        try {
          const response = await lastValueFrom(this._usuarioService.addNewUser(this.userRegisterModal));
          console.log(response);
          alert('Pasajero registrado con éxito!');
          this.salir();
        } catch (error) {
          console.error(error);
          alert('Error al registrar al pasajeror.');
        }
      } else {
        alert('Por favor, completa todos los campos.');
      }
    }
  }

}