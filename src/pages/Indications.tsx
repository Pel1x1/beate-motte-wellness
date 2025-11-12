import { Card } from "@/components/ui/card";
import { Check, X, Activity, Brain, Heart } from "lucide-react";
import spaRelaxation from "@/assets/spa-relaxation.jpg";

const Indications = () => {
  const indications = [
    "Нейродермит, кожная аллергия, псориаз",
    "Заболевания обмена веществ",
    "Гинекологические проблемы",
    "Воспаления, ОРВИ, пневмония",
    "Артрозы, ограниченная подвижность",
    "Нейродегенеративные заболевания",
    "Вегетативные функциональные расстройства кровеносной и дыхательной систем",
    "Бронхиальная астма или сердечная аритмия",
    "Состояния истощения, хроническая усталость",
    "Онкозаболевания (поддерживающая терапия)",
    "Депрессия, беспокойство и тревожность",
    "Ослабленный тепловой баланс, склонность мёрзнуть",
    "Слабый иммунитет",
    "Проблемы со сном",
    "Варикозное расширение вен, целлюлит",
    "Постравматическая реабилитация, в том числе у спортсменов",
    "Дети, рожденные путем кесарева сечения",
    "Детский церебральный паралич",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in font-accent">
            Показания и противопоказания
          </h1>

          {/* Hero Image */}
          <div className="mb-12 animate-fade-in">
            <Card className="overflow-hidden shadow-medium">
              <img 
                src={spaRelaxation} 
                alt="Spa релаксация и терапия" 
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </div>

          {/* Benefits Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Физическое здоровье</h3>
                <p className="text-sm text-muted-foreground">
                  Лечение кожных, метаболических и дыхательных заболеваний
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-accent/5 to-accent/10">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-full bg-accent/10">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Психологическое состояние</h3>
                <p className="text-sm text-muted-foreground">
                  Помощь при депрессии, тревожности и эмоциональном истощении
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-secondary/30 to-secondary/50">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-full bg-primary/10">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Реабилитация</h3>
                <p className="text-sm text-muted-foreground">
                  Восстановление после травм и операций
                </p>
              </div>
            </Card>
          </div>

          {/* Indications Card */}
          <Card className="p-8 shadow-soft mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Показания
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Масляно-дисперсионная ванна имеет широкий спектр применения:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {indications.map((indication, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all hover-scale"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{indication}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary">
              <p className="text-lg text-foreground font-semibold mb-2">
                Для укрепления общего здоровья
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Стимулируя тепло тела, масляно-дисперсионная ванна также подходит людям с ослабленным тепловым 
                балансом, например, тем, кто легко мерзнет, имеет слабый иммунитет, испытывает истощение и имеет 
                проблемы со сном.
              </p>
            </div>
          </Card>

          {/* Contraindications Card */}
          <Card className="p-8 shadow-soft bg-gradient-to-br from-destructive/5 to-destructive/10 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Противопоказания
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Противопоказания к проведению масляно-дисперсионных ванн определяются индивидуально на консультации 
              со специалистом. Обязательно сообщите о всех имеющихся заболеваниях и принимаемых медикаментах перед 
              началом процедур.
            </p>

            <div className="p-6 rounded-lg bg-card border-l-4 border-destructive">
              <p className="text-foreground font-semibold mb-2">
                Важно:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Первичная консультация со специалистом обязательна</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Индивидуальный подход к каждому пациенту</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Учет всех особенностей здоровья и медикаментозной терапии</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Indications;
