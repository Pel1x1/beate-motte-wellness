import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import wellnessTreatment from "@/assets/wellness-treatment1.webp";

const contactSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа").max(100),
  email: z.string().email("Введите корректный email").max(255),
  phone: z.string().min(10, "Введите корректный номер телефона").max(20),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
  const TELEGRAM_BOT_TOKEN = '8580465462:AAHGumG12ubCoK89hb9lsFTr-zM5tS-c6cM';
  const TELEGRAM_CHAT_ID = '827776829';

  const text = `
Новое сообщение с сайта:

Имя: ${data.name}
Email: ${data.email}
Телефон: ${data.phone}
Сообщение:
${data.message}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    const resData = await response.json();

    if (!resData.ok) {
      throw new Error(resData.description || 'Ошибка отправки');
    }

    toast.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    reset();
  } catch (error) {
    toast.error('Ошибка при отправке сообщения. Попробуйте позже.');
    console.error(error);
  }
};

  const contactInfo = [
    /*{
      icon: Phone,
      title: "Телефон",
      content: "+7 (123) 456-78-90",
    },*/
    {
      icon: Mail,
      title: "Email",
      content: "info@jungebadmoscow.ru",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-accent">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Запишитесь на консультацию через Telegram или Email
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 animate-fade-in">
          <Card className="overflow-hidden shadow-medium">
            <img 
            src={wellnessTreatment} 
            alt="Wellness терапия" 
            className="w-full h-[400px] object-cover"
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium animate-fade-in hover:shadow-soft transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Записаться на прием
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Иван Иванов"
                  className="mt-2"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="mail@example.com"
                  className="mt-2"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="+7 (123) 456-78-90"
                  className="mt-2"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="message">Сообщение *</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Расскажите о ваших потребностях или задайте вопрос..."
                  className="mt-2 min-h-32"
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full shadow-medium" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all hover-scale">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Важная информация
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Просьба записываться заранее для гарантии доступного времени</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Отмена записи возможна не позднее чем за 24 часа</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Первичная консультация проводится бесплатно при записи на процедуру</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Способы связи
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Мы используем современные мессенджеры для вашего удобства:
              </p>
              <div className="flex flex-wrap gap-2">
                {/*<a
                  href="https://wa.me/your_number" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-card text-sm text-foreground border border-border hover:bg-primary hover:text-white transition-colors"
                >
                  WhatsApp
                </a>*/}
                <a
                  href="https://t.me/RomanovaOAl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-card text-sm text-foreground border border-border hover:bg-primary hover:text-white transition-colors"
                >
                  Telegram
                </a>
                <a
                  href="mailto:info@jungebadmoscow.ru"
                  className="px-3 py-1 rounded-full bg-card text-sm text-foreground border border-border hover:bg-primary hover:text-white transition-colors"
                >
                  Email
                </a>
              </div>

            </Card>
          </div>
        </div>

        {/* Map Section 
        <Card className="mt-12 p-8 shadow-soft max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Как нас найти
          </h2>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p>Карта местоположения</p>
              <p className="text-sm mt-2">Musterstraße 123, 12345 Berlin</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Удобная транспортная доступность. Парковка доступна рядом с входом.
          </p>
        </Card>*/}
      </div>
    </div>
  );
};

export default Contact;
