import {Injectable} from '@nestjs/common';
import {randomUUID} from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import UpdateprofileDto from './dto/updata-profile.dto';
import { HttpException,HttpStatus } from '@nestjs/common';

@Injectable()
export class ProfileService{

  private profiles=[
    {
        id:randomUUID(),
        name:"robert",
        description:"hey i am robert niyompuhwe"
    },
    {
        id:randomUUID(),
        name:"angella",
        description:"hey i am angella "
    },
    {
        id:randomUUID(),
        name:"sandra",
        description:"hey i am sandra"
    },
    {
        id:randomUUID(),
        name:"samii",
        description:"hey i am samii"
    }
  ]

 public findAll(){
    return this.profiles;
  }

public  findOneById(id:string){
    const user= this.profiles.find(profile=>profile.id===id)
    return user?user:'no found'
  }

public create(body:CreateProfileDto){
    const user={
        id:randomUUID(),
        name:body.name,
        description:body.description
    }
    this.profiles.push(user)
    return user
}

public deleteUser(id:string){
    const user=this.profiles.find(profile=>profile.id===id)
    if(!user){
        return `the user with id:${id} is not found`;
    }
   this.profiles=this.profiles.filter(profile=> profile!=user)
throw new HttpException('Not found',HttpStatus.NOT_FOUND)
}

public update(id:string,UpdateBody:UpdateprofileDto){
    const user=this.profiles.find(user=>user.id==id)
    if(user){
        user.name=UpdateBody.name,
        user.description=UpdateBody.description
        this.profiles=this.profiles.filter(user=> user.id!=id)
    this.profiles.push(user);
    return user;
    }
    throw new HttpException('Not found',HttpStatus.NOT_FOUND)
    
}





}