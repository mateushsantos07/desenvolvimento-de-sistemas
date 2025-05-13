import { User, Task as UserPrisma } from "@prisma/client";
import { prisma } from "../prisma/client";
import { compare, hash } from "bcryptjs";

class UserService {
    public async register( { name, email, password, birthDate }: CreateUserType ): Promise<void> {

        const userExist = await prisma.user.findUnique({ 
            where: { email: email }
        })

        if(userExist) {
            throw new Error("Email já cadastrado")
        }

        const passwordHashed = await hash(password, 10)

        const user: User = {
            id: crypto.randomUUID(),
            name: name,
            email: email,
            password: passwordHashed,
            birthDate: new Date(birthDate),
            createdAt: new Date(),
            updatedAt: new Date()
        }

        await prisma.user.create({ data: user });
    }

    public async login({ email, password }: LoginType): Promise<string | null> {
        
        const user = await prisma.user.findUnique({ 
            where: { email: email }
        })

        if(!user) {
            throw new Error("Credenciais inválidos")
        }

        const passwordIsValid = await compare( password, user.password )
        if(!passwordIsValid) {
            throw new Error("Credenciais inválidos")
        }
        
        return app.jwt.sign({
            id: user.id,
            name: user.email,
            email: user.email,
            birthDate: user.birthDate
        });
    }
}

export const userService = new UserService();

