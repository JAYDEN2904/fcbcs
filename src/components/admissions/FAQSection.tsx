import React from 'react';
import { FAQ } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What is the admission process?',
    answer: 'Our admission process includes submitting an application form, previous academic records, and attending an interview. We evaluate each student holistically.',
  },
  {
    id: 2,
    question: 'What are the tuition fees?',
    answer: 'Tuition fees vary by grade level. We offer various payment plans and financial aid options for eligible families.',
  },
  {
    id: 3,
    question: 'Are there scholarship opportunities?',
    answer: 'Yes, we offer merit-based and need-based scholarships. Applications are reviewed annually.',
  },
  {
    id: 4,
    question: 'What documents are required for admission?',
    answer: 'Required documents include birth certificate, previous school records, immunization records, and completed application form.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = React.useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq) => (
        <div key={faq.id} className="py-6">
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="flex w-full items-start justify-between text-left"
          >
            <span className="text-lg font-medium text-gray-900">
              {faq.question}
            </span>
            {openId === faq.id ? (
              <ChevronUp className="h-6 w-6 text-gray-400" />
            ) : (
              <ChevronDown className="h-6 w-6 text-gray-400" />
            )}
          </button>
          {openId === faq.id && (
            <p className="mt-4 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}