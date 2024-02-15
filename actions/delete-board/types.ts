import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { D } from "./schema";

export type InputType = z.infer<typeof D>;
export type ReturnType = ActionState<InputType, Board>;
