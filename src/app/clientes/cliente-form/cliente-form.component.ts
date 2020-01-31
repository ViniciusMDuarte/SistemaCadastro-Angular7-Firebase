import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/cliente/models/cliente';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  
  clienteForm: FormGroup;
  constructor(
    private formBuider: FormBuilder,
    public activeModal:NgbActiveModal,
    private clienteService: ClienteService
    ) { }

  ngOnInit() {
    this.clienteForm = this.formBuider.group({
      nome:['', Validators.required],
      endereco:['', Validators.required],
      casado: false
    })
  }
  
  salvarCliente(){
    if (this.clienteForm.invalid) {
      return;
    }

    let cliente : Cliente = this.clienteForm.value;
    cliente.dataCad = new Date;
    this.clienteService.salvarClientes(cliente).then(response => this.handleSucessSave(response, cliente))
    .catch(err => console.error(err));
  }


  handleSucessSave(response: DocumentReference,cliente: Cliente){
    this.activeModal.dismiss({cliente: cliente,id: response.id, CreateMode:true})
  }
}
