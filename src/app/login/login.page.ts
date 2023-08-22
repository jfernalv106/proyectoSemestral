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
    new UserModel('George', 'Campos', 'gcampos@gmail.com', 'USUARIO', 'gcampos', '123456'),
    new UserModel('Lucila', 'Julio', 'ljulio@gmail.com', 'ADMIN', 'ljulio', '123456'),
    new UserModel('Mickaella', 'Silva', 'msilva@gmail.com', 'USUARIO', 'msilva', '123456'),
    new UserModel('Juan', 'Soto', 'jsoto@gmail.com', 'ADMIN', 'jsoto', '123456'),
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
        console.log('User Loged...', this.userLoginModal.usuario, this.userLoginModal.pass);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if (this.listUser[i].tipo == 'USUARIO') {
          let sendInfo = this.route.navigate(['/usuario'], userInfoSend);
          return true;
        } else {
          let sendInfo = this.route.navigate(['/admin'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;

  }

  userLoginModalRestart(): void {
    this.userLoginModal.usuario = '';
    this.userLoginModal.pass = '';
  }

}
