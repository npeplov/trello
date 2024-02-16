import {z } from "zod"

export const UpdateList = z.object({
  title: z.string({
    required_error: "Title is requred",
    invalid_type_error: "Title is requred"
  }).min(3, {
    message: "Title is too short"
  }),
  id: z.string(),
  boardId: z.string(),
})