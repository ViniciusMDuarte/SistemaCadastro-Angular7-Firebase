import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  
  clienteForm: FormGroup;
  constructor(
    private formBuider: FormBuilder,
    public activeModal:NgbActiveModal
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
  }
}
