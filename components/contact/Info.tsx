import React from 'react';

function Info() {
  return (
    <div className="bg-secondary rounded-2xl w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight mb-4 sm:mb-6">
        Contact Info
      </h2>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col font-light space-y-2 sm:space-y-3">
          <div className="flex flex-col">
            <span className="font-bold text-lg">Tel:</span>
            <div className="flex flex-col">
              <span>+233 (0) 244 235 128</span>
              <span>+233 (0) 302 790 300</span>
              <span>+233 (0) 302 403 862</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-bold text-lg">Email:</span>
            <div className="flex flex-wrap gap-1">
              <span className="font-light">
                info@prosepservices.com
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-bold text-lg">
              Office Location:
            </span>
            <span className="font-light">
              Shalom Business Centre, Golf Hills St, Achimota
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6021372593173!2d-0.2269866!3d5.6256032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b4d9ee038b5%3A0xeabcb219178ad156!2sProsep%20Services%20Limited!5e0!3m2!1sen!2sgh!4v1751462050855!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
