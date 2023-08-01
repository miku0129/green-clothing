import { FormInputLable, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <FormInputLable shrink={inputOptions.value.length}>
          {label}
        </FormInputLable>
      )}
    </Group>
  );
};

export default FormInput;
