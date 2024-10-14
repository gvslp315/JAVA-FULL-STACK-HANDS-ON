import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[],args:string):any[] {
    let result:any[]=[];
    if(args==='ascending'){
      result=value.sort()
    }
    if(args==='descending'){
      result= value.sort().reverse();
    }
    if(args==='reverse'){
      result =value.reverse();
    }
    return result;

  }
 
}
