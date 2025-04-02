import { forwardRef, useImperativeHandle } from "react";
import { useFormField } from "@/hooks/userFormField";
import InputWithLabel from "@/components/molecules/input-with-label/InputWithLabel";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import FormWrapper from "@/components/atoms/wrapper/FormWrapper";

export type FormInfoHandle = {
  validateAndGetData: () => {
    name: string;
    email: string;
    phone: string;
    isValid: boolean;
  };
};

const FormInfo = forwardRef<FormInfoHandle>((_props, ref) => {
  const phoneField = useFormField("", { required: true });
  const emailField = useFormField("", { required: true });
  const nameField = useFormField("", { required: true });

  useImperativeHandle(ref, () => ({
    validateAndGetData: () => {
      const isNameValid = nameField.validate();
      const isEmailValid = emailField.validate();
      const isPhoneValid = phoneField.validate();

      const isValid = isNameValid && isEmailValid && isPhoneValid;

      return {
        name: nameField.value,
        email: emailField.value,
        phone: phoneField.value,
        isValid,
      };
    },
  }));

  return (
    <FormWrapper>
      <SectionHeader
        title="Personal Info"
        description="Please provide your name, email address, and phone number"
      />

      <form autoComplete="false" className="flex flex-col gap-2">
        <InputWithLabel
          name="name"
          label="Name"
          placeholder="Masukan nama"
          onChange={nameField.onChange}
          value={nameField.value}
          error={nameField.error}
        />
        <InputWithLabel
          name="email"
          label="Email Address"
          placeholder="Masukan Email"
          onChange={emailField.onChange}
          value={emailField.value}
          error={emailField.error}
          type="email"
        />
        <InputWithLabel
          name="phone"
          label="Phone Number"
          placeholder="Masukan Nomor Telepon"
          onChange={phoneField.onChange}
          value={phoneField.value}
          error={phoneField.error}
          type="tel"
        />
      </form>
    </FormWrapper>
  );
});

export default FormInfo;
