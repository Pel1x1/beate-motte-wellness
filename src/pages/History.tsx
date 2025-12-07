import { Card } from "@/components/ui/card";
import { Lightbulb, Droplets } from "lucide-react";
import rudolfSteiner from "@/assets/rudolf-steiner.jpg";
import wernerJunge from "@/assets/werner-junge.png";

const History = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in font-accent">
            История создания метода
          </h1>

          {/* Header */}
          <div className="flex items-center gap-4 mb-12 animate-fade-in">
            <div className="p-3 rounded-full bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground">
              Соединение масла и воды – достижение, которому более 80 лет
            </p>
          </div>

          {/* Main Story Card */}
          <Card className="p-8 shadow-soft mb-12 animate-fade-in hover:shadow-medium transition-all">
            <h2 className="text-2xl font-bold text-foreground mb-6">Всё началось с идеи</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Принятие ванн с эфирными маслами без химических добавок и эмульгаторов: эта идея родилась 
                в начале 1930-х годов, когда Вернер Юнге прослушал лекцию Рудольфа Штaйнера о благотворном 
                и целебном воздействии мелко-дисперсионных масел. Вдохновленный идеей, В.Юнге исследовал 
                способы возможного смешивания воды и масла для получения такой дисперсии. Результатом его 
                работы стало создание в 1937 году системы Jungebad.
              </p>

              <p>
                Решение, найденное в результате упорных усилий, быстро принесло пользу пациентам его 
                спа-салона в Шварцвальде. Ванны, в сочетании с массажем щётками, разработанные Вернером 
                Юнге совместно с его женой Франциской, позволили маслам для ванн проявить весь свой эффект. 
                Тогда, как и сейчас, к поразительным успехам в исцелении, некоторые из которых удивили 
                традиционную медицину.
              </p>
            </div>
          </Card>

          {/* Founders Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in">
            <div className="text-center">
              <div className="overflow-hidden rounded-lg shadow-medium mb-4">
                <img 
                  src={rudolfSteiner} 
                  alt="Рудольф Штейнер" 
                  className="w-full h-[350px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Рудольф Штaйнер</h3>
              <p className="text-muted-foreground text-sm">
                (1861–1925 г.г.)<br />
                доктор философии,<br />
                основоположник антропософии
              </p>
            </div>

            <div className="text-center">
              <div className="overflow-hidden rounded-lg shadow-medium mb-4">
                <img 
                  src={wernerJunge} 
                  alt="Вернер Юнге" 
                  className="w-full h-[350px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Вернер Юнге</h3>
              <p className="text-muted-foreground text-sm">
                (1912–1998 г.г.)<br />
                специалист по гидротерапии,<br />
                создатель системы Jungebad
              </p>
            </div>
          </div>

          {/* SPA Origins Card - moved to the end */}
          <Card className="p-8 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Истоки традиции</h2>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                С самых первых документальных свидетельств о лечебных процедурах принятие ванн является неотъемлемой частью практически всех традиционных медицинских систем.
                 Сегодня мы очень часто употребляем в своем лексиконе аббревиатуру SPA, но задумываемся ли мы в этот момент, что означает это SPA?

              </p>

              <div className="p-6 rounded-lg bg-card border-l-4 border-primary">
                <p className="text-foreground font-semibold mb-2">SPA — Sanitas per aquam</p>
                <p>
                  «Sanitas per aquam» что в переводе означает «Здоровье через воду»
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;
