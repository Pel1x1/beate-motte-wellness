import { Card } from "@/components/ui/card";
import brushMassageImage from "@/assets/brush-massage-procedure.webp";
import { Waves, Hand, Moon, Thermometer } from "lucide-react";
import procedure1Image from "@/assets/bath.webp";

const Technique = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in font-accent">
            Техника проведения
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fade-in">
            <img 
              src={brushMassageImage} 
              alt="Массаж щетками во время масляно-дисперсионной ванны" 
              className="w-full h-[300px] object-cover rounded-lg shadow-soft hover:shadow-medium transition-all hover-scale"
            />
            <img
              src={procedure1Image} 
              alt="Процедура масляно-дисперсионной ванны" 
              className="w-full h-[300px] object-cover rounded-lg shadow-soft hover:shadow-medium transition-all hover-scale"
            />

          </div>

          {/* Introduction Card */}
          <Card className="p-8 shadow-soft mb-8 animate-fade-in">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl font-semibold text-foreground">
                Специалист по масляно-дисперсионной ванне тщательно подбирает масла, полученные из лекарственных 
                растений, учитывая потребности и состояние здоровья человека
              </p>

              <p className="text-2xl font-bold text-foreground mt-8 mb-6">
                Процедура масляно-дисперсионной ванны Jungebad имеет три фазы:
              </p>
            </div>
          </Card>

          {/* Three Phases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <Waves className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Фаза покоя</h3>
                <p className="text-sm text-muted-foreground">
                  Умолкание всех чувств организма. Состояние нового начала
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-accent/5 to-accent/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <Hand className="h-10 w-10 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Массаж щетками</h3>
                <p className="text-sm text-muted-foreground">
                  Восстановление осязательных чувств и переживание «Я ЕСТЬ»
                </p>
              </div>
            </Card>

            <Card className="p-6 shadow-soft hover:shadow-medium transition-all animate-fade-in bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <Moon className="h-10 w-10 text-primary" />

                <h3 className="text-xl font-bold text-foreground">Фаза покоя</h3>
                <p className="text-sm text-muted-foreground">
                  Глубокое расслабление, внутреннее тепло и пробуждение жизненных импульсов
                </p>
              </div>
            </Card>
          </div>


          {/* Experience Description */}
          <Card className="p-8 shadow-soft mb-8 animate-fade-in bg-gradient-to-br from-secondary/30 to-secondary/50">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl font-semibold text-foreground">
                Уникальное терапевтическое переживание
              </p>
              
              <p>
                В начале происходит умолкание всех чувств организма. Состояние нового начала. С помощью щеток 
                происходит восстановление осязательных чувств. Человек испытывает тоже самое, что и ребенок во 
                время рождения – возникает очень интенсивное переживание осязания, которое приводит к ощущению 
                «Я ЕСТЬ».
              </p>

              <div className="p-6 rounded-lg bg-card border-l-4 border-primary">
                <p className="text-foreground italic">
                  Период отдыха после ванны дарит приятное внутреннее тепло, глубокое расслабление и 
                  душевное равновесие. В этот момент пробуждаются жизненные импульсы.
                </p>
              </div>
            </div>
          </Card>

          {/* Heat Retention */}
          <Card className="p-8 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Thermometer className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Эффективное сохранение тепла
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Поскольку кожа впитывает капли масла транскутанно, теплоаккумулирующий эффект масляной ванны 
                сохраняется в течение нескольких часов после принятия ванны, в отличие от обычной ванны, где более 
                высокая температура тела достигается лишь на короткое время.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card">
                  <h4 className="font-semibold text-foreground mb-2">Обычная ванна</h4>
                  <p className="text-sm">Кратковременное повышение температуры тела</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary">
                  <h4 className="font-semibold text-foreground mb-2">Масляная ванна</h4>
                  <p className="text-sm">Длительное сохранение тепла</p>
                </div>
              </div>

              <p>
                Внутренняя температура тела купающегося повышается в течение длительного времени. Таким образом, 
                масляная ванна мягко способствует нормализации температуры тела, создавая одну из основных предпосылок 
                для стабильной иммунной системы и здорового образа жизни.
              </p>
              
              <p>
                Рекомендуемый лечебный курс: 7, 14 или 21 ванна с частотой 1-3 ванны в неделю.
              </p>
              
              <div className="p-6 rounded-lg bg-accent/10">
                <p className="text-foreground font-semibold mb-2">Для всех возрастов</p>
                <p>
                  Масляные ванны могут быть особенно полезны маленьким детям и пожилым людям,
                   поскольку они создают меньшую нагрузку на кровеносную систему и органы, чем традиционные тепловые процедуры.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Technique;
