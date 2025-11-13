import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-red to-neon-purple bg-clip-text text-transparent mb-4">
              العروسي - IPTV
            </h3>
            <p className="text-muted-foreground">
              أفضل خدمة IPTV في الوطن العربي. استمتع بآلاف القنوات بجودة عالية على جميع أجهزتك.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-neon-blue">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-neon-red transition-colors">الرئيسية</a></li>
              <li><a href="/packages" className="text-muted-foreground hover:text-neon-red transition-colors">الباقات</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-neon-red transition-colors">من نحن</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-neon-red transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-neon-purple">تواصل معنا</h4>
            <a
              href="https://wa.me/966542881139"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-neon-blue/20 hover:bg-neon-blue/30 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]"
            >
              <MessageCircle size={20} />
              <span>واتساب</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2024 العروسي - IPTV. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
