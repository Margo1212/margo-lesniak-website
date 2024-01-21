export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};
export type FaqSectionProps = {
  faq: FAQItem[];
};
