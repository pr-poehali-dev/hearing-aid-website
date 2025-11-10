import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/dc7bdb84-ab75-4516-ae67-fc9b2b707c9c.png" 
                alt="Ясный слух" 
                className="h-12 w-12 rounded-lg"
              />
              <span className="text-xl font-bold text-primary">Ясный слух</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('articles')} className="text-sm font-medium hover:text-primary transition-colors">
                Статьи
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('contacts')}>
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-accent via-white to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Верните себе качество жизни
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный подбор и настройка слуховых аппаратов от ведущих мировых производителей
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="gap-2">
                <Icon name="ShoppingBag" size={20} />
                Каталог аппаратов
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="gap-2">
                <Icon name="Calendar" size={20} />
                Записаться на приём
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <CardTitle>Опытные специалисты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Команда сертифицированных аудиологов с опытом работы более 15 лет
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Settings" size={24} className="text-primary" />
                </div>
                <CardTitle>Точная настройка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Индивидуальная настройка аппаратов с учётом особенностей вашего слуха
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="HeartHandshake" size={24} className="text-primary" />
                </div>
                <CardTitle>Пожизненная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Бесплатное сервисное обслуживание и консультации после покупки
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог слуховых аппаратов</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор современных слуховых аппаратов от ведущих производителей
            </p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="bte">Заушные</TabsTrigger>
              <TabsTrigger value="ite">Внутриушные</TabsTrigger>
              <TabsTrigger value="ric">RIC</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Phonak Audéo Paradise',
                  type: 'RIC',
                  price: '89 900 ₽',
                  features: ['Bluetooth', 'Перезаряжаемый', 'Шумоподавление'],
                },
                {
                  name: 'Oticon More',
                  type: 'Заушный',
                  price: '95 900 ₽',
                  features: ['Deep Neural Network', '360° звук', 'Влагозащита'],
                },
                {
                  name: 'Widex Moment',
                  type: 'Внутриушный',
                  price: '78 900 ₽',
                  features: ['ZeroDelay', 'AI звук', 'Компактный'],
                },
                {
                  name: 'Signia Pure Charge&Go',
                  type: 'RIC',
                  price: '85 900 ₽',
                  features: ['Быстрая зарядка', 'Собственный голос', 'Стриминг'],
                },
                {
                  name: 'Resound ONE',
                  type: 'Заушный',
                  price: '92 900 ₽',
                  features: ['M&RIE микрофон', 'All Access', 'Приложение'],
                },
                {
                  name: 'Starkey Livio Edge AI',
                  type: 'Внутриушный',
                  price: '99 900 ₽',
                  features: ['Искусственный интеллект', 'Датчики здоровья', 'Перевод языков'],
                },
              ].map((product, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent rounded-lg mb-4 flex items-center justify-center">
                      <Icon name="Ear" size={48} className="text-primary" />
                    </div>
                    <Badge className="w-fit mb-2">{product.type}</Badge>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-primary">{product.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Check" size={16} className="text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant="outline" onClick={() => scrollToSection('contacts')}>
                      Узнать подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="bte" className="text-center py-12">
              <p className="text-muted-foreground">Заушные аппараты появятся здесь</p>
            </TabsContent>

            <TabsContent value="ite" className="text-center py-12">
              <p className="text-muted-foreground">Внутриушные аппараты появятся здесь</p>
            </TabsContent>

            <TabsContent value="ric" className="text-center py-12">
              <p className="text-muted-foreground">RIC аппараты появятся здесь</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">О нашем центре</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-primary/20">
                <CardHeader>
                  <Icon name="Building2" size={32} className="text-primary mb-4" />
                  <CardTitle>Современное оборудование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Мы используем новейшее диагностическое оборудование для точной оценки слуха и подбора оптимального решения
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <Icon name="Users" size={32} className="text-primary mb-4" />
                  <CardTitle>Квалифицированная команда</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Наши специалисты регулярно проходят обучение и сертификацию у ведущих производителей слуховых аппаратов
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/50 border-none">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">положительных отзывов</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Узнайте больше о здоровье слуха и правильном уходе за слуховыми аппаратами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Как понять, что вам нужен слуховой аппарат',
                date: '15 октября 2024',
                icon: 'AlertCircle',
              },
              {
                title: 'Уход за слуховыми аппаратами: полное руководство',
                date: '10 октября 2024',
                icon: 'Sparkles',
              },
              {
                title: 'Современные технологии в слухопротезировании',
                date: '5 октября 2024',
                icon: 'Zap',
              },
              {
                title: 'Профилактика потери слуха в любом возрасте',
                date: '1 октября 2024',
                icon: 'Shield',
              },
              {
                title: 'Адаптация к слуховому аппарату: первые шаги',
                date: '28 сентября 2024',
                icon: 'TrendingUp',
              },
              {
                title: 'Мифы о слуховых аппаратах: правда и вымысел',
                date: '25 сентября 2024',
                icon: 'Info',
              },
            ].map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={article.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {article.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Свяжитесь с нами</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Ленина, д. 123</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">info@yasniysluh.ru</div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Режим работы</div>
                      <div className="text-muted-foreground">
                        Пн-Пт: 9:00 - 20:00<br />
                        Сб-Вс: 10:00 - 18:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Запись на консультацию</CardTitle>
                  <CardDescription>Заполните форму, и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Комментарий или вопрос" rows={4} />
                    </div>
                    <Button className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/dc7bdb84-ab75-4516-ae67-fc9b2b707c9c.png" 
                alt="Ясный слух" 
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-lg font-bold">Ясный слух</span>
            </div>
            <div className="text-center text-sm text-white/70">
              © 2024 Центр слуховых аппаратов "Ясный слух". Все права защищены.
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
