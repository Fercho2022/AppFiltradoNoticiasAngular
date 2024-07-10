import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

title:string
listNoticias:any[]=[];
loading:boolean=false;

constructor(private _serviceNoticia:NoticiaService){

  this.title='Buscador de noticias';
}



buscarNoticias(parametros:any){
  this.loading=true;
  this.listNoticias=[];
  setTimeout(() => {
    this._serviceNoticia.getNoticias(parametros).subscribe(data=>{
      this.loading=false;
       this.listNoticias=data.articles;

     }, error=>{
       console.log(error);
     })
  }, 1000);

}


}
