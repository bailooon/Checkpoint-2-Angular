import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  mes: number = 0;
  itens: string[] = ["Maçã", "Banana", "Leite"];
  idade: number = 0;
  tarefas: string[] = ["Estudar Angular", "Fazer exercícios", "Revisar código"];
  status: string = "pendente";
  usuarios = [{nome: "Ana", idade: 25}, {nome:"Carlos", idade: 30}]

  trocarMes(event:Event) : void{
    const elementoSelecionado = event.target as HTMLSelectElement
    this.mes =  parseInt(elementoSelecionado.value)
  }

  trocarIdade(event:Event) : void{
    const elementoSelecionado = event.target as HTMLSelectElement
    this.idade =  parseInt(elementoSelecionado.value)
  }

  removerTarefa(index: number): void{
    this.tarefas.splice(index, 1);
  }

  trocarStatus(event:Event) : void{
    const elementoSelecionado = event.target as HTMLSelectElement
    this.status = elementoSelecionado.value
  }

}
