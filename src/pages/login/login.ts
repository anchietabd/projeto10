import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from "@angular/forms"
import { AngularFireAuth } from "angularfire2/auth"
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginform: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth, formbilder: FormBuilder) {

    this.loginform = formbilder.group({

      email: "",
      senha: ""
    })
  }

  login() {
    this.fire.auth.signInWithEmailAndPassword(this.loginform.value.email, this.loginform.value.senha).then(()=>{
      this.navCtrl.push("ListaPage")
    });
  }
  criarConta() {
    this.navCtrl.push("CadastroUsuarioPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
