import {IsString,Length} from "class-validator"

class UpdateprofileDto{
    @IsString()
    @Length(3,100)
     name:string;
    @IsString()
     description:string;
}

export default UpdateprofileDto;