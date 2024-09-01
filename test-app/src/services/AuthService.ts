import { User } from "../model/model";

export class AuthService {
  public async login(
    Username: string,
    Password: string
  ): Promise<User | undefined> {
    if (Username === "Shivani" && Password === "Shivani@123") {
      return {
        username: Username,
        email: "shivani@gmail.com",
      };
    } else {
      return undefined;
    }
  }
}
