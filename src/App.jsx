import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Book from "./components/Book";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  X,
  Star,
  Globe,
  Users,
  Zap,
  Heart,
  Shield,
  Target,
  Award,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Sparkles,
  Rocket,
  Eye,
  ArrowRight,
  FileText,
  Briefcase,
  Settings,
  BookOpen,
  Image,
  TrendingUp,
  Mic,
  Camera,
  PenTool,
  BarChart2,
  Languages,
} from "lucide-react";
import { useI18n } from "./i18n.js";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize i18n
  const { currentLanguage, changeLanguage, t, isRTL, availableLanguages } =
    useI18n();

  // Memoized navigation items to prevent re-renders
  const navItems = useMemo(
    () => [
      { key: "home", label: t("nav.home") },
      { key: "services", label: t("nav.services") },
      { key: "about", label: t("nav.about") },
      { key: "pricing", label: t("nav.pricing") },
      { key: "contact", label: t("nav.contact") },
    ],
    [t]
  );

  // Page transition with loading effect - optimized
  const navigateToPage = useCallback(
    (page) => {
      if (page === currentPage) return;

      setIsLoading(true);
      setIsMenuOpen(false);

      // Reduced timeout for better UX
      setTimeout(() => {
        setCurrentPage(page);
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 200);
    },
    [currentPage]
  );

  // Simplified visibility effect
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-in-professional");
    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.classList.add("is-visible");
    });
  }, [currentPage]);

  // Optimized Language Selector Component
  const LanguageSelector = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const languageNames = useMemo(
      () => ({
        de: "Deutsch",
        en: "English",
      }),
      []
    );

    const handleLanguageSelect = useCallback(
      (lang) => {
        if (lang !== currentLanguage) {
          changeLanguage(lang);
        }
        setIsDropdownOpen(false);
      },
      []
    );

    // Optimized click outside handler
    useEffect(() => {
      if (!isDropdownOpen) return;

      const handleClick = (e) => {
        if (!e.target.closest(".language-selector-container")) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener("click", handleClick, { passive: true });
      return () => document.removeEventListener("click", handleClick);
    }, [isDropdownOpen]);

    return (
      <div className="relative language-selector-container">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
          className="nav-link-professional flex items-center space-x-2 text-professional-accent hover:text-professional-accent/80 focus:outline-none"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          <Languages className="w-4 h-4" />
          <span className="language-display">
            {languageNames[currentLanguage]}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`absolute top-full right-0 mt-2 language-dropdown rounded-lg shadow-lg z-50 min-w-[120px] transition-all duration-200 ${
            isDropdownOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageSelect(lang);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-professional-accent/10 transition-colors first:rounded-t-lg last:rounded-b-lg focus:outline-none focus:bg-professional-accent/10 ${
                currentLanguage === lang
                  ? "bg-professional-accent/10 text-professional-accent"
                  : "text-professional-accent/70"
              }`}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Optimized Animated Counter Component
  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      // Only animate on desktop to save mobile resources
      if (window.innerWidth < 768) {
        setCount(parseInt(end.replace(/\D/g, "")));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
              const startTime = Date.now();
              const endValue = parseInt(end.replace(/\D/g, ""));

              const updateCounter = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 3); // Simplified easing
                const currentCount = Math.floor(easeOutQuart * endValue);

                setCount(currentCount);

                if (progress < 1) {
                  requestAnimationFrame(updateCounter);
                } else {
                  setCount(endValue);
                }
              };

              requestAnimationFrame(updateCounter);
            }
          });
        },
        { threshold: 0.5 }
      );

      const currentRef = counterRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [end, duration, hasAnimated]);

    return (
      <div
        ref={counterRef}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-professional-accent mb-2"
      >
        {count}
        {suffix}
      </div>
    );
  };

  // Memoized static data to prevent re-creation
  const services = useMemo(
    () => [
      {
        id: "web-design",
        icon: Rocket,
        title: t("services.webDesign.title"),
        shortDesc: t("services.webDesign.shortDesc"),
        fullDesc: t("services.webDesign.fullDesc"),
        process: [
          {
            title: t("services.process.conception.title"),
            description: t("services.process.conception.description"),
          },
          {
            title: t("services.process.design.title"),
            description: t("services.process.design.description"),
          },
          {
            title: t("services.process.programming.title"),
            description: t("services.process.programming.description"),
          },
          {
            title: t("services.process.contentManagement.title"),
            description: t("services.process.contentManagement.description"),
          },
          {
            title: t("services.process.testing.title"),
            description: t("services.process.testing.description"),
          },
          {
            title: t("services.process.launch.title"),
            description: t("services.process.launch.description"),
          },
        ],
      },
      {
        id: "branding",
        icon: Sparkles,
        title: t("services.branding.title"),
        shortDesc: t("services.branding.shortDesc"),
        fullDesc: t("services.branding.fullDesc"),
        process: [
          {
            title: t("services.process.analysis.title"),
            description: t("services.process.analysis.description"),
          },
          {
            title: t("services.process.brandIdentity.title"),
            description: t("services.process.brandIdentity.description"),
          },
          {
            title: t("services.process.designDevelopment.title"),
            description: t("services.process.designDevelopment.description"),
          },
          {
            title: t("services.process.implementation.title"),
            description: t("services.process.implementation.description"),
          },
          {
            title: t("services.process.evaluation.title"),
            description: t("services.process.evaluation.description"),
          },
        ],
      },
      {
        id: "online-marketing",
        icon: TrendingUp,
        title: t("services.onlineMarketing.title"),
        shortDesc: t("services.onlineMarketing.shortDesc"),
        fullDesc: t("services.onlineMarketing.fullDesc"),
        process: [
          {
            title: t("services.process.goalDefinition.title"),
            description: t("services.process.goalDefinition.description"),
          },
          {
            title: t("services.process.strategicPlanning.title"),
            description: t("services.process.strategicPlanning.description"),
          },
          {
            title: t("services.process.contentCreation.title"),
            description: t("services.process.contentCreation.description"),
          },
          {
            title: t("services.process.campaignImplementation.title"),
            description: t(
              "services.process.campaignImplementation.description"
            ),
          },
          {
            title: t("services.process.monitoring.title"),
            description: t("services.process.monitoring.description"),
          },
          {
            title: t("services.process.reporting.title"),
            description: t("services.process.reporting.description"),
          },
        ],
      },
      {
        id: "social-media-marketing",
        icon: BarChart2,
        title: t("services.socialMediaMarketing.title"),
        shortDesc: t("services.socialMediaMarketing.shortDesc"),
        fullDesc: t("services.socialMediaMarketing.fullDesc"),
        process: [
          {
            title: t("services.process.goalSetting.title"),
            description: t("services.process.goalSetting.description"),
          },
          {
            title: t("services.process.strategyDevelopment.title"),
            description: t("services.process.strategyDevelopment.description"),
          },
          {
            title: t("services.process.contentCreation.title"),
            description: t("services.process.contentCreation.description"),
          },
          {
            title: t("services.process.campaignManagement.title"),
            description: t("services.process.campaignManagement.description"),
          },
          {
            title: t("services.process.optimization.title"),
            description: t("services.process.optimization.description"),
          },
          {
            title: t("services.process.feedback.title"),
            description: t("services.process.feedback.description"),
          },
        ],
      },
      {
        id: "podcast-production",
        icon: Mic,
        title: t("services.podcastProduction.title"),
        shortDesc: t("services.podcastProduction.shortDesc"),
        fullDesc: t("services.podcastProduction.fullDesc"),
        process: [
          {
            title: t("services.process.conceptionPlanning.title"),
            description: t("services.process.conceptionPlanning.description"),
          },
          {
            title: t("services.process.editorialSupport.title"),
            description: t("services.process.editorialSupport.description"),
          },
          {
            title: t("services.process.production.title"),
            description: t("services.process.production.description"),
          },
          {
            title: t("services.process.postProduction.title"),
            description: t("services.process.postProduction.description"),
          },
          {
            title: t("services.process.hosting.title"),
            description: t("services.process.hosting.description"),
          },
          {
            title: t("services.process.marketing.title"),
            description: t("services.process.marketing.description"),
          },
        ],
      },
      {
        id: "photo-video-production",
        icon: Camera,
        title: t("services.photoVideoProduction.title"),
        shortDesc: t("services.photoVideoProduction.shortDesc"),
        fullDesc: t("services.photoVideoProduction.fullDesc"),
        process: [
          {
            title: t("services.process.conceptPlanning.title"),
            description: t("services.process.conceptPlanning.description"),
          },
          {
            title: t("services.process.editorialContentSupport.title"),
            description: t(
              "services.process.editorialContentSupport.description"
            ),
          },
          {
            title: t("services.process.productionPhase.title"),
            description: t("services.process.productionPhase.description"),
          },
          {
            title: t("services.process.postProductionEditing.title"),
            description: t(
              "services.process.postProductionEditing.description"
            ),
          },
          {
            title: t("services.process.publication.title"),
            description: t("services.process.publication.description"),
          },
        ],
      },
    ],
    [t]
  );

  const priceList = useMemo(
    () => [
      { name: t("pricing.frontCover"), price: "€2000" },
      { name: t("pricing.backCover"), price: "€1800" },
      { name: t("pricing.insideFrontCover"), price: "€1600" },
      { name: t("pricing.insideBackCover"), price: "€1500" },
      { name: t("pricing.fullPage"), price: "€1200" },
      { name: t("pricing.halfPage"), price: "€800" },
      { name: t("pricing.quarterPage"), price: "€500" },
      { name: t("pricing.businessCard"), price: "€200" },
    ],
    [t]
  );

  const companyValues = useMemo(
    () => [
      {
        icon: Heart,
        title: t("about.values.respect.title"),
        description: t("about.values.respect.description"),
      },
      {
        icon: Shield,
        title: t("about.values.credibility.title"),
        description: t("about.values.credibility.description"),
      },
      {
        icon: Zap,
        title: t("about.values.innovation.title"),
        description: t("about.values.innovation.description"),
      },
      {
        icon: Target,
        title: t("about.values.excellence.title"),
        description: t("about.values.excellence.description"),
      },
      {
        icon: Award,
        title: t("about.values.achievement.title"),
        description: t("about.values.achievement.description"),
      },
    ],
    [t]
  );

  const statsData = useMemo(
    () => [
      { number: "500", label: t("about.stats.projects"), suffix: "+" },
      { number: "200", label: t("about.stats.clients"), suffix: "+" },
      { number: "10", label: t("about.stats.experience"), suffix: "+" },
      { number: "25", label: t("about.stats.awards"), suffix: "+" },
    ],
    [t]
  );

  // Loading Overlay Component
  const LoadingOverlay = () => {
    if (!isLoading) return null;

    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    );
  };

  // Optimized Navigation Component
  const Navigation = () => (
    <nav
      className={`nav-professional fixed top-0 left-0 right-0 z-50 ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigateToPage("home")}
              className="text-xl md:text-2xl font-bold text-professional-accent hover:text-professional-accent/80 transition-colors"
            >
              Four Seasons
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => navigateToPage(item.key)}
                className={`nav-link-professional ${
                  currentPage === item.key ? "active" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="nav-link-professional text-professional-accent hover:text-professional-accent/80"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden language-dropdown border-t border-professional-accent/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigateToPage(item.key)}
                  className={`nav-link-professional block w-full text-left text-professional-accent hover:text-professional-accent/80 hover:bg-professional-accent/5 px-3 py-2 rounded-md transition-colors ${
                    currentPage === item.key ? "bg-professional-accent/10" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Optimized Home Page Component
  const HomePage = () => (
    <div className="page-container">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 md:py-20">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Hero Text */}
          <div className="animate-in-professional text-center lg:text-left mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-professional-heading mb-4 md:mb-6 leading-tight">
              {t("hero.title")}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-professional-muted mb-6 md:mb-8 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <p className="text-base md:text-lg text-professional mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>
            <p className="text-sm text-professional-muted mb-6 italic">
              {t("hero.underDevelopment")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4">
              <Button
                onClick={() => navigateToPage("contact")}
                className="btn-professional px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              >
                <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t("hero.cta")}
              </Button>
              <Button
                onClick={() => navigateToPage("services")}
                variant="outline"
                className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold border-professional-accent/30 text-professional-accent hover:bg-professional-accent/10"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                {t("hero.learnMore")}
              </Button>
            </div>
          </div>

          {/* Book Component */}
          <div className="container max-w-[1200px] mx-auto mt-12">
            <Book />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 md:mb-16 animate-in-professional`}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-professional-heading mb-4 md:mb-6">
              {t("services.title")}
            </h2>
            <p className="text-lg md:text-xl text-professional-muted max-w-4xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="professional-card-glow p-6 md:p-8 interactive-card animate-in-professional"
                onClick={() => navigateToPage("services")}
              >
                <service.icon className="h-10 w-10 md:h-12 md:w-12 text-professional-accent mb-4 md:mb-6" />
                <h3 className="text-lg md:text-xl font-bold text-professional mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-professional-muted leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                  {service.shortDesc}
                </p>
                <div className="flex items-center text-professional-accent font-medium text-sm md:text-base">
                  <span>{t("common.learnMore")}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="text-center animate-in-professional"
              >
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                <div className="text-professional-muted font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // Services Page Component
  const ServicesPage = () => (
    <div className="page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-24 md:pt-32">
        <div className={`text-center mb-12 md:mb-16 animate-in-professional`}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-professional-heading mb-4 md:mb-6">
            {t("services.title")}
          </h1>
          <p className="text-lg md:text-xl text-professional-muted max-w-4xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="professional-card-glow p-6 md:p-8 lg:p-12 animate-in-professional"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className={isRTL ? "text-right" : "text-left"}>
                  <service.icon className="h-12 w-12 md:h-16 md:w-16 text-professional-accent mb-4 md:mb-6" />
                  <h2 className="text-2xl md:text-3xl font-bold text-professional-accent mb-4 md:mb-6">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-professional-muted leading-relaxed mb-6 md:mb-8">
                    {service.fullDesc}
                  </p>
                  <Button
                    onClick={() => navigateToPage("contact")}
                    className="btn-professional px-4 md:px-6 py-2 md:py-3"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    {t("common.getStarted")}
                  </Button>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {service.process.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="bg-muted/20 p-3 md:p-4 rounded-lg"
                    >
                      <h4 className="font-semibold text-professional mb-2 text-sm md:text-base">
                        {step.title}
                      </h4>
                      <p className="text-professional-muted text-xs md:text-sm">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Pricing Page Component
  const PricingPage = () => (
    <div className="page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-24 md:pt-32">
        <div className={`text-center mb-12 md:mb-16 animate-in-professional`}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-professional-heading pb-6 md:pb-8">
            {t("pricing.title")}
          </h1>
          <p className="text-lg md:text-xl text-professional-muted max-w-4xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="professional-card-glow p-6 md:p-8 lg:p-12 animate-in-professional">
          <h2 className="text-2xl md:text-3xl font-bold text-professional-accent mb-6 md:mb-8 text-center">
            {t("pricing.advertising.title")}
          </h2>
          <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
            {priceList.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center border-b border-border/30 pb-3"
              >
                <span className="text-base md:text-lg text-professional">
                  {item.name}
                </span>
                <span className="text-base md:text-lg font-bold text-professional-accent">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="professional-card-glow p-6 md:p-8 lg:p-12 text-center animate-in-professional mt-12 md:mt-16">
          <h3 className="text-xl md:text-2xl font-bold text-professional mb-4">
            {t("pricing.cta.title")}
          </h3>
          <p className="text-professional-muted mb-6 max-w-2xl mx-auto text-sm md:text-base">
            {t("pricing.cta.description")}
          </p>
          <Button
            onClick={() => navigateToPage("contact")}
            className="btn-professional px-6 md:px-8 py-2 md:py-3"
          >
            <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            {t("pricing.cta.button")}
          </Button>
        </div>
      </div>
    </div>
  );

  // About Page Component
  const AboutPage = () => (
    <div className="page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-24 md:pt-32">
        <div className={`text-center mb-12 md:mb-16 animate-in-professional`}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-professional-heading mb-4 md:mb-6">
            {t("about.title")}
          </h1>
          <p className="text-lg md:text-xl text-professional-muted max-w-4xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        {/* Mission, Vision, Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          <div className="professional-card-glow p-6 md:p-8 animate-in-professional">
            <Eye className="h-10 w-10 md:h-12 md:w-12 text-professional-accent mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl font-bold text-professional-accent mb-3 md:mb-4">
              {t("about.vision.title")}
            </h2>
            <p className="text-professional-muted leading-relaxed text-sm md:text-base">
              {t("about.vision.description")}
            </p>
          </div>
          <div className="professional-card-glow p-6 md:p-8 animate-in-professional">
            <Target className="h-10 w-10 md:h-12 md:w-12 text-professional-accent mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl font-bold text-professional-accent mb-3 md:mb-4">
              {t("about.mission.title")}
            </h2>
            <p className="text-professional-muted leading-relaxed text-sm md:text-base">
              {t("about.mission.description")}
            </p>
          </div>
          <div className="professional-card-glow p-6 md:p-8 animate-in-professional md:col-span-2 lg:col-span-1">
            <Star className="h-10 w-10 md:h-12 md:w-12 text-professional-accent mb-4 md:mb-6" />
            <h2 className="text-xl md:text-2xl font-bold text-professional-accent mb-3 md:mb-4">
              {t("about.goals.title")}
            </h2>
            <p className="text-professional-muted leading-relaxed text-sm md:text-base">
              {t("about.goals.description")}
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="professional-card-glow p-6 md:p-8 lg:p-12 text-center mb-16 md:mb-20 animate-in-professional">
          <h2 className="text-2xl md:text-3xl font-bold text-professional-heading mb-4 md:mb-6">
            {t("about.team.title")}
          </h2>
          <p className="text-lg md:text-xl text-professional-muted max-w-4xl mx-auto">
            {t("about.team.description")}
          </p>
        </div>

        {/* Values */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-professional-heading mb-8 md:mb-12 animate-in-professional">
            {t("about.values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {companyValues.map((value) => (
              <div
                key={value.title}
                className="professional-card-glow p-4 md:p-6 text-center animate-in-professional"
              >
                <value.icon className="h-8 w-8 md:h-10 md:w-10 text-professional-accent mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-bold text-professional mb-2 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-professional-muted text-xs md:text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Contact Page Component
  const ContactPage = () => (
    <div className="page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pt-24 md:pt-32">
        <div className={`text-center mb-12 md:mb-16 animate-in-professional`}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-professional-heading mb-4 md:mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-lg md:text-xl text-professional-muted max-w-4xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 animate-in-professional">
            <div className="professional-card-glow p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-professional-accent mb-4 md:mb-6">
                {t("contact.manager.name")}
              </h2>
              <p className="text-base md:text-lg text-professional-muted mb-4 md:mb-6">
                {t("contact.manager.title")}
              </p>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    icon: Mail,
                    text: "info@fourseasons-deutschland.de",
                    label: t("contact.info.email"),
                  },
                  {
                    icon: Phone,
                    text: "+49 (0) 123 456 789",
                    label: t("contact.info.phone"),
                  },
                  {
                    icon: MapPin,
                    text: "Four Seasons Magazine - Deutschland",
                    label: t("contact.info.company"),
                  },
                ].map((contact) => (
                  <div
                    key={contact.text}
                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-muted/20 rounded-lg"
                  >
                    <contact.icon className="h-5 w-5 md:h-6 md:w-6 text-professional-accent flex-shrink-0" />
                    <div>
                      <div className="text-professional font-medium text-sm md:text-base">
                        {contact.text}
                      </div>
                      <div className="text-professional-muted text-xs md:text-sm">
                        {contact.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-in-professional">
            <div className="professional-card-glow p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-professional-accent mb-4 md:mb-6">
                {t("contact.form.title")}
              </h2>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-professional-muted mb-2">
                      {t("contact.form.firstName")} *
                    </label>
                    <input
                      type="text"
                      className="form-professional w-full px-3 md:px-4 py-2 md:py-3 rounded-lg text-sm md:text-base"
                      placeholder={t("contact.form.firstNamePlaceholder")}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-professional-muted mb-2">
                      {t("contact.form.lastName")} *
                    </label>
                    <input
                      type="text"
                      className="form-professional w-full px-3 md:px-4 py-2 md:py-3 rounded-lg text-sm md:text-base"
                      placeholder={t("contact.form.lastNamePlaceholder")}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-professional-muted mb-2">
                    {t("contact.form.email")} *
                  </label>
                  <input
                    type="email"
                    className="form-professional w-full px-3 md:px-4 py-2 md:py-3 rounded-lg text-sm md:text-base"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-professional-muted mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <select className="form-professional w-full px-3 md:px-4 py-2 md:py-3 rounded-lg text-sm md:text-base">
                    <option>{t("contact.form.subjects.advertising")}</option>
                    <option>{t("contact.form.subjects.partnership")}</option>
                    <option>{t("contact.form.subjects.general")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-professional-muted mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    rows="5"
                    className="form-professional w-full px-3 md:px-4 py-2 md:py-3 rounded-lg resize-none text-sm md:text-base"
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="btn-professional w-full py-3 md:py-4 text-base md:text-lg font-semibold"
                >
                  <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  {t("contact.form.send")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Page Router
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "pricing":
        return <PricingPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  // Memoized footer links
  const footerQuickLinks = useMemo(
    () => [
      { key: "about", label: t("nav.about") },
      { key: "services", label: t("nav.services") },
      { key: "pricing", label: t("nav.pricing") },
      { key: "contact", label: t("nav.contact") },
    ],
    [t]
  );

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${
        isRTL ? "rtl" : "ltr"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <LoadingOverlay />
      <Navigation />

      {renderCurrentPage()}

      {/* Optimized Footer */}
      <footer className="nav-professional py-12 md:py-9 border-t border-border/20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="md:col-span-1">
              <h3 className="text-lg md:text-xl font-bold text-professional-accent mb-3 md:mb-4">
                Four Seasons Magazine - Deutschland
              </h3>
              <p className="text-professional-muted leading-relaxed mb-4 text-sm md:text-base">
                {t("footer.description")}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-professional mb-3 md:mb-4 text-sm md:text-base">
                {t("footer.quickLinks")}
              </h4>
              <div className="space-y-2">
                {footerQuickLinks.map((link) => (
                  <button
                    key={link.key}
                    onClick={() => navigateToPage(link.key)}
                    className="block text-professional-muted hover:text-professional-accent transition-colors text-left text-sm hover:bg-professional-accent/5 px-2 py-1 rounded"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-professional mb-3 md:mb-4 text-sm md:text-base">
                {t("nav.services")}
              </h4>
              <div className="space-y-2">
                {services.slice(0, 4).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => navigateToPage("services")}
                    className="block text-professional-muted text-xs md:text-sm hover:text-professional-accent transition-colors text-left hover:bg-professional-accent/5 px-2 py-1 rounded"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Separator className="my-6 md:my-8 bg-border/20" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-professional-muted text-xs md:text-sm">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
