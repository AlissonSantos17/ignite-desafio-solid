import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (Array.isArray(user_id)) {
      throw Error("user_id must be a string");
    }

    try {
      const all = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(all);
    } catch (err) {
      return response.status(400).json({ error: `${err.message}` });
    }
  }
}

export { ListAllUsersController };
