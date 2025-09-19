import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <main className="font-istok-web flex h-full text-primary">
      <div className="
          flex-1/3
          h-4/9
          sm:ml-10
          md:ml-10 
          lg:ml-14 
          xl:ml-16
          border-white border-2">
        <h1>Contact Me:</h1>
        <ul>
          <li>Phone: (123) 456-7890</li>
          <li>Email: 0V6Jz@example.com</li>
        </ul>

      </div>
      <div className="flex justify-center items-center flex-2/3 h-full border-white border-2">
        <ContactForm />
      </div>
    </main>
  )
}