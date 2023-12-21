import { ContactForm } from "@lib/components/ContactForm/ContactForm";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import type { Metadata } from "next";
export const revalidate = 10;

export const metadata: Metadata = {
  title: "",
  description:
    "",
};

export default async function Page() {
 


  return (
    <section className="grid grid-cols-2 nw-full h-full py-4 px-10 desktop:px-20 bg-main-bg laptop:py-14">
  
          
        
        
          <div className="flex flex-col gap-y-5">
              <h2 className="text-white text-4xl">Skontaktuj się ze mną</h2>
              <p className="text-text">Cieszę się, że zainteresowałeś/aś się moimi usługami! Jeśli masz pytania, potrzebujesz dodatkowych informacji lub jesteś gotów/a rozpocząć współpracę, jestem tutaj, aby Ci pomóc. Skorzystaj z poniższych danych kontaktowych lub wypełnij formularz, a ja postaram się odpowiedzieć najszybciej, jak to możliwe.</p>
              <p className="flex gap-x-3 text-secondary/80"><MailOutlineIcon sx={{ color: "rgb(54 255 181 / 0.8)" }} />marharytalesniak@gmail.com</p>
              <p className="flex gap-x-3 text-secondary/80"><ContactPhoneIcon sx={{ color: "rgb(54 255 181 / 0.8)" }} />+48576629372</p>
              <p className="text-white font-medium text-lg  mt-5">Nie wahaj się skontaktować ze mną w sprawie:</p>
              <ul className="list-image-[url(../../public/star.svg)] list-inside space-y-4">
                  <li className="text-text font-medium">Pytań dotyczących współpracy;</li>
                  <li className="text-text font-medium">Indywidualnych potrzeb związanych z usługami;</li>
                   <li className="text-text font-medium">Konsultacji dotyczących projektów.</li>
              </ul>
              <p className="text-white">Jestem gotowa pomóc Ci w osiągnięciu celów online i stworzeniu wyjątkowej obecności w sieci. Czekam na Twój kontakt!💜</p>
          </div>          
            
        
          <div className="px-14">
              <h3 className="font-light text-2xl"></h3>
              <ContactForm />
              

          </div>
          
        
     
    </section>
  );
}