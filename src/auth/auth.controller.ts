import { Controller,Post } from "@nestjs/common";
import { authService } from "./auth.service";
import { sign } from "crypto";
import { retry } from "rxjs";

@Controller('auth')
export class authController{
  constructor(private authService:authService){}
  @Post('signup')
   signup(){
    return 'this is the rout of signing up'
   }
   @Post('signin')
    signin(){
        return 'this is the route of signing in'
    }
   
}