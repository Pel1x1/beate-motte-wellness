import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Масляная дисперсионная ванна",
      price: "80€",
      duration: "60 минут",
      features: [
        "Индивидуальный подбор масел",
        "Консультация специалиста",
        "Релаксация в специальной ванне",
        "Рекомендации по домашнему уходу",
      ],
    },
    {
      name: "Ароматерапия",
      price: "60€",
      duration: "45 минут",
      features: [
        "Сеанс ароматерапии",
        "Индивидуальный подбор композиции",
        "Консультация специалиста",
        "Инструкции по применению",
      ],
    },
    {
      name: "Гидротерапия",
      price: "70€",
      duration: "50 минут",
      features: [
        "Комплекс водных процедур",
        "Контрастные ванны",
        "Душ Шарко",
        "Лечебные обертывания",
      ],
    },
    {
      name: "Комплексная программа",
      price: "200€",
      duration: "3 сеанса",
      features: [
        "3 процедуры на выбор",
        "Детальная консультация",
        "Персональный план лечения",
        "Мониторинг результатов",
        "10% скидка",
      ],
      highlighted: true,
    },
  ];

  const additionalServices = [
    { name: "Первичная консультация", price: "40€" },
    { name: "Повторная консультация", price: "30€" },
    { name: "Индивидуальная программа (10 сеансов)", price: "700€" },
    { name: "Массаж с ароматическими маслами", price: "90€" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Стоимость услуг
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены на качественные оздоровительные процедуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-6 flex flex-col ${
                plan.highlighted 
                  ? "border-primary shadow-medium bg-primary/5" 
                  : "shadow-soft hover:shadow-medium"
              } transition-all duration-300`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full self-start mb-4">
                  Популярно
                </div>
              )}
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <p className="text-sm text-muted-foreground mt-1">{plan.duration}</p>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full shadow-soft"
              >
                <Link to="/contact">Записаться</Link>
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 shadow-soft mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Дополнительные услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <span className="text-foreground">{service.name}</span>
                <span className="text-lg font-semibold text-primary">{service.price}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-center shadow-soft">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Условия оплаты
          </h2>
          <div className="max-w-2xl mx-auto text-muted-foreground space-y-3">
            <p>Оплата производится наличными или банковской картой после процедуры.</p>
            <p>При покупке комплексной программы предоставляется скидка 10%.</p>
            <p>Отмена записи возможна не позднее чем за 24 часа до начала процедуры.</p>
          </div>
          <Button asChild size="lg" className="mt-6 shadow-medium">
            <Link to="/contact">Записаться на прием</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
