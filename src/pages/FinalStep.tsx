import { motion } from "framer-motion";
import appleMusicLogo from "@/assets/apple-music-logo.png";
import ProgressBar from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";

const FinalStep = () => {
  const steps = [
    'Click on "Apply Now"',
    "Enter your email and basic details",
    "Complete your job application",
    "Become a Music reviewer",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-shrink-0">
        <div className="pt-6 pb-4 px-4">
          <img
            src={appleMusicLogo}
            alt="Apple Music"
            className="h-16 md:h-20 mx-auto object-contain"
          />
        </div>
        <ProgressBar currentStep={5} totalSteps={5} />
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg"
        >
          <div className="bg-card rounded-2xl shadow-lg p-6 md:p-8 border border-border">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
              Follow the steps
            </h1>

            <div className="space-y-4 md:space-y-5 mb-6 md:mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 md:gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm md:text-base">
                    {index + 1}
                  </div>
                  <p className="text-foreground pt-1 text-base md:text-lg leading-relaxed">{step}</p>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() =>
                window.open(
                  "https://usetrk.com/aff_c?offer_id=2976&aff_id=13785&source=apmusic",
                  "_blank"
                )
              }
              className="w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Apply Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FinalStep;
