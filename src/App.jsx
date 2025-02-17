import dataInputs from "./assets/data/dataInputsForm.json";
import { useForm } from "./assets/hooks/useForm";
import Form from "./components/container/Form";
import Result from "./components/pure/Result";

function App() {
  const [form, errors, handleChange, handleBlur, handleSubmit] =
    useForm(dataInputs);

  return (
    <main className="px-4 pt-16 md:max-w-2xl md:h-dvh md:mx-auto md:pt-0 md:flex md:flex-col md:justify-center">
      <section className="rounded-t-2xl rounded-bl-2xl rounded-br-[7rem] px-4 py-12 flex flex-col gap-7 bg-white-50 shadow-xl shadow-white-100 xs:px-6 md:p-10 md:gap-0">
        <Form
          data={dataInputs}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          errors={errors}
          form={form}
        />
        <div className="flex flex-col-reverse">
          {form.map((result) => (
            <Result
              key={result.id}
              item={result}
              name={result.name}
              title={result.title}
              age={result.age}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
