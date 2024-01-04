import { NextBreadcrumb } from "@lib/components/Breadcrumbs/Breadcrumbs";
import { ContactForm } from "@lib/components/ContactForm/ContactForm";
import { Title } from "@lib/components/Title/Title";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import type { Metadata } from "next";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default async function Page() {
  return (
    <section className="bg-main-bg px-5 laptop:px-24 gap-3 pt-10 pb-32 desktop:px-44 space-y-10">
      <Title>Skontaktuj się ze mną</Title>
      <NextBreadcrumb
        homeElement={"Strona Główna"}
        separator={
          <svg
            className="w-6 h-6 text-text"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        }
        activeClasses="text-amber-500"
        containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
        listClasses="hover:underline mx-2 font-bold text-text"
        capitalizeLinks
      />
      <div className="grid laptop:grid-cols-2 content-center items-center tablet:grid-cols-2 tablet:gap-x-12 grid-cols-1 desktop:gap-x-32 gap-y-14">
        <div className="flex flex-col gap-y-8 ">
          <p className="text-text">
            Cieszę się, że zainteresowałeś/aś się moimi usługami! Jeśli masz
            pytania, potrzebujesz dodatkowych informacji lub jesteś gotów/a
            rozpocząć współpracę, jestem tutaj, aby Ci pomóc. Skorzystaj z
            poniższych danych kontaktowych lub wypełnij formularz, a ja postaram
            się odpowiedzieć najszybciej, jak to możliwe.
          </p>
          <p className="flex gap-x-3 text-secondary/80">
            <MailOutlineIcon sx={{ color: "rgb(54 255 181 / 0.8)" }} />
            marharytalesniak@gmail.com
          </p>
          <p className="flex gap-x-3 text-secondary/80">
            <ContactPhoneIcon sx={{ color: "rgb(54 255 181 / 0.8)" }} />
            +48576629372
          </p>
          <p className="text-white font-medium text-lg  mt-5">
            Nie wahaj się skontaktować ze mną w sprawie:
          </p>
          <ul className="list-image-[url(../../public/star.svg)] list-inside space-y-4">
            <li className="text-text font-medium">
              Pytań dotyczących współpracy;
            </li>
            <li className="text-text font-medium">
              Indywidualnych potrzeb związanych z usługami;
            </li>
            <li className="text-text font-medium">
              Konsultacji dotyczących projektów.
            </li>
          </ul>
          <p className="text-white">
            Jestem gotowa pomóc Ci w osiągnięciu celów online i stworzeniu
            wyjątkowej obecności w sieci. Czekam na Twój kontakt!💜
          </p>
        </div>

        <div className="laptop:pl-10">
          <h3 className="text-white text-2xl">Formularz kontaktowy</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
