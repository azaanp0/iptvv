import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-12 h-12" />, value: "50,000+", label: "عميل راضٍ" },
    { icon: <Award className="w-12 h-12" />, value: "10,000+", label: "قناة متاحة" },
    { icon: <Clock className="w-12 h-12" />, value: "24/7", label: "دعم متواصل" },
    { icon: <Shield className="w-12 h-12" />, value: "99.9%", label: "وقت التشغيل" },
  ];

  const advantages = [
    {
      title: "جودة استثنائية",
      description: "بث بجودة HD و 4K دون انقطاع أو تقطيع",
      color: "text-neon-red",
    },
    {
      title: "دعم شامل",
      description: "جميع الأجهزة - Smart TV, Android, iOS, PC",
      color: "text-neon-blue",
    },
    {
      title: "محتوى متنوع",
      description: "رياضة، أفلام، مسلسلات، أخبار، أطفال",
      color: "text-neon-purple",
    },
    {
      title: "تجربة مجانية",
      description: "24 ساعة كاملة لتجربة الخدمة مجاناً",
      color: "text-neon-red",
    },
    {
      title: "دعم فني",
      description: "فريق دعم محترف متاح 24/7",
      color: "text-neon-blue",
    },
    {
      title: "أسعار منافسة",
      description: "باقات متنوعة بأفضل الأسعار",
      color: "text-neon-purple",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue bg-clip-text text-transparent">
              من نحن
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            العروسي - IPTV هي المنصة الرائدة في تقديم خدمات IPTV في الوطن العربي. نفخر بتقديم 
            أفضل تجربة مشاهدة لعملائنا مع أكثر من 10,000 قناة بجودة عالية.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-card to-background border border-border text-center hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
            >
              <div className="flex justify-center mb-4 text-neon-red">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2 text-foreground">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            <span className="text-neon-blue">قصتنا</span>
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            <p>
              بدأت رحلتنا من شغف حقيقي بتوفير أفضل تجربة ترفيهية للعائلة العربية. 
              أدركنا أن المشاهدين يستحقون خدمة IPTV موثوقة وعالية الجودة بأسعار معقولة.
            </p>
            <p>
              اليوم، نخدم أكثر من 50,000 عميل راضٍ في جميع أنحاء الوطن العربي، ونستمر 
              في التطوير والتحسين لنقدم لكم أفضل ما في عالم البث المباشر.
            </p>
            <p>
              فريقنا المتخصص يعمل على مدار الساعة لضمان استقرار الخدمة وجودة البث، 
              مع دعم فني احترافي جاهز لمساعدتك في أي وقت.
            </p>
          </div>
        </div>

        {/* Advantages Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-neon-purple to-neon-red bg-clip-text text-transparent">
              مميزات خدمتنا
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-card to-background border border-border hover:border-neon-red transition-all duration-300 hover:scale-105"
              >
                <h3 className={`text-2xl font-bold mb-3 ${advantage.color}`}>
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 bg-gradient-to-br from-neon-red/10 via-neon-purple/10 to-neon-blue/10 border border-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-neon-red">رؤيتنا</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نسعى لأن نكون الخيار الأول لكل عائلة عربية تبحث عن تجربة ترفيهية متكاملة، 
            من خلال تقديم أفضل خدمات IPTV بجودة عالية وأسعار منافسة ودعم فني استثنائي.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
