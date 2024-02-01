"use client";
import { Input } from "@/ui/components/Input/Input";
import { TextArea } from "@/ui/components/TextArea/TextArea";
import emailjs from "@emailjs/browser";
import { Checkbox, FormControlLabel } from "@mui/material";
import { purple } from "@mui/material/colors";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

type UserSubmitForm = {
  name: string;
  email: string;
  title: string;
  phone: string;
  message: string;
};

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      title: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Username is required")
        .min(3, "Username must be at least 6 characters")
        .max(20, "Username must not exceed 20 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      title: Yup.string().required("Title is required"),
      phone: Yup.string().required("Phone is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters"),
    }),
    onSubmit: (
      values: UserSubmitForm,
      { setSubmitting }: FormikHelpers<UserSubmitForm>
    ) => {
      try {
        emailjs
          .send(
            "service_96y79wg",
            "template_wn4vxb2",
            values,
            "xxxIaxYoLEn78ySPn"
          )
          .then(() => {
            setSubmitting(true);
            alert("Message sended");
            window.location.reload();
          });
      } catch {
        setSubmitting(false);
      }
    },
  });
  return (
    <form
      id="contact-form"
      onSubmit={formik.handleSubmit}
      className="py-0 w-full space-y-5 mt-7"
    >
      <Input
        onChange={formik.handleChange}
        type="text"
        name="name"
        placeholder="Imię i nazwisko"
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <span className="text-alert text-xs">{formik.errors.name}</span>
      )}
      <Input
        name="email"
        placeholder="Adres email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email && (
        <span className="text-alert text-xs p-0 m-0">
          {formik.errors.email}
        </span>
      )}
      <Input
        onChange={formik.handleChange}
        value={formik.values.phone}
        name="phone"
        placeholder="Numer telefonu"
        type="tel"
      />
      {formik.touched.phone && formik.errors.phone && (
        <span className="text-alert text-xs p-0 m-0">
          {formik.errors.phone}
        </span>
      )}
      <Input
        onChange={formik.handleChange}
        value={formik.values.title}
        name="title"
        placeholder="Tytul"
        type="text"
      />
      {formik.touched.title && formik.errors.title && (
        <span className="text-alert text-xs p-0 m-0">
          {formik.errors.title}
        </span>
      )}
      <TextArea
        onChange={formik.handleChange}
        value={formik.values.message}
        name="message"
        placeholder="Wiadomość"
      />
      {formik.touched.message && formik.errors.message && (
        <span className="text-alert text-xs p-0 ">{formik.errors.message}</span>
      )}
      <p className="text-xs text-text">
        Wyrażam zgodę na przetwarzanie danych osobowych podanych w formularzu
        zgodnie z ogólnym rozporządzeniem o ochronie danych (RODO) w celu:
      </p>
      <FormControlLabel
        sx={{ color: "rgb(170 174 182)" }}
        required
        control={
          <Checkbox
            sx={{
              color: purple[900],
              "&.Mui-checked": {
                color: purple[900],
              },
            }}
          />
        }
        label={
          <p className="text-xs text-text w-full ">
            udzielenia odpowiedzi na wpisane w formularzu kontaktowym zapytanie
          </p>
        }
      />

      <button
        className={`bg-gradient-to-b from-[#8C33FF] to-[#37007E]  py-2 px-4 w-full text-white text-center tracking-wide transition ease-in-out duration-300 shadow-md rounded-full font-semibold `}
      >
        Wyślij
      </button>
    </form>
  );
};
