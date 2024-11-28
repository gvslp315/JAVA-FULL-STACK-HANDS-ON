import { Component } from '@angular/core';
import { Library } from '../model/Library';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LBMS-App-Project';

  library:Library
  result:string=""
  libraryArr:Library[]=[]
  flag:boolean

  constructor(private libraryService:LibraryService){
    this.library=new Library()
    this.flag=false
  }

  insertBook(Data:any){
    this.library.id=Data.id;
    this.library.bookName=Data.bookName;
    this.library.bookShelf=Data.bookShelf;
    this.library.bookPrice=Data.bookPrice;
    this.library.bookLang=Data.bookLang;
   this.result= this.libraryService.insertBook(this.library)
  }
/*
  updateBook(Data:any){
    this.library.id=Data.id;
    this.library.bookName=Data.bookName;
    this.library.bookShelf=Data.bookShelf;
    this.library.bookPrice=Data.bookPrice;
    this.library.bookLang=Data.bookLang;
    this.result=this.libraryService.updateBook(this.library)
  }

  deleteBook(Data:any){
   this.result= this.libraryService.deleteBook(Data.id)
  }

  findBook(Data:any){
    let library:Library=this.libraryService.findBook(Data.id)
    this.result=library.id+"     "+library.bookName+"     "+library.bookShelf+"     "+
    library.bookPrice+"      "+library.bookLang
  }

  findAllBook(){
    this.libraryArr=this.libraryService.findAllBook();
    this.flag=true

  }*/
}
