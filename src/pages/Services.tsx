import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Droplets, Flower2, Waves, Heart } from "lucide-react";
import oilBathImage from "@/assets/oil-bath-therapy.jpg";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Масляная дисперсионная ванна",
      description: "Уникальная терапевтическая процедура, сочетающая целебные свойства эфирных масел и теплой воды",
      details: [
        "Глубокое расслабление мышц и нервной системы",
        "Улучшение кровообращения и лимфотока",
        "Детоксикация организма",
        "Снятие стресса и нормализация сна",
        "Повышение иммунитета",
      ],
      image: oilBathImage,
    },
    {
      icon: Flower2,
      title: "Ароматерапия",
      description: "Использование натуральных эфирных масел для достижения терапевтического эффекта",
      details: [
        "Индивидуальный подбор масел",
        "Улучшение эмоционального состояния",
        "Поддержка дыхательной системы",
        "Снятие головных болей",
        "Гармонизация энергетического баланса",
      ],
    },
    {
      icon: Waves,
      title: "Гидротерапия",
      description: "Лечебные процедуры с использованием воды различных температур",
      details: [
        "Контрастные ванны",
        "Лечебные обертывания",
        "Душ Шарко",
        "Укрепление сосудов",
        "Стимуляция обменных процессов",
      ],
    },
    {
      icon: Heart,
      title: "Индивидуальные программы",
      description: "Комплексный подход к оздоровлению с учетом ваших потребностей",
      details: [
        "Детальная консультация",
        "Персональный план лечения",
        "Комбинация различных методик",
        "Регулярный мониторинг результатов",
        "Рекомендации по домашнему уходу",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональные оздоровительные процедуры с использованием проверенных методик
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div className={`grid grid-cols-1 ${service.image ? "lg:grid-cols-2" : ""} gap-8 p-8`}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Преимущества процедуры:
                    </h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="shadow-medium">
                    <Link to="/contact">Записаться на процедуру</Link>
                  </Button>
                </div>

                {service.image && (
                  <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-16 p-8 bg-primary/5 border-primary/20 text-center shadow-soft">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Не нашли нужную процедуру?
          </h2>
          <p className="text-muted-foreground mb-6">
            Свяжитесь с нами для индивидуальной консультации. Мы подберем оптимальную программу для вас.
          </p>
          <Button asChild size="lg" className="shadow-medium">
            <Link to="/contact">Получить консультацию</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Services;
