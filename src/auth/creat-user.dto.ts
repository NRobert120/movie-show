import { Injectable } from "@nestjs/common";
import { IsString,IsEmpty,IsEmail } from "class-validator";
import { StringFilter } from "generated/prisma/commonInputTypes";

export class CreateUserDto{
    @IsEmail()
    email:string
    @IsString()
    hash:string
    @IsString()
    firstName:string
    @IsString()
    lastName:string
}

export class SignInUpDto{
    @IsString()
    @IsEmail()
    email:string 
    @IsString() 
    hash:string

       
}