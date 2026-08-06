import { Injectable } from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport"

@Injectable()
export class githubAuthGuard extends AuthGuard('github'){}