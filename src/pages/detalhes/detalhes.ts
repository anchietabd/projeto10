import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/observable";
import{AngularFireAuth} from "angularfire2/auth";
/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  contato:Observable<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public firestore:AngularFirestore, public fire:AngularFireAuth) {
  
  const id= this.fire.auth.currentUser.uid;
  this.contato=firestore.collection(id,ref=>ref.where("nome","==",this.navParams.get("nome"))).valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
