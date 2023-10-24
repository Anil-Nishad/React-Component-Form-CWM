import { FieldValues, useForm } from "react-hook-form";

const FormUseRHForm = () => {
  //const form = useForm();
  //console.log(form);
  const { register, handleSubmit } = useForm();
  //console.log(register('name'));
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(
        //(data) => console.log(data)
        onSubmit
      )}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
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
      </div>
      <button className="btn btn-primary" type="submit">
        {" "}
        Submit
      </button>
    </form>
  );
};

export default FormUseRHForm;
