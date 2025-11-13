import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "ما هو IPTV؟",
      answer:
        "IPTV هو اختصار لـ Internet Protocol Television، وهي تقنية تتيح لك مشاهدة القنوات التلفزيونية عبر الإنترنت بدلاً من البث التقليدي. توفر لك العروسي - IPTV أكثر من 10,000 قناة بجودة عالية.",
    },
    {
      question: "ما هي الأجهزة المدعومة؟",
      answer:
        "خدمتنا تدعم جميع الأجهزة تقريباً: Smart TV (Samsung, LG, Sony)، Android و iOS (الهواتف والتابلت)، Windows و Mac، بالإضافة إلى أجهزة Android Box و Fire Stick.",
    },
    {
      question: "هل يوجد تجربة مجانية؟",
      answer:
        "نعم! نوفر تجربة مجانية لمدة 24 ساعة كاملة لجميع الباقات. يمكنك تجربة الخدمة والتأكد من جودتها قبل الاشتراك.",
    },
    {
      question: "كيف يتم التفعيل؟",
      answer:
        "بعد اختيار الباقة والتواصل معنا عبر واتساب، سنرسل لك تعليمات التفعيل خلال دقائق. العملية بسيطة جداً ويمكننا مساعدتك في كل خطوة.",
    },
    {
      question: "ما هي جودة البث المتوفرة؟",
      answer:
        "نوفر جودات متعددة: SD, HD, Full HD, 4K، وحتى 8K في الباقة الماسية. جودة البث تعتمد على سرعة الإنترنت لديك والباقة المختارة.",
    },
    {
      question: "هل تدعمون القنوات الرياضية؟",
      answer:
        "نعم بالتأكيد! نوفر جميع القنوات الرياضية الشهيرة مثل beIN Sports, SSC, MBC, وغيرها من القنوات الرياضية العربية والعالمية.",
    },
    {
      question: "ما هي سرعة الإنترنت المطلوبة؟",
      answer:
        "نوصي بسرعة إنترنت لا تقل عن 10 Mbps لجودة HD، و20 Mbps أو أكثر لجودة 4K. سرعة أعلى تضمن تجربة مشاهدة أفضل دون تقطيع.",
    },
    {
      question: "هل يمكنني استخدام حساب واحد على عدة أجهزة؟",
      answer:
        "نعم، يمكنك استخدام حسابك على عدة أجهزة. عدد الأجهزة المسموح يختلف حسب الباقة المختارة. تواصل معنا لمعرفة التفاصيل.",
    },
    {
      question: "كيف يمكنني الحصول على الدعم الفني؟",
      answer:
        "فريق الدعم الفني متاح 24/7 عبر واتساب. سنساعدك في أي مشكلة تقنية أو استفسار في أي وقت.",
    },
    {
      question: "هل يمكنني تغيير الباقة بعد الاشتراك؟",
      answer:
        "نعم، يمكنك الترقية أو تغيير الباقة في أي وقت. تواصل معنا وسنساعدك في اختيار الباقة الأنسب لاحتياجاتك.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "نقبل عدة طرق للدفع: تحويل بنكي، Western Union, MoneyGram، والعملات الرقمية. تواصل معنا لمعرفة الطريقة الأنسب لك.",
    },
    {
      question: "هل الخدمة قانونية وآمنة؟",
      answer:
        "نعم، نحن نقدم خدمة IPTV قانونية ومرخصة. جميع بياناتك محمية ومشفرة، ونحن ملتزمون بخصوصية عملائنا.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-red via-neon-purple to-neon-blue bg-clip-text text-transparent">
              الأسئلة الشائعة
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-4 bg-background/50"
              >
                <AccordionTrigger className="text-right text-lg font-bold hover:text-neon-red transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-gradient-to-br from-neon-red/10 via-neon-purple/10 to-neon-blue/10 border border-border rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-neon-red">لم تجد إجابة لسؤالك؟</span>
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            فريقنا جاهز لمساعدتك في أي استفسار
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://wa.me/966542881139?text=لدي+سؤال+حول+خدمات+IPTV",
                "_blank"
              )
            }
            size="lg"
            className="bg-gradient-to-r from-neon-red to-neon-purple hover:from-neon-red/80 hover:to-neon-purple/80 text-white font-bold text-lg px-8 py-6"
          >
            <MessageCircle className="ml-2" />
            تواصل معنا الآن
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
