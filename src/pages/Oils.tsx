import { Card } from "@/components/ui/card";
import { Droplet, Sun, Heart } from "lucide-react";
import roseOil from "@/assets/rose-oil.webp";
import yellowFlowersOil from "@/assets/yellow-flowers-oil.webp";

const Oils = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in font-accent">
            Масла для ванны
          </h1>

          {/* Header */}
          <div className="flex items-center gap-4 mb-12 animate-fade-in">
            <div className="p-3 rounded-full bg-primary/10">
              <Droplet className="h-6 w-6 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground">
              Концентрированное тепло Солнца в веществе
            </p>
          </div>

          {/* First Image */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={yellowFlowersOil} 
              alt="Роза - источник эфирных масел" 
              className="w-full h-[300px] object-cover rounded-lg shadow-medium"
            />
          </div>

          {/* First Text Block */}
          <Card className="p-8 shadow-soft mb-12 animate-fade-in hover:shadow-medium transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
                <Sun className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Сила растительных масел</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Масла создаются благодаря свету и теплу Солнца. Растение обычно концентрирует свои масла 
                в цветке, плоде или семени, где оно наиболее ярко окрашено тем, что затрагивает нашу душу: 
                цветом, запахом и вкусом. Масло – это концентрированное тепло Солнца в веществе, и его 
                наружное применение – это дар тепла для организма.
              </p>

              <p>
                Использование растительных масел особенно показано, когда человеку недостает собственного 
                тепла для осуществления жизнедеятельности организма и процессов восстановления. Масла 
                окружают человека теплом и уменьшают потери тепла телом, они также стимулируют 
                кровообращение и тем самым усиливают проникновение тепла по всему организму.
              </p>
            </div>
          </Card>

          {/* Second Text Block */}
          <Card className="p-8 shadow-soft mb-8 animate-fade-in hover:shadow-medium transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Терапевтическое значение</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Масляные процедуры необходимы особенно чувствительным, истощенным, ослабленным или 
                конституционально нуждающимся в тепле людям. За последние 30 лет в значительной части 
                современного общества наметилась тенденция к дегенерации тепловой организации тела.
              </p>

              <p>
                В целом, в мире, температура тела человека снизилась, снизилась способность реагировать 
                лихорадкой на инфекции. При этом температура часто ослабляется жаропонижающими средствами 
                и антибиотиками. На этом фоне следует рассматривать гигиеническое и терапевтическое 
                значение масляных ванн как средство борьбы с этим явлением.
              </p>
            </div>
          </Card>

          {/* Second Image */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={roseOil} 
              alt="Зверобой - лекарственное растение для масел" 
              className="w-full h-[300px] object-cover rounded-lg shadow-medium"
            />
          </div>

          {/* Third Text Block - Oils Info */}
          <Card className="p-8 shadow-soft bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                <Droplet className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Масла Wala и Dr. Heberer</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Для ванн используются масла Wala и Dr. Heberer, которые производятся по оригинальным 
                рецептам Вернера Юнге. В основе – ценное, нежное оливковое масло Demeter из Греции. 
                В ассортименте более 60 различных масел, каждое из которых обладает уникальным составом, 
                обеспечивающим уникальные свойства.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Oils;
