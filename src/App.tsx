import { FormProvider } from "./context/FormContext";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => {
  return (
    <div className="h-screen w-screen flex lg:items-center justify-center lg:bg-blue-50">
      <FormProvider>
        <DefaultLayout />
      </FormProvider>
    </div>
  );
};

export default App;
