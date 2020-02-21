import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'money-form',
  templateUrl: './money-form.component.html',
  styleUrls: ['./money-form.component.css']
})
export class MoneyFormComponent{

  text: string;
  tipocobranca: string;
  submitted = false;
  mensagemRequerida = 'Campo de preenchimento obrigatório!';

  moneyForm = this.fb.group ({
    descricao: ['', Validators.required],
    valor:['', Validators.required],
    classificacao: ['', Validators.required],
    tipocobranca: ['Saída', Validators.required]
  });

  get f() { return this.moneyForm.controls; }

  onSubmit() {
    this.tipocobranca = this.moneyForm.value.tipocobranca;
    this.submitted = true;

    if (this.moneyForm.invalid) {
      alert('Preencha todos os Dados');
      return;
    }
    console.warn(this.moneyForm.value);
  }

  onReset() {
    this.submitted = false;
    this.moneyForm.reset();
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.moneyForm.value, null, 4));
  }

  constructor(private fb: FormBuilder) {}

}
