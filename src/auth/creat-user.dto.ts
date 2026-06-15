import { Injectable } from '@nestjs/common';
import {
  IsString,
  IsEmpty,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email!: string;
  @IsString()
  hash!: string;
  @IsString()
  firstName!: string;
  @IsString()
  lastName!: string;
}

export class SignInUpDto {
  @IsString()
  @IsEmail()
  email!: string;
  @IsString()
  hash!: string;
}

export class refreshTokenDto{
   @IsString()
   sub!:number
}
