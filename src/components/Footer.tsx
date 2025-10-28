import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Beate Motte</h3>
            <p className="text-sm text-muted-foreground">
              Частная практика оздоровительных процедур и лечебных методик
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О методе
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  История
                </Link>
              </li>
              <li>
                <Link to="/apparatus" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Аппарат
                </Link>
              </li>
              <li>
                <Link to="/technique" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Техника
                </Link>
              </li>
              <li>
                <Link to="/indications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Показания
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Цены
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@beatemotte.ru</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Beate Motte. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
