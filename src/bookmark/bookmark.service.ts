import { Injectable } from "@nestjs/common";
import { retry } from "rxjs";


@Injectable()
 export class bookmarkService{
    test():string{
      return  "i am working";
    }
   
 }