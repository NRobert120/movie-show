import {  Injectable } from "@nestjs/common";
import { INJECTABLE_WATERMARK } from "@nestjs/common/constants";

@Injectable()
 export class userService{
    test(){
        return 'user service is running';
    }
 }