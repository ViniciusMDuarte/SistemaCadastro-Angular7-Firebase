import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { ClienteViewModel} from 'src/app/cliente/models/cliente-view-model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private clienteService: ClienteService
    )  { }

  ngOnInit() {
    this.mostrarClientes();
  }

  addCliente() {
    const modal = this.modalService.open(ClienteFormComponent);
    modal.result.then(
      this.handleModalClientForm.bind(this),
      this.handleModalClientForm.bind(this)
      )
  }

  clientes: ClienteViewModel[] = [];
  
  mostrarClientes() {
    this.clienteService.getClientes().subscribe(response => {
      this.clientes = [];
      response.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const cliente: ClienteViewModel = {
          id: id,
          nome: data.nome,
          endereco: data.endereco,
          casado: data.casado,
          dataMod:data.dataMod.toDate()
        };
        this.clientes.push(cliente);
      });
      });
  }

  handleModalClientForm(response) {
   
  }

}
