import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios"; // Import axios if not already imported
import { useNavigate } from "react-router-dom"; // Import useNavigate if not already imported

function Register() {
  let [loading, setLoading] = useState(false);
  let [err, setErr] = useState("");

  let baseUrl = "https://ecommerce.routemisr.com/api/v1";

  const navigate = useNavigate();

  const registerSubmit = async (values) => {
    setLoading(true);
    let { data } = await axios
      .post(`${baseUrl}/auth/signup`, values)
      .catch((err) => {
        setErr(err.response.data.message);
        setLoading(false);
      });
    if (data.message === "success") {
      setErr("");
      setLoading(false);
      navigate("login");
    }
  };

  const schmemaValidation = Yup.object({
    name: Yup.string()
      .min(3, "Min Length is 3 characters")
      .max(20, "Max Length is 20 characters")
      .required("Name is Required"),
    email: Yup.string().email("Email not valid").required("Email is Required "),
    phone: Yup.string()
      .matches(/^(\+491|01|00201)[0-2,5]{1}[0-9]{8}/, "Phone not match")
      .required("Please Enter a phone number"),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must follow the pattern Exmaple@123"
      ),
    rePassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm password are not matched"
      )
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema: schmemaValidation,
    onSubmit: registerSubmit,
  });

  return (
    <div className="dark:p-3">
      <div className="bg-white shadow-md rounded-lg p-10 max-w-md mx-auto mb-[144px] mt-64 dark:bg-[#1f2937] dark:text-[#d1d5db]">
        <h2 className="text-2xl font-semibold text-[#ca1515] mb-6 text-center dark:text-[#d1d5db]">
          Register
        </h2>
        <form onSubmit={formik.handleSubmit}>
          {err ? <p className="text-[#dc2626]">{err}</p> : ""}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="name">
              Name <span className="text-[#ca1515]">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515] dark:bg-[#374151]"
              id="name"
              type="text"
              placeholder="Your Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="text-[#dc2626] m-2">{formik.errors.name}</p>
            ) : (
              ""
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="email">
              Email <span className="text-[#ca1515]">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515] dark:bg-[#374151]"
              id="email"
              type="email"
              placeholder="Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-[#dc2626] m-2">{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="phone">
              Phone <span className="text-[#ca1515]">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515] dark:bg-[#374151]"
              id="phone"
              type="text"
              placeholder="Your Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <p className="text-[#dc2626] m-2">{formik.errors.phone}</p>
            ) : (
              ""
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="password">
              Password <span className="text-[#ca1515]">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515] dark:bg-[#374151]"
              id="password"
              type="password"
              placeholder="Your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-[#dc2626] m-2">{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#d1d5db]"
              htmlFor="rePassword">
              Confirm Password <span className="text-[#ca1515]">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ca1515] dark:bg-[#374151]"
              id="rePassword"
              type="password"
              placeholder="Confirm Your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
            />
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <p className="text-[#dc2626] m-2">{formik.errors.rePassword}</p>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-center">
            <button
              className="bg-[#ca1515] hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
