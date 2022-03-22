// Render Prop
import './App.css';
import { Formik } from "formik";
// import { ReactJsAlert } from "reactjs-alert";
import swal from "sweetalert";


function App() {
  return (
    <Formik
      //valores iniciais do form
      initialValues={{ name: "", phone: "", email: "" }}
      //função de submissao do formulario
      onSubmit={(values) => swal(`Name: ${values.name} \nPhone: ${values.phone} \nEmail: ${values.email}`)}
      //validar campos
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "Required Field!";
        }

        if (!values.phone) {
          errors.phone = "Required Field!";
        } else if (
          !/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(values.phone)
        ) {
          errors.email = "Invalid phone address";
        }

        if (!values.email) {
          errors.email = "Required Field!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
          <input name="phone" placeholder="(DD) XXXXX-XXXX" onChange={handleChange} />
          {errors.phone && <span>{errors.phone}</span>}
          <input name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}

          <button type="submit">Sumit</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
