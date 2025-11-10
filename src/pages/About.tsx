import { Card } from "@/components/ui/card";
import therapyImage from "@/assets/therapy-room.jpg";
import wellnessTreatment from "@/assets/wellness-treatment.jpg";
import oilBathRelaxation from "@/assets/oil-bath-relaxation.jpg";
import { Droplets, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in">
            О масляно-дисперсионной ванне по Вернеру Юнге
          </h1>

          {/* Hero Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <img 
              src={therapyImage} 
              alt="Масляно-дисперсионная ванна" 
              className="w-full h-[300px] object-cover rounded-lg shadow-soft hover:shadow-medium transition-all hover-scale"
            />
            <img 
              src={oilBathRelaxation} 
              alt="Релаксация и терапия" 
              className="w-full h-[300px] object-cover rounded-lg shadow-soft hover:shadow-medium transition-all hover-scale"
            />
          </div>

          {/* Main Content Card */}
          <Card className="p-8 shadow-soft mb-8 animate-fade-in">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl font-semibold text-foreground">
                В антропософском уходе за больными масляно-дисперсионные ванны по Юнге являются 
                важной составной частью в области наружной терапии.
              </p>

              <p>
                Ваннам, компрессам и втираниям присуще то общее, что в человеческий организм наружно, 
                через кожу, вводится определенная субстанция в соединении с субстратом-носителем, 
                например с водой или маслом при различных температурах. Особенность здесь в том, 
                что это введение предпринимается не самим больным, а вторым лицом, которое тем самым 
                «обращается к другому человеку» и сопровождает весь процесс ухода.
              </p>

              <p>
                Именно это человеческое сопровождение играет при масляно-дисперсионных ваннах существенную 
                роль для развития собственных исцеляющих сил, которые стремятся пробудиться вновь у больного 
                человека. Благодаря особому приготовлению масла в масляно-дисперсионном приборе оживляется 
                человеческая тепловая организация в крови. Это приводит к интенсивному тепловыделению, 
                которое распространяется изнутри до самой периферии и пронизывает всего человека приятным теплом.
              </p>
            </div>
          </Card>

          {/* Key Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Глубокое воздействие</h3>
                <p className="text-sm text-muted-foreground">
                  Масла проникают через кожу, достигая глубоких слоев и обеспечивая терапевтический эффект
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-accent/5 to-accent/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-accent/10">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Тепловая терапия</h3>
                <p className="text-sm text-muted-foreground">
                  Активизация тепловой организации человека для укрепления иммунитета
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-secondary/30 to-secondary/50">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Индивидуальный подход</h3>
                <p className="text-sm text-muted-foreground">
                  Персональный подбор масел и сопровождение специалиста на каждом этапе
                </p>
              </div>
            </Card>
          </div>

          {/* Additional Image Section */}
          <Card className="overflow-hidden shadow-soft animate-fade-in">
            <img 
              src={wellnessTreatment} 
              alt="Wellness терапия" 
              className="w-full h-[400px] scale-[1.03]  object-cover"
            />
            <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Целостный подход к исцелению
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Масляно-дисперсионная ванна работает не только на физическом уровне, но и затрагивает 
                эмоциональную и духовную составляющие человека. Это комплексная терапия, которая помогает 
                восстановить баланс всего организма, активизировать собственные силы исцеления и достичь 
                глубокого состояния гармонии и благополучия.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
