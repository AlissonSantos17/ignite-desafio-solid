import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const verifyRole = this.usersRepository.findById(user_id);

    if (!verifyRole) {
      throw new Error("User not exists!");
    }

    if (!verifyRole.admin) {
      throw new Error("You don't privileges Administrator");
    }

    const all = this.usersRepository.list();

    return all;
  }
}

export { ListAllUsersUseCase };
