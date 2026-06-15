import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {

  constructor(private config: ConfigService, private prisma:PrismaService) {
      const secret = config.get<string>('JWT_SECRET');
 
    if (!secret) {
      throw new Error('JWT_SECRET is missing in environment variables');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:secret
    });
  }

  async validate(payload: any) {
  const user=await this.prisma.user.findUnique({
    where:{id:payload.sub}
  })
  if(!user){
    throw new UnauthorizedException('unauthorized');
  }
    return {
      userId: payload.sub,
      email: payload.email,
    };
  }
}



@Injectable()
 export class refleshTokenStrategy extends PassportStrategy(Strategy,'jwt-refresh'){
    
     constructor(private config:ConfigService){
       super({
      jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration:false,
        secretOrKey:config.get<string>('JWT_REFRESH')!
       })
     }

     async validate(payload:any) {
         return {
           sub:payload.sub
         }
         
     }
     
 }


