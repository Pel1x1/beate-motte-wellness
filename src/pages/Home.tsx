import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/oil-dispersion-intro.png";
import { ArrowRight } from "lucide-react";

const Home = () => {
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Масляно-дисперсионная ванна Jungebad
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Тепло тела – основа гармоничного отношения к жизни, сильного иммунитета, гармоничного эмоционального равновесия
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="shadow-medium hover:shadow-soft transition-all">
                <Link to="/about">
                  Узнать о методе
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

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              В здоровом состоянии тепловая организация человека очень сложно устроена. 
              Все болезни так или иначе связаны с ее нарушением. Терапия тепловой организации 
              является ключевой к исцелению болезней.
            </p>
            
            <p>
              Масляно-дисперсионная ванна оказывает глубокое воздействие на внутреннее тепло человека, 
              укрепляет жизненный тонус. Масла, распылённые на мельчайшие капельки, плавают в воде ванны, 
              обволакивая всё тело и оказывая терапевтическое действие, стабилизируют иммунную систему, 
              регулируют температуру и тепло тела.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="shadow-medium">
              <Link to="/about">
                Подробнее о масляно-дисперсионной ванне
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
