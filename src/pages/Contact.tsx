import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("الرجاء ملء جميع الحقول");
      return;
    }

    const whatsappMessage = `الاسم: ${formData.name}%0aالبريد: ${formData.email}%0aالرسالة: ${formData.message}`;
    window.open(`https://wa.me/966542881139?text=${whatsappMessage}`, "_blank");
    
    toast.success("تم إرسال رسالتك بنجاح!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue bg-clip-text text-transparent">
              اتصل بنا
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا لمساعدتك! تواصل معنا في أي وقت
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-neon-red">
              أرسل لنا رسالة
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  الاسم الكامل
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="أدخل اسمك"
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  البريد الإلكتروني
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="example@email.com"
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div>
                <label className="block text-foreground mb-2 font-semibold">
                  الرسالة
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="اكتب رسالتك هنا..."
                  rows={6}
                  className="bg-background border-border text-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-red to-neon-purple hover:from-neon-red/80 hover:to-neon-purple/80 text-white font-bold text-lg py-6"
              >
                <MessageCircle className="ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-neon-blue">
                معلومات التواصل
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-red/20 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-neon-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">واتساب</h3>
                    <a
                      href="https://wa.me/966542881139"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-neon-red transition-colors"
                    >
                      +966 542 881 139
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-purple/20 rounded-lg">
                    <Mail className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                    <a
                      href="mailto:info@alaroosi-iptv.com"
                      className="text-muted-foreground hover:text-neon-purple transition-colors"
                    >
                      info@alaroosi-iptv.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neon-red/10 via-neon-purple/10 to-neon-blue/10 border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-neon-purple">
                ساعات العمل
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span>الدعم الفني:</span>
                  <span className="font-bold text-neon-red">24/7</span>
                </p>
                <p className="flex justify-between">
                  <span>خدمة العملاء:</span>
                  <span className="font-bold text-neon-blue">24/7</span>
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-neon-red">
                اشترك الآن
              </h3>
              <p className="text-muted-foreground mb-4">
                تواصل معنا مباشرة عبر واتساب للاشتراك والحصول على تجربة مجانية
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/966542881139?text=أرغب+بالاشتراك+في+IPTV",
                    "_blank"
                  )
                }
                className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white font-bold"
              >
                <MessageCircle className="ml-2" />
                تواصل عبر واتساب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
