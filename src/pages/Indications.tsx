import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Показания и противопоказания
          </h1>

          <Card className="p-8 shadow-soft mb-8">
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
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30"
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{indication}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Стимулируя тепло тела, масляно-дисперсионная ванна также подходит людям с ослабленным тепловым 
                балансом, например, тем, кто легко мерзнет, имеет слабый иммунитет, испытывает истощение и имеет 
                проблемы со сном.
              </p>
            </div>
          </Card>

          <Card className="p-8 shadow-soft bg-gradient-to-br from-destructive/5 to-destructive/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Противопоказания
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Противопоказания к проведению масляно-дисперсионных ванн определяются индивидуально на консультации 
              со специалистом. Обязательно сообщите о всех имеющихся заболеваниях и принимаемых медикаментах перед 
              началом процедур.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Indications;
