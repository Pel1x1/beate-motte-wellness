import { Card } from "@/components/ui/card";
import apparatusImage1 from "@/assets/apparatus-filled-1.png";
import apparatusImage2 from "@/assets/apparatus-filled-2.png";

const Apparatus = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Аппарат Jungebad
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-12">
              <img 
                src={apparatusImage1} 
                alt="Аппарат Jungebad с масляной дисперсией" 
                className="w-full h-[250px] sm:h-[650px] bg-gray-100 rounded-lg shadow-soft hover:shadow-medium transition-all hover-scale overflow-hidden"
              />
              <img 
                src={apparatusImage2} 
                alt="Процесс дисперсии масла в аппарате Jungebad" 
                className="w-full h-[250px] sm:h-[650px] bg-gray-100 rounded-lg shadow-soft hover:shadow-medium transition-all hover-scale overflow-hidden"
              />
          </div>




          <Card className="p-8 shadow-soft mb-8">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Аппарат представляет собой стеклянное устройство ручного прецизионного изготовления, осуществляющее 
                тонкое распыление масла в воде без применения электродвигателя, а также без эмульгаторов и прочих добавок. 
                Устремляющаяся в аппарат вода образует вихревое течение в небольшом стеклянном баллоне, в центре которого 
                в нее медленно всасываются из стеклянной воронки 3-5 мл выбранного для ванны масла. После турбулентности 
                из аппарата в ванну поступает слегка мутная вода молочного цвета в красивой форме в виде колокола.
              </p>

              <p>
                В центре вихря совершается динамический, фармацевтический процесс: чем больше вода в вихре приближается 
                к центру, тем выше становится скорость ее течения, до тех пор, пока в ядре вихря не происходит резкий 
                переход: давление и тяжесть переходят во всасывающую силу и легкость. Здесь, когда возникают микроскопические 
                капли воды, одетые тончайшей масляной оболочкой, устанавливается связь масла и воды, невозможная при 
                нормальных обстоятельствах. Масло вследствие этого претерпевает максимальное увеличение поверхности.
              </p>

              <p>
                Благодаря вихревому воздействию поступающей воды площадь поверхности масла увеличивается до 2500 раз, 
                мельчайшие капельки масла и воды способны проникать через естественный защитный барьер кожи, достигая 
                глубоких слоев и обеспечивая поступление необходимых активных ингредиентов в кровоток. Исследования 
                показали, что частицы масла впитываются через кожу и далее участвуют в обмене веществ.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Apparatus;
