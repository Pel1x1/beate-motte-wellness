import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplets, Heart, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Home = () => {
  const features = [
    {
      icon: Droplets,
      title: "Масляные дисперсионные ванны",
      description: "Уникальная терапия для глубокого расслабления и восстановления",
    },
    {
      icon: Heart,
      title: "Индивидуальный подход",
      description: "Персонализированные программы с учетом ваших потребностей",
    },
    {
      icon: Sparkles,
      title: "Проверенные методики",
      description: "Эффективные методы лечения с многолетним опытом",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Добро пожаловать в практику оздоровления
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Восстановите гармонию тела и души с помощью проверенных методик и индивидуального подхода
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-medium hover:shadow-soft transition-all">
                <Link to="/services">
                  Узнать о методах лечения
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-soft">
                <Link to="/contact">Записаться на прием</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши преимущества
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к вашему здоровью и благополучию
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-medium transition-all duration-300 bg-gradient-to-b from-card to-secondary/20 border-border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              О практике Beate Motte
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Здоровье — это самое ценное, что у нас есть. В нашей практике мы используем 
              проверенные временем методики оздоровления, включая масляные дисперсионные ванны 
              и другие терапевтические процедуры.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Каждый пациент получает индивидуальный подход и персонализированную программу 
              лечения, направленную на достижение максимального эффекта и долгосрочного результата.
            </p>
            <Button asChild size="lg" className="mt-8 shadow-medium">
              <Link to="/services">
                Подробнее об услугах
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-primary/5 border-primary/20 p-12 text-center shadow-soft">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Готовы начать путь к здоровью?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и записи на прием. Мы с радостью ответим на все ваши вопросы.
          </p>
          <Button asChild size="lg" className="shadow-medium">
            <Link to="/contact">
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Home;
