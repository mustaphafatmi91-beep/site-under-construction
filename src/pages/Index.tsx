import { Settings, Mail, Clock } from "lucide-react";
import vitrisolLogo from "@/assets/vitrisol-logo-new.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center">
          <img 
            src={vitrisolLogo} 
            alt="Vitrisol" 
            className="h-12 w-auto"
          />
        </div>

        {/* Animated gear icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <Settings className="w-12 h-12 text-secondary animate-spin-slow" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-pulse-glow" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 animate-float">
          Site en maintenance
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-body leading-relaxed">
          Nous travaillons actuellement à améliorer notre site pour vous offrir
          une meilleure expérience. Nous serons bientôt de retour !
        </p>

        {/* Info cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <div className="flex items-center gap-3 bg-card px-6 py-4 rounded-lg border border-border shadow-sm">
            <Clock className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-medium">
              Retour prévu très prochainement
            </span>
          </div>
        </div>

        {/* Contact section */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="font-heading text-xl font-semibold text-primary mb-3">
            Besoin de nous contacter ?
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            Notre équipe reste disponible pour répondre à vos questions.
          </p>
          <a
            href="mailto:contact@vitrisol.com"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            Nous contacter
          </a>
        </div>

        {/* Footer */}
        <p className="mt-10 text-sm text-muted-foreground">
          © 2024 Vitrisol. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default Index;
