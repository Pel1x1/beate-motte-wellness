import { Card } from "@/components/ui/card";
import historicLab from "@/assets/historic-lab.webp";
import { BookOpen, Clock, Sparkles } from "lucide-react";

const History = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in font-accent">
            История создания метода
          </h1>

          {/* Timeline Header */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="p-3 rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground">
              От древних традиций к современной терапии
            </p>
          </div>

          {/* SPA Origins Card */}
          <Card className="p-8 shadow-soft mb-8 animate-fade-in hover:shadow-medium transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Истоки традиции</h2>
                <p className="text-sm text-primary font-semibold">С незапамятных времен</p>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                С незапамятных времен люди купаются и позволяют себя стимулировать живительной силе воды и тепла. 
                Сегодня мы очень часто употребляем в своем лексиконе аббревиатуру SPA, но задумываемся ли мы в 
                этот момент, что означает это SPA?
              </p>

              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-primary">
                <p className="text-foreground font-semibold mb-2">SPA — Sanitas per aquam</p>
                <p>
                  На латыни является аббревиатурой от фраз «Sanitas per aquam» или «Salus per aquam» или 
                  «Sanus per aquam» что переводится как «Здоровье через воду» или «Благо (польза) через воду» или 
                  «Здоровый через воду».
                </p>
              </div>

              <p>
                Идея создания масляно-дисперсионных ванн восходит к Рудольфу Штайнеру и позднее была подхвачена 
                Вернером Юнге, который в 1937 году разработал аппарат для смешивания воды и масла в терапевтических целях.
              </p>
            </div>
          </Card>

          {/* Historic Image */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={historicLab} 
              alt="Исторические медицинские исследования" 
              className="w-full h-[400px] object-cover rounded-lg shadow-medium hover:shadow-soft transition-all"
            />
            <p className="text-sm text-muted-foreground text-center mt-3 italic">
              Атмосфера медицинских исследований 1930-х годов
            </p>
          </div>

          {/* First Healing Story */}
          <Card className="p-8 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  История первого исцеления
                </h2>
                <p className="text-sm text-primary font-semibold">Берлин, 1937 год</p>
              </div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-semibold text-xl">
                Чудесное исцеление, положившее начало методу
              </p>
              
              <p>
                Жена Вернера Юнге открыла в Берлине медицинский центр, в котором было бальнеологическое лечение и массаж. 
                К ним обратилась женщина, мать 4 детей. Во время прогулки с детьми она сорвала стебелек и пожевала его, 
                при этом произошло инфицирование полости рта актиномицетами. Инфекция привела к высокой лихорадке и 
                сильному нагноению.
              </p>

              <div className="p-6 rounded-lg bg-card border-l-4 border-accent">
                <p className="text-foreground italic">
                  «теперь, впервые с начала моего заболевания, у меня такое чувство, что в месте моей болезни нечто происходит»
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Слова пациентки после первой ванны</p>
              </div>

              <p>
                Женщину госпитализировали и удалили ей все зубы в надежде, что улучшится доступ к 
                очагу инфекции. Произошло обратное, инфекция распространилась дальше в челюстные кости. Лечащий врач 
                предложил трепанацию челюстных костей, но женщина отказалась. Ее муж обратился за помощью в медицинский 
                центр Юнге и просил спасти его жену.
              </p>

              <p>
                Вернеру Юнге пришла мысль поискать совет у доктора Штайнера. В 1937 году был как раз опубликован 
                медицинский курс, который д-р Штайнер читал врачам в 1920 году, и В.Юнге незадолго до этого его приобрел. 
                Когда он раскрыл его, это была страница, на которой д-р Штайнер предлагает применение тонко распыленного 
                масла в воде и лечение людей масляными ваннами.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-lg bg-card text-center">
                  <p className="text-3xl font-bold text-primary mb-2">1</p>
                  <p className="text-sm">ванна — первое облегчение</p>
                </div>
                <div className="p-4 rounded-lg bg-card text-center">
                  <p className="text-3xl font-bold text-primary mb-2">3</p>
                  <p className="text-sm">ванны в неделю</p>
                </div>
                <div className="p-4 rounded-lg bg-card text-center">
                  <p className="text-3xl font-bold text-primary mb-2">6</p>
                  <p className="text-sm">недель до полного выздоровления</p>
                </div>
              </div>

              <p className="text-foreground font-semibold">
                Было решено делать женщине масляные ванны по Рудольфу Штайнеру. Когда тяжело больная женщина несколько 
                минут полежала в ванне, она глубоко вздохнула и сказала: «теперь, впервые с начала моего заболевания, 
                у меня такое чувство, что в месте моей болезни нечто происходит». 
              </p>

              <p>
                Общее действие было таково, что женщина 
                снова обрела волю к жизни. Жар понизился уже после первой ванны. Она принимала три ванны в неделю. 
                Нагноение также пошло на спад и в конце шестой недели болезнь была преодолена. Женщина дожила до глубокой старости.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;
