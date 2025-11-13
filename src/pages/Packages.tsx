import PackageCard from "@/components/PackageCard";

const Packages = () => {
  const packages = [
    {
      name: "الباقة الشهرية",
      price: "$15",
      period: "شهر واحد",
      channels: "+10,000",
      quality: "HD & 4K",
      features: [
        "جميع القنوات العربية والعالمية",
        "دعم جميع الأجهزة",
        "جودة بث عالية HD",
        "تجربة مجانية 24 ساعة",
        "دعم فني 24/7",
      ],
      gradient: "from-background to-card",
    },
    {
      name: "الباقة نصف السنوية",
      price: "$70",
      period: "6 أشهر",
      channels: "+10,000",
      quality: "HD & 4K",
      features: [
        "جميع القنوات العربية والعالمية",
        "دعم جميع الأجهزة",
        "جودة بث عالية HD و 4K",
        "تجربة مجانية 24 ساعة",
        "دعم فني 24/7",
        "خصم 20%",
      ],
      popular: true,
      gradient: "from-neon-red/10 to-neon-purple/10",
    },
    {
      name: "الباقة السنوية",
      price: "$120",
      period: "سنة كاملة",
      channels: "+10,000",
      quality: "HD & 4K",
      features: [
        "جميع القنوات العربية والعالمية",
        "دعم جميع الأجهزة",
        "جودة بث عالية HD و 4K",
        "تجربة مجانية 24 ساعة",
        "دعم فني 24/7 مميز",
        "خصم 33%",
        "هدية خاصة",
      ],
      gradient: "from-background to-card",
    },
    {
      name: "الباقة الماسية",
      price: "$200",
      period: "سنتين",
      channels: "+15,000",
      quality: "4K & 8K",
      features: [
        "جميع القنوات العربية والعالمية",
        "قنوات حصرية إضافية",
        "دعم جميع الأجهزة",
        "جودة بث استثنائية 4K و 8K",
        "تجربة مجانية أسبوع",
        "دعم فني VIP",
        "خصم 40%",
        "هدايا حصرية",
      ],
      gradient: "from-neon-blue/10 to-neon-purple/10",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue bg-clip-text text-transparent">
              باقات الاشتراك
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر الباقة المناسبة لك واستمتع بأفضل تجربة مشاهدة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/50 border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-neon-red">
              ملاحظة هامة
            </h3>
            <p className="text-muted-foreground text-lg">
              جميع الباقات تشمل تجربة مجانية ودعم فني متواصل. يمكنك الترقية أو تغيير الباقة في أي وقت.
              للاستفسارات، تواصل معنا عبر واتساب أو تيليجرام.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
