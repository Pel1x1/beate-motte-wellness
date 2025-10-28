import { Card } from "@/components/ui/card";
import procedure1Image from "@/assets/bath-procedure-1.jpg";
import procedure2Image from "@/assets/bath-procedure-2.jpg";

const Technique = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Техника проведения
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <img 
              src={procedure1Image} 
              alt="Процедура масляно-дисперсионной ванны" 
              className="w-full h-[300px] object-cover rounded-lg shadow-soft"
            />
            <img 
              src={procedure2Image} 
              alt="Массаж щетками" 
              className="w-full h-[300px] object-cover rounded-lg shadow-soft"
            />
          </div>

          <Card className="p-8 shadow-soft mb-8">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Специалист по масляно-дисперсионной ванне тщательно подбирает масла, полученные из лекарственных 
                растений, учитывая потребности и состояние здоровья человека.
              </p>

              <p className="font-semibold text-foreground">
                Процедура масляно-дисперсионной ванны Jungebad имеет три фазы:
              </p>

              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>1-я фаза покоя</li>
                <li>2-я фаза массаж щетками</li>
                <li>3-я фаза покоя</li>
              </ol>

              <p>
                В начале происходит умолкание всех чувств организма. Состояние нового начала. С помощью щеток 
                происходит восстановление осязательных чувств. Человек испытывает тоже самое, что и ребенок во 
                время рождения – возникает очень интенсивное переживание осязания, которое приводит к ощущению 
                «Я ЕСТЬ». Период отдыха после ванны дарит приятное внутреннее тепло, глубокое расслабление и 
                душевное равновесие. В этот момент пробуждаются жизненные импульсы.
              </p>
            </div>
          </Card>

          <Card className="p-8 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Эффективное сохранение тепла
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Поскольку кожа впитывает капли масла транскутанно, теплоаккумулирующий эффект масляной ванны 
                сохраняется в течение нескольких часов после принятия ванны, в отличие от обычной ванны, где более 
                высокая температура кожи достигается лишь на короткое время. Внутренняя температура тела купающегося 
                повышается в течение длительного времени. Таким образом, масляная ванна мягко способствует нормализации 
                температуры тела, создавая одну из основных предпосылок для стабильной иммунной системы и здорового 
                образа жизни.
              </p>

              <p>
                Кроме того, масляные ванны могут быть особенно полезны для маленьких детей и пожилых людей, поскольку 
                они создают меньшую нагрузку на кровеносную систему и органы, чем традиционные тепловые процедуры.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Technique;
