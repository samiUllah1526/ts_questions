import { z } from "zod"
import { UseFormReturn } from "react-hook-form"

export type AddRoomFormType = z.infer<typeof formSchema>
export type AddRoomFormReturnType = UseFormReturn<z.infer<typeof formSchema>>

export const formSchema = z.object({
    room_number: z.coerce.number({
        required_error: "Room number is required",
        invalid_type_error: "Only numbers are allowed"
    }).min(1, {
        message: "Room number is required"
    }),
    floor: z.coerce.number({
        required_error: "Floor number is required",
        invalid_type_error: "Only numbers are allowed"
    }).min(1, {
        message: "Floor number cannot be zero"
    }),
})
