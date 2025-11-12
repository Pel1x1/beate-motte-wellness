import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4 font-accent">JungebadMoscow</h3>
            {/*<p className="text-sm text-muted-foreground">
              Частная практика оздоровительных процедур и лечебных методик
            </p>*/}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Навигация</h4>
            <ul className="columns-1 md:columns-2 gap-2 [column-fill:_balance]">
              <li className="break-inside-avoid mb-2">
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li className="break-inside-avoid mb-2">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О методе
                </Link>
              </li>
              <li className="break-inside-avoid mb-2">
                <Link to="/history" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  История
                </Link>
              </li>
              <li className="break-inside-avoid mb-2">
                <Link to="/apparatus" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Аппарат
                </Link>
              </li>
              <li className="break-inside-avoid mb-2">
                <Link to="/technique" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Техника
                </Link>
              </li>
              <li className="break-inside-avoid mb-2">
                <Link to="/indications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Показания
                </Link>
              </li>
              {/* 
              <li className="break-inside-avoid mb-2">
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Цены
                </Link>
              </li>
              */}
              <li className="break-inside-avoid mb-2">
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3">
              {/*<div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+7 (123) 456-78-90</span>
              </div>*/}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@jungebadmoscow.ru</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JungebadMoscow. Все права защищены.
          </p>
          <br></br>
          <a href="https://pel1x1.ru"  className="text-[1rem] text-black hover:underline hover-underline">Made by K<span className="text-[0.75rem]">&</span>K</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
