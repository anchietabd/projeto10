import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from "@angular/forms"
import { AngularFireAuth } from "angularfire2/auth"
import{AngularFirestore} from "angularfire2/firestore";
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  cadastroForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fire: AngularFireAuth, formbilder: FormBuilder,public firestore:AngularFirestore) {

    this.cadastroForm = formbilder.group({

      nome: "",
      telefone: ""
    })
  }

  cadastro(){
    const id=this.fire.auth.currentUser.uid;
    this.firestore.collection(id).add({
nome: this.cadastroForm.value.nome,
telefone: this.cadastroForm.value.telefone

    }).then(()=>{
      this.navCtrl.pop()
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
