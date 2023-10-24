import FormDisablingButton from "./Components/FormDisablingButton";
import FormUseRHForm from "./Components/FormUseRHForm";
import FormUseRHFormDataValidation from "./Components/FormUseRHFormDataValidation";
import FormUseRHFormDataValidationUsingZod from "./Components/FormUseRHFormDataValidationUsingZod";
import FormUseRef from "./Components/FormUseRef";
import FormUseRefReturnObject from "./Components/FormUseRefReturnObject";
import FormUseState from "./Components/FormUseState";

function App() {
  return (
    <div>
      <FormUseRef />
      <FormUseRefReturnObject />
      <FormUseState />
      <FormUseRHForm />
      <FormUseRHFormDataValidation />
      <FormUseRHFormDataValidationUsingZod />
      <FormDisablingButton />
    </div>
  );
}

export default App;
/*
      <FormUseRef />
      <FormUseRefReturnObject />
      <FormUseState />
      <FormUseRHForm />
      <FormUseRHFormDataValidation />
      <FormUseRHFormDataValidationUsingZod />
      <FormDisablingButton/>
*/
