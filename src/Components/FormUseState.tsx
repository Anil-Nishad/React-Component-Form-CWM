import { FormEvent, useState } from "react";

const FormUseState = () => {
  const [Person, setPerson] = useState({
    name: "",
    age: 0,
  });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Person", Person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...Person, name: event.target.value })
          }
          value={Person.name}
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
          onChange={(event) =>
            setPerson({ ...Person, age: parseInt(event.target.value) })
          }
          value={Person.age}
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

export default FormUseState;
