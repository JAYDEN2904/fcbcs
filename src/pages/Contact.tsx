import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import { MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're here to answer any questions you may have about our programs,
              admissions process, or general inquiries.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-white shadow-lg p-8">
              <h2 className="text-xl font-semibold mb-4">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Faith Community Baptist Complex of Schools</p>
                    <p className="text-gray-600">2 Common Street Madina, Accra</p>
                    {/* <p className="text-gray-600">Learning City, LC 12345</p> */}
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-2">
                <iframe
                  title="School Location"
                  className="w-full h-64 rounded-lg"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.7374668465096!2d-0.1740060!3d5.677660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnMzkuNiJOIDDCsDEwJzI2LjQiVw!5e0!3m2!1sen!2sgh!4v1629890000000!5m2!1sen!2sgh"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=5.677660,-0.174006&destination_place_id=Faith+Community+Baptist+Complex+of+Schools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  Get Directions
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}