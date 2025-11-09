import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  GraduationCap,
  School,
  Heart,
  Brain,
  Linkedin,
  Instagram,
} from "lucide-react";
import profilePic from "../assets/myphoto.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Back to Home Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* About Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About the Creator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn more about the person behind this stress management
                platform
              </p>
            </div>

            <div className="bg-gradient-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-soft">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={profilePic}
                    alt="Aryan Raval"
                    className="rounded-xl w-full h-auto 8 md:w-64 md:h-64 object-contain border-2 border-border/50"
                  />
                </div>

                <div className="flex-grow">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Aryan Raval
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Currently Pursuing
                        </h3>
                        <p className="text-muted-foreground">
                          Master's in Psychiatric Nursing at Manikaka Topawala
                          Institute of Nursing, Charotar University of Science &
                          Technology (CHARUSAT)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <School className="h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Education
                        </h3>
                        <p className="text-muted-foreground">B.Sc. Nursing</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Heart className="h-5 w-5 text-calm mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Passion
                        </h3>
                        <p className="text-muted-foreground">
                          Promoting evidence-based mental health care, stress
                          management, and holistic well-being
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Brain className="h-5 w-5 text-warm mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Mission
                        </h3>
                        <p className="text-muted-foreground">
                          Creating accessible tools to help students manage
                          stress, improve focus, and find calm in their daily
                          lives through scientifically-backed techniques.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <a
                        href="https://www.linkedin.com/in/aryan-raval-98613b360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a
                        href="https://www.instagram.com/aryanraval_28?utm_source=qr&igsh=MXB6bzNhNGF5NGlyNA=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="mr-2 h-4 w-4" />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-center">
                  This platform was created with compassion and dedication to
                  support students in their journey toward better mental health
                  and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
