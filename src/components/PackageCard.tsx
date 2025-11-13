import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface PackageCardProps {
  name: string;
  price: string;
  period: string;
  channels: string;
  quality: string;
  features: string[];
  popular?: boolean;
  gradient: string;
}

const PackageCard = ({
  name,
  price,
  period,
  channels,
  quality,
  features,
  popular,
  gradient,
}: PackageCardProps) => {
  const handleSubscribe = () => {
    const message = `أرغب+بالاشتراك+في+IPTV+الباقة+${encodeURIComponent(name)}`;
    window.open(`https://wa.me/966542881139?text=${message}`, "_blank");
  };

  return (
    <Card
      className={`relative p-6 bg-gradient-to-br ${gradient} border-2 ${
        popular ? "border-neon-red scale-105" : "border-border"
      } hover:scale-110 transition-all duration-300 hover:shadow-2xl`}
    >
      {popular && (
        <div className="absolute -top-4 right-1/2 transform translate-x-1/2 bg-neon-red text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          الأكثر طلباً
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{name}</h3>
        <div className="text-4xl font-bold text-neon-red mb-2">{price}</div>
        <p className="text-muted-foreground">{period}</p>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
          <span className="text-foreground">عدد القنوات</span>
          <span className="font-bold text-neon-blue">{channels}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
          <span className="text-foreground">جودة البث</span>
          <span className="font-bold text-neon-purple">{quality}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="text-neon-red flex-shrink-0" size={20} />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        onClick={handleSubscribe}
        className="w-full bg-gradient-to-r from-neon-red to-neon-purple hover:from-neon-red/80 hover:to-neon-purple/80 text-white font-bold text-lg py-6 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        اشتري الآن
      </Button>
    </Card>
  );
};

export default PackageCard;
