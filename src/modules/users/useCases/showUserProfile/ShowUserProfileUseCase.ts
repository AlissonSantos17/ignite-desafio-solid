import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadExists = this.usersRepository.findById(user_id);

    if (!userAlreadExists) {
      throw new Error("This user not exists!");
    }

    return userAlreadExists;
  }
}

export { ShowUserProfileUseCase };
