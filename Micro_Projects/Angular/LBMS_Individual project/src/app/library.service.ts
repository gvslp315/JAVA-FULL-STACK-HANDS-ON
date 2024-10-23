import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Library } from '../model/Library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  url:string
  library:Library=new Library();

  libraryArr:Library[]=[]

  constructor(private http:HttpClient) {
    this.url="http://localhost:3004/library/"
   }

   insertBook(library:Library){
    this.http.post(this.url,library).subscribe()
    return "Book has been inserted successfully"

   }

   updateBook(library:Library){
    this.http.put(this.url+library.id,library).subscribe()
    return "Book has been updated successfully"


   }

   deleteBook(id:number){
    this.http.delete(this.url+id).subscribe()
    return "Book has been deleted successfully"

   }

   findBook(id:number){
    this.http.get<Library>(this.url+id).subscribe((book)=>this.library=book)
    return this.library
   }

   findAllBook(){
    this.http.get<Library[]>(this.url).subscribe(bookArr=>this.libraryArr=bookArr)
   return this.libraryArr

   }
}
