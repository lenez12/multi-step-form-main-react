import { forwardRef, useImperativeHandle } from "react";
import { useFormField } from "@/hooks/userFormField";
import InputWithLabel from "@/components/molecules/input-with-label/InputWithLabel";
import SectionHeader from "@/components/molecules/section-header/SectionHeader";
import FormWrapper from "@/components/atoms/wrapper/FormWrapper";
import { useForm } from "@/context/FormContext";

export type FormInfoHandle = {
  validateAndGetData: () => {
    isValid: boolean;
  };
};

const FormInfo = forwardRef<FormInfoHandle>((_props, ref) => {
  const { state, dispatch } = useForm();
  const nameField = useFormField(state.personalInfo?.name, { required: true });
  const emailField = useFormField(state.personalInfo?.email, {
    required: true,
  });
  const phoneField = useFormField(state.personalInfo?.phone, {
    required: true,
  });

  useImperativeHandle(ref, () => ({
    validateAndGetData: () => {
      const isNameValid = nameField.validate();
      const isEmailValid = emailField.validate();
      const isPhoneValid = phoneField.validate();

      const isValid = isNameValid && isEmailValid && isPhoneValid;

      return {
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
          onChange={(e) => {
            nameField.onChange(e);
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              field: "name",
              value: e.target.value,
            });
          }}
          value={state.personalInfo?.name}
          error={nameField.error}
          type="text"
        />
        <InputWithLabel
          name="email"
          label="Email Address"
          placeholder="Masukan Email"
          onChange={(e) => {
            emailField.onChange(e);
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              field: "email",
              value: e.target.value,
            });
          }}
          value={state.personalInfo?.email}
          error={emailField.error}
          type="email"
        />
        <InputWithLabel
          name="phone"
          label="Phone Number"
          placeholder="Masukan Nomor Telepon"
          onChange={(e) => {
            phoneField.onChange(e);
            dispatch({
              type: "UPDATE_PERSONAL_INFO",
              field: "phone",
              value: e.target.value,
            });
          }}
          value={state.personalInfo?.phone}
          error={phoneField.error}
          type="tel"
        />
      </form>
    </FormWrapper>
  );
});

export default FormInfo;
