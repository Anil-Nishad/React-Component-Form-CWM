import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  FirstName: z.string().min(3),
  // Exlpicitly setting the messgaes.
  LastName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  age: z.number().min(18),
  height: z.number().min(155),
  weight: z.number({ invalid_type_error: "Weight field is required" }).min(50),
});
// TypeScript Type is similar to typescript interface

/*interface FormData {
  name: string;
  age: number;
}*/
type FormData = z.infer<typeof schema>;

const FormUseRHFormDataValidationUsingZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="FirstName" className="form-label">
          FirstName
        </label>
        <input
          {...register("FirstName")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.FirstName && (
          <p className="text-danger">{errors.FirstName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="LastName" className="form-label">
          LastName
        </label>
        <input
          {...register("LastName")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.LastName && (
          <p className="text-danger">{errors.LastName.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="height" className="form-label">
          Height
        </label>
        <input
          {...register("height", { valueAsNumber: true })}
          id="height"
          type="number"
          className="form-control"
        />
        {errors.height && (
          <p className="text-danger">{errors.height.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="weight" className="form-label">
          Weight
        </label>
        <input
          {...register("weight", { valueAsNumber: true })}
          id="weight"
          type="number"
          className="form-control"
        />
        {errors.weight && (
          <p className="text-danger">{errors.weight.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        {" "}
        Submit
      </button>
    </form>
  );
};

export default FormUseRHFormDataValidationUsingZod;
