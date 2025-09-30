import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const News = () => {
  const news = [
    {
      date: "15 Марта 2024",
      category: "Новость",
      title: "Открытие новой процедуры: Детокс-программа",
      excerpt: "Мы рады представить новую комплексную программу детоксикации организма, сочетающую масляные ванны и ароматерапию.",
      content: "Новая программа разработана для глубокой очистки организма и восстановления энергетического баланса. Включает 5 сеансов масляных дисперсионных ванн с индивидуально подобранными композициями эфирных масел.",
    },
    {
      date: "1 Марта 2024",
      category: "Акция",
      title: "Весенняя акция: -15% на комплексные программы",
      excerpt: "С 1 по 31 марта специальное предложение на все комплексные оздоровительные программы.",
      content: "Воспользуйтесь весенней акцией и начните путь к оздоровлению с выгодой 15%. Акция распространяется на все комплексные программы от 5 сеансов.",
    },
    {
      date: "20 Февраля 2024",
      category: "Событие",
      title: "Лекция о пользе масляных дисперсионных ванн",
      excerpt: "Приглашаем на бесплатную лекцию о терапевтических свойствах масляных ванн и их влиянии на организм.",
      content: "27 февраля в 18:00 состоится открытая лекция, на которой вы узнаете о истории метода, механизмах воздействия и показаниях к применению. Регистрация обязательна.",
    },
    {
      date: "5 Февраля 2024",
      category: "Новость",
      title: "Расширение графика работы",
      excerpt: "Для вашего удобства мы расширяем часы приема. Теперь доступна запись на вечернее время.",
      content: "С 1 марта практика будет работать с 9:00 до 20:00 с понедельника по пятницу, и с 10:00 до 16:00 по субботам. Это позволит вам выбрать наиболее удобное время для посещения.",
    },
    {
      date: "15 Января 2024",
      category: "Статья",
      title: "Масляные ванны: история и современность",
      excerpt: "Погружение в мир древних традиций оздоровления и их применение в современной терапии.",
      content: "Масляные дисперсионные ванны имеют древние корни, уходящие в традиции восточной медицины. Сегодня эта методика получила научное обоснование и широко применяется в европейских оздоровительных практиках.",
    },
    {
      date: "28 Декабря 2023",
      category: "Новость",
      title: "Новогодние поздравления и график работы",
      excerpt: "Поздравляем вас с наступающим Новым годом! Информация о праздничном графике работы.",
      content: "Практика будет закрыта с 31 декабря по 2 января. Со 3 января возобновляем работу в обычном режиме. Желаем вам здоровья и благополучия в новом году!",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Акция":
        return "bg-accent/20 text-accent-foreground hover:bg-accent/30";
      case "Событие":
        return "bg-primary/20 text-primary hover:bg-primary/30";
      default:
        return "bg-secondary text-secondary-foreground hover:bg-secondary/80";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Новости и события
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Актуальная информация о нашей практике, акциях и мероприятиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <Card 
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge className={getCategoryColor(item.category)}>
                  {item.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-foreground mb-3 leading-tight">
                {item.title}
              </h2>

              <p className="text-muted-foreground mb-4">
                {item.excerpt}
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mt-auto pt-4 border-t border-border">
                {item.content}
              </p>
            </Card>
          ))}
        </div>

        <Card className="mt-16 p-8 bg-primary/5 border-primary/20 text-center shadow-soft max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Хотите получать новости?
          </h2>
          <p className="text-muted-foreground mb-6">
            Подпишитесь на нашу рассылку и будьте в курсе всех новостей, акций и специальных предложений.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors shadow-soft">
              Подписаться
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default News;
