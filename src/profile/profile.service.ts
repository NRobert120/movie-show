import {Injectable} from '@nestjs/common';
import {randomUUID} from 'crypto';

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
        id:randomUUID,
        name:"sandra",
        description:"hey i am sandra"
    },
    {
        id:randomUUID(),
        name:"samii",
        description:"hey i am samii"
    }
  ]

  findAll(){
    return this.profiles;
  }
}