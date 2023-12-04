import { Title } from "@lib/components/Title/Title";

export const revalidate = 10;

export const ReviewsSection = () => {
  return (
    <section className="relative px-3 py-4 mb-10 desktop:px-52 laptop:py-14 flex flex-col gap-y-10">
      <Title>Co o nas mówią nasi klienci</Title>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-14 gap-y-6"></div>
    </section>
  );
};
