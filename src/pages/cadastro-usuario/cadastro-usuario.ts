import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from "@angular/forms"
import { AngularFireAuth } from "angularfire2/auth"
/**
/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {

  criarContaForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth, formbilder: FormBuilder) {

    this.criarContaForm = formbilder.group({

      email: "",
      senha: ""
    })
  }

  criarConta() {
    this.fire.auth.createUserWithEmailAndPassword(this.criarContaForm.value.email, this.criarContaForm.value.senha).then(()=>{
      this.navCtrl.push("ListaPage")
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }

}
