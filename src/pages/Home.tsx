import { Button } from "@/components/ui/button";
import { Play, Tv, Smartphone, Monitor, Shield } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import channelsGrid from "@/assets/channels-grid.jpg";
import devicesImage from "@/assets/devices.jpg";

const Home = () => {
  const handleSubscribe = () => {
    window.open("https://wa.me/966542881139?text=أرغب+بالاشتراك+في+IPTV", "_blank");
  };

  const features = [
    {
      icon: <Tv className="w-12 h-12 text-neon-red" />,
      title: "+10,000 قناة",
      description: "آلاف القنوات العربية والعالمية",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-neon-blue" />,
      title: "جميع الأجهزة",
      description: "Smart TV, Android, iOS, PC",
    },
    {
      icon: <Monitor className="w-12 h-12 text-neon-purple" />,
      title: "جودة 4K",
      description: "بث عالي الجودة HD و 4K",
    },
    {
      icon: <Shield className="w-12 h-12 text-neon-red" />,
      title: "دعم 24/7",
      description: "دعم فني متواصل على مدار الساعة",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBanner})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            <span className="bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue bg-clip-text text-transparent">
              العروسي - IPTV
            </span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
            اشترك الآن واستمتع بأكثر من
          </p>
          <p className="text-4xl md:text-6xl font-bold mb-8 text-neon-red animate-glow">
            10,000+ قناة بجودة عالية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleSubscribe}
              size="lg"
              className="text-xl px-8 py-7 bg-gradient-to-r from-neon-red to-neon-purple hover:from-neon-red/80 hover:to-neon-purple/80 text-white font-bold shadow-2xl hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all duration-300 animate-glow"
            >
              <Play className="ml-2" />
              اشترك الآن
            </Button>
            <Button
              onClick={() => window.location.href = "/packages"}
              size="lg"
              variant="outline"
              className="text-xl px-8 py-7 border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/20 font-bold transition-all duration-300"
            >
              عرض الباقات
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-neon-red to-neon-purple bg-clip-text text-transparent">
              لماذا العروسي - IPTV؟
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-card to-background border border-border hover:border-neon-red transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
              >
                <div className="mb-4 animate-float">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  آلاف القنوات المباشرة
                </span>
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon-red rounded-full"></span>
                  قنوات رياضية - beIN Sports, SSC, MBC
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                  قنوات أفلام ومسلسلات - OSN, Netflix
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                  قنوات إخبارية وثقافية
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon-red rounded-full"></span>
                  قنوات الأطفال والكرتون
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={channelsGrid}
                alt="IPTV Channels"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={devicesImage}
                alt="Supported Devices"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-neon-purple to-neon-red bg-clip-text text-transparent">
                  شاهد على جميع أجهزتك
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                استمتع بالمشاهدة على أي جهاز تريد، في أي وقت ومن أي مكان
              </p>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon-red rounded-full"></span>
                  Smart TV - Samsung, LG, Sony
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                  Android & iOS - الهواتف والتابلت
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                  Windows & Mac - الكمبيوتر
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-neon-red/20 via-neon-purple/20 to-neon-blue/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            جرب مجاناً لمدة 24 ساعة
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            اشترك الآن واحصل على تجربة مجانية لمدة 24 ساعة كاملة
          </p>
          <Button
            onClick={handleSubscribe}
            size="lg"
            className="text-2xl px-12 py-8 bg-gradient-to-r from-neon-red to-neon-purple hover:from-neon-red/80 hover:to-neon-purple/80 text-white font-bold shadow-2xl hover:shadow-[0_0_50px_rgba(239,68,68,0.8)] transition-all duration-300 animate-glow"
          >
            ابدأ الآن
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
