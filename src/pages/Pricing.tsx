import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

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

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Стоимость услуг
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Информация о ценах предоставляется при записи на консультацию
          </p>
        </div>

        <Card className="p-8 shadow-soft mb-8">
          <div className="grid grid-cols-1 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex justify-between items-center p-5 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <span className="text-foreground text-lg">{service.name}</span>
                <span className="text-xl font-semibold text-primary">{service.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5">
            <p className="text-muted-foreground text-center">
              Возможна депозитная система оплаты
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-center shadow-soft">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Записаться на консультацию
          </h2>
          <p className="text-muted-foreground mb-6">
            Свяжитесь с нами для уточнения деталей и записи на прием
          </p>
          <Button asChild size="lg" className="shadow-medium">
            <Link to="/contact">Связаться с нами</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
