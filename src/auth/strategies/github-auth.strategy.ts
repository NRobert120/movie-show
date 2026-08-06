import{Injectable, Scope} from "@nestjs/common"
import { Strategy } from "passport-github2"
import { PassportStrategy } from "@nestjs/passport"

@Injectable()
export class githubStrategy extends PassportStrategy(Strategy,'github'){
    constructor(){
        super({
          clientID:process.env.GITHUB_CLIENT_ID!,
          clientSecret:process.env.GITHUB_CLIENT_SECRET!,
          callbackURL:'http://localhost:3333/auth/github/callback',
          scope:['user:email']
              })
         
    }

    async validate(accessToken:string,refreshToken:string,profile:any){

        const user={
            gitHubId:profile.id,
            username:profile.username,
            email:profile.emails?.[0]?.value
        }
        return user
    }
    
}
    


