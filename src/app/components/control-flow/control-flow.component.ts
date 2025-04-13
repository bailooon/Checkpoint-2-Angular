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
  itens: string[] = ["Maçã", "Banana", "Leite"]
  idade: number = 0;

  trocarMes(event:Event) : void{
    const elementoSelecionado = event.target as HTMLSelectElement
    this.mes =  parseInt(elementoSelecionado.value)
  }

  trocarIdade(event:Event) : void{
    const elementoSelecionado = event.target as HTMLSelectElement
    this.idade =  parseInt(elementoSelecionado.value)
  }

}
