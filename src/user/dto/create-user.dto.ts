import { IsString, IsOptional, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  full_name?: string | null;

  @IsOptional()
  @IsEmail()
  email?: string | null;

  @IsString()
  @Length(1, 255)
  phone: string;

  @IsString()
  @Length(1, 255)
  password: string;
}
