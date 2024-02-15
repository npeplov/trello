import {z } from "zod"

export const UpdateBoard = z.object({
  title: z.string({
    required_error: "Title is requred",
    invalid_type_error: "Title is requred"
  }).min(3, {
    message: "Title is too short"
  }),
  id: z.string(),
})