import { CanActivate,ExecutionContext,Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import * as jwt from "jsonwebtoken"

@Injectable()
 export class AuthGaurd implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request= context.switchToHttp().getRequest()
        const authHeaders=request.headers.authorization
        if(!authHeaders || !authHeaders.startWith('Bearer')){
            throw new UnauthorizedException();
        }

        const token=authHeaders.split('')[1]

    }
 }