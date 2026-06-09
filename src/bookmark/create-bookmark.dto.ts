import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsString,isNotEmpty, isString } from "class-validator";
@Injectable()
export class CreateBookMark{
    @IsString()
    @IsNotEmpty()
     title:string
    @IsString()
    @IsNotEmpty()
    link:string
}

export class UpdateBookMark{
    @IsString()
    @IsNotEmpty()
     title:string
    @IsString()
    @IsNotEmpty()
    link:string

}
