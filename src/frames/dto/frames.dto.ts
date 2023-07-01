import { IsString, IsNotEmpty, MinLength } from "class-validator";

export class createFrameDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    description: string;
}