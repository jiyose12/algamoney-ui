import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

import { ToastyModule } from 'ng2-toasty';

import { HttpClientModule } from '@angular/common/http';

import {DataViewModule} from 'primeng/dataview';

import { CurrencyMaskModule } from "ng2-currency-mask";

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { Title } from '@angular/platform-browser';

import {AccordionModule} from 'primeng/accordion';          //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { PessoaService } from './pessoas/pessoa.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AppRoutingModule } from './app-routing-module';
import { AuthService } from './seguranca/auth.service';
import { ErrorHandlerService } from './error/error-handler.service';
import { SegurancaModule } from './seguranca/seguranca.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    DataViewModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    ConfirmDialogModule,

    LancamentosModule,
    PessoasModule,
    SegurancaModule,

    HttpClientModule,
    ToastyModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    Title,
    PessoaService,
    ConfirmationService,
    AuthService,
    JwtHelperService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
