import { createContext } from "react";
import { Context } from "../types";

export const UserContext = createContext<Context | null>(null);
