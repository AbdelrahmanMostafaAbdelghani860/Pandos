import * as Yup from "yup";
import { useFormik } from "formik";
function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // const schmemaValidation = Yup.object({
  //   name: Yup.string()
  //     .min(3, "Min Length is 3 characters")
  //     .max(20, "Max Length is 20 characters")
  //     .required("Name is Required"),
  //   email: Yup.string().email("Email not valid").required("Email is Required "),
  //   phone: Yup.string()
  //     .matches(/^(\+491|01|00201)[0-2,5]{1}[0-9]{8}/, "Phone not match")
  //     .required("Please Enter a phone number"),
  //   password: Yup.string()
  //     .required("Password is Required")
  //     .matches(
  //       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  //       "Password must follow the pattern Exmaple@123"
  //     ),
  //   rePassword: Yup.string()
  //     .oneOf(
  //       [Yup.ref("password")],
  //       "Password and Confirm password are not match"
  //     )
  //     .required("Confirm password is required"),
  // });
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //     rePassword: "",
  //   },
  //   validationSchema: schmemaValidation,
  //   onSubmit: registerSubmit,
  // });
  return (
    <div className="dark:p-3">
      <div className="bg-white shadow-md rounded-lg p-10 max-w-md mx-auto mb-[144px] mt-64 dark:bg-[#1f2937] dark:text-[#d1d5db] ">
        <h2 className="text-2xl font-semibold text-[#ca1515] mb-6 text-center dark:text-[#d1d5db]">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="username">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515]  dark:bg-[#374151]"
              id="username"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="address">
              Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515]  dark:bg-[#374151]"
              id="address"
              type="text"
              placeholder="Your Address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515]  dark:bg-[#374151]"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515]  dark:bg-[#374151]"
              id="password"
              type="password"
              placeholder="Your Password"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[#ca1515] hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Register
            </button>{" "}
            {/* <p>already have an account</p> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
