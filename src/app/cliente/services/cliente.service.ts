import { Injectable } from '@angular/core';
import { firestore } from 'firebase';
import { AngularFireModule } from '@angular/fire';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private db: AngularFirestore) { }

  private clienteColection ='Cliente';

  getClientes(): Observable<firebase.firestore.QuerySnapshot>{
    return this.db.collection<Cliente>(this.clienteColection, ref => ref.orderBy('nome','asc')).get();
  }

  salvarClientes(cliente : Cliente): Promise<DocumentReference>{
    return this.db.collection(this.clienteColection).add(cliente)
  }
}
