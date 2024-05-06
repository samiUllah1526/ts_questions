import { Controller, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { AddRoomFormType, formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Home() {
  const { control, handleSubmit } = useForm<AddRoomFormType>({
    defaultValues: {
      room_number: 0,
      floor: 0,
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<AddRoomFormType> = (data) => {
    console.log(data);
  };

  const fieldsValues = useWatch({
    control,
    name: ["floor", "room_number"],
  });

  console.log(fieldsValues.join("_"));
  return (
    <main className="grip place-items-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="floor"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        <Controller
          name="room_number"
          control={control}
          render={({ field }) => <input {...field} />}
        />

        <input type="submit" />
      </form>
    </main>
  );
}

// CUSTOM HOOK - HOW To keep the type safety
// export function useWatchFields({ control, fieldsToTrack }) {
//   const fieldsValues = useWatch({
//     control: control,
//     name: fieldsToTrack,
//   });
//   return fieldsValues;
// }

// attempt
export function useWatchFields<C, F>({
  control,
  fieldsToTrack,
}: {
  control: C;
  fieldsToTrack: F;
}) {
  const fieldsValues = useWatch({
    control: control,
    name: fieldsToTrack,
  });
  return fieldsValues;
}
