import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

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

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    toast.success("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      content: "Россия, Москва",
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (123) 123 45 67",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@beatemotte.de",
    },
    {
      icon: Clock,
      title: "Часы работы",
      content: "Пн-Пт: 9:00-20:00\nСб: 10:00-16:00\nВс: Выходной",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Свяжитесь с нами
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы рады ответить на ваши вопросы и записать вас на прием
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-medium">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Записаться на прием
            </h2>
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
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-all">
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

            <Card className="p-6 bg-primary/5 border-primary/20 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground mb-3">
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
