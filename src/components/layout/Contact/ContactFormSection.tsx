import React from "react";

const ContactFormSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            
            <div>
              
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0234B4]"
              />
            </div>

            
            <div>
              
              <input
                type="text"
                placeholder="Tus apellidos"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0234B4]"
              />
            </div>

            
            <div>
             
              <input
                type="tel"
                placeholder="Tu teléfono"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0234B4]"
              />
            </div>

            
            <div>
              
              <input
                type="email"
                placeholder="Tu email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0234B4]"
              />
            </div>

            
            <div className="md:col-span-2">
              
              <textarea
                rows={5}
                placeholder="Escribe tu mensaje"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#0234B4]"
              ></textarea>
            </div>

           
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="rounded-full bg-[#0234B4] px-8 py-3 text-white font-medium hover:bg-[#0040c2] transition-colors"
              >
                Enviar mensaje
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
