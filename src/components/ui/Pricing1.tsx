import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Euro, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import consultationSpace from "@/assets/consultation-space.webp";

const Pricing = () => {
  const services = [
    { name: "Первичная консультация", price: "1000 руб." },
    { name: "Масляно-дисперсионная ванна", price: "7000 руб." },
    { name: "Курс масляно-дисперсионных ванн 7 процедур", price: "скидка 15%" },
    { name: "Курс масляно-дисперсионных ванн 10 процедур", price: "скидка 20%" },
    { name: "Консультация гомеопата", price: "5000 руб." },
    { name: "Повторная консультация гомеопата", price: "3000 руб." },
    { name: "Консультация гомеопата острый случай (сопровождение 1 неделя)", price: "2500 руб." },
  ];

  const benefits = [
    "Гибкие условия оплаты",
    "Депозитная система",
    "Скидки на курсы процедур",
    "Индивидуальный подход",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Стоимость услуг
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Информация о ценах предоставляется при записи на консультацию
          </p>
        </div>

        {/* Consultation Image */}
        <div className="mb-12 animate-fade-in">
          <Card className="overflow-hidden shadow-medium">
            <img 
              src={consultationSpace} 
              alt="Консультационное пространство" 
              className="w-full h-[400px] object-cover"
            />
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-primary/5 to-accent/5"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{benefit}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Pricing Card */}
        <Card className="p-8 shadow-soft mb-8 animate-fade-in">
          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-5 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all hover-scale"
              >
                <span className="text-foreground text-lg flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  {service.name}
                </span>
                <span className="text-xl font-semibold text-primary">{service.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary">
            <div className="flex items-start gap-3">
              <Euro className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground font-semibold mb-2">Депозитная система оплаты</p>
                <p className="text-muted-foreground">
                  Мы предлагаем гибкую систему оплаты для вашего удобства. Депозит позволяет забронировать 
                  необходимое количество процедур по выгодной цене.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 shadow-soft animate-fade-in">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Длительность процедур</h3>
                <p className="text-muted-foreground">
                  Масляно-дисперсионная ванна: 60-90 минут<br/>
                  Консультация: 45-60 минут
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft animate-fade-in">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Запись и отмена</h3>
                <p className="text-muted-foreground">
                  Запись заранее обязательна<br/>
                  Отмена не позднее чем за 24 часа
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Card */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-center shadow-medium animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Записаться на консультацию
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Свяжитесь с нами для уточнения деталей и записи на прием. Мы ответим на все ваши вопросы 
            и подберем оптимальное время для посещения.
          </p>
          <Button asChild size="lg" className="shadow-medium hover:shadow-soft transition-all">
            <Link to="/contact">Связаться с нами</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
