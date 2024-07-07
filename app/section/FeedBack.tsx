import HoverImage from "../components/HoverImage";
import FeedbackMarquee from "../components/ui/Marquee-card";
const Feedback = () => {
  return (
    <>
      <section
        id="menu"
        className="bg-neutral-950 p-4 md:p-8 py-8 lg:py-12 pt-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="Secondary-Font mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Reviews
            </h2>
            <div className="text-base sm:text-lg lg:text-xl">
              Discover what makes us exceptional.
            </div>
          </div>
        </div>
      </section>
      <FeedbackMarquee></FeedbackMarquee>
    </>
  );
};
export default Feedback;
