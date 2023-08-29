import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from '../models/UserModel';
import { NavigationExtras, Router, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { UsuarioPage } from '../usuario/usuario.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]
})
export class LoginPage implements OnInit {

  listUser: UserModel[] = [
    new UserModel('George', 'Campos', 'gcampos@gmail.com', 'CONDUCTOR', 'gcampos', '123456', 'Nissan', 'March', 'Rojo', 'FGTR43'),
    new UserModel('George', 'Campos', 'gcampos@gmail.com', 'PASAJERO', 'gcampos', '123456', 'Nissan', 'March', 'Rojo', 'FGTR43'),
    new UserModel('Lucila', 'Julio', 'ljulio@gmail.com', 'PASAJERO', 'ljulio', '123456', '', '', '', ''),
    new UserModel('Mickaella', 'Silva', 'msilva@gmail.com', 'CONDUCTOR', 'msilva', '123456', 'Suzuki', 'Jimmy', 'Verde', 'YRPF78'),
    new UserModel('Juan', 'Soto', 'jsoto@gmail.com', 'ADMIN', 'PASAJERO', '123456', '', '', '', ''),
  ];

  userLoginModal: IUserLogin = {
    usuario: '',
    pass: ''
  };

  constructor(private route: Router) { }

  ngOnInit() {
    this.userLoginModalRestart();
  }

  userLogin(userLoginInfo: IUserLogin): boolean {

    for (let i = 0; i < this.listUser.length; i++) {
      if ((this.listUser[i].usuario == userLoginInfo.usuario) && (this.listUser[i].pass == userLoginInfo.pass)) {
        console.log('Usuario logeado...', this.userLoginModal.usuario, this.userLoginModal.pass);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }




        if (this.listUser[i].tipo == 'CONDUCTOR') {
          let sendInfo = this.route.navigate(['/usuario'], userInfoSend);
          return true;
        } else {
          let sendInfo = this.route.navigate(['/pasajero'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;

  }

  crearUsuario() {
    this.route.navigate(['/registrarusuario']);
  }


  userLoginModalRestart(): void {
    this.userLoginModal.usuario = '';
    this.userLoginModal.pass = '';
  }

}
