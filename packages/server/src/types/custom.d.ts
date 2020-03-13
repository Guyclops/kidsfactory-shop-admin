import { TokenInterface } from "./custom.interface";

declare module "express" {
  interface Request {
    admin?: TokenInterface;
  }
}
