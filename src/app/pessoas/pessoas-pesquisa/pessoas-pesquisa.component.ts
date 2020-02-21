import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Table } from 'primeng/table/table';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  // pessoas = [
  //   { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true },
  //   { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false },
  //   { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true },
  //   { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true },
  //   { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
  //   { nome: 'Paula Maria', cidade: 'Uberlândia', estado: 'MG', ativo: true }
  // ];

  pessoas = [];
  @ViewChild('tabela', {static: true}) grid: Table;

  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private title: Title
    ) { }

  ngOnInit() {
    this.pesquisar();
    this.title.setTitle("Pesquisa de Pessoas");
  }

  // pesquisar() {
  //   this.pessoaService.pesquisar().subscribe
  //     (pessoas => {
  //       this.pessoas = pessoas;
  //       console.log(this.pessoas)
  //     });
  // }

  pesquisar() {
    this.pessoaService.pesquisar()
      .then(pessoas => this.pessoas = pessoas);
  }

  confirmarExclusao(pessoa: any){

        this.confirmation.confirm({
          message: "Tem certeza que deseja excluir?",
          accept: () => {
            this.excluir(pessoa);
          }
        });

  }

  excluir(pessoa: any) {

    console.log(this.grid);
    this.toasty.success('pessoa excluida com sucesso');
    this.toasty.default('Hi there');
    this.toasty.error("oi erro");
    this.toasty.warning("warning");
    // this.pessoaService.excluir(pessoa.codigo)
    //   .then(() => {
    //     this.grid.reset();
    //   });
}

}
