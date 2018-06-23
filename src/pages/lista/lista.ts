import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth"
import{AngularFirestore} from "angularfire2/firestore";
import{Observable}from "rxjs/Observable"

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
listaContatos:Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fire: AngularFireAuth, public firestore:AngularFirestore) {

         const id=this.fire.auth.currentUser.uid;
      this.listaContatos=this.firestore.collection(id).valueChanges();
  }

  adicionarContato(){
    this.navCtrl.push("CadastroPage")
  }

  pessoasReferencia(nome){
    this.navCtrl.push("DetalhesPage",{nome:nome});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
