import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Globe,
  Minus,
  Plus,
} from "lucide-react";

export default function Index() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative w-full h-16 bg-white/50 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center gap-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-moleculs-purple rounded"></div>
              <span className="font-geist font-bold text-lg text-black">
                moleculs
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                className="text-black font-manrope font-semibold"
              >
                Как это работает
              </Button>
              <div className="relative">
                <Button
                  variant="ghost"
                  className="text-black font-manrope font-semibold"
                >
                  Инструменты
                  <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </div>
              <Button
                variant="ghost"
                className="text-black font-manrope font-semibold"
              >
                Способ применения
              </Button>
              <Button
                variant="ghost"
                className="text-black font-manrope font-semibold"
              >
                Отзывы
              </Button>
              <Button
                variant="ghost"
                className="text-black font-manrope font-semibold"
              >
                Полезные статьи
              </Button>
            </nav>
          </div>

          {/* Right side - Language selector and CTA */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="bg-white text-black font-manrope font-semibold"
            >
              <Globe className="w-4 h-4 mr-2" />
              Русский
              <ChevronDown className="w-3 h-3 ml-2" />
            </Button>
            <Button className="bg-black text-white font-manrope font-semibold border-2 border-moleculs-purple">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradients and blur effects */}
        <div className="absolute inset-0">
          {/* Background texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>

          {/* Blur effects */}
          <div className="absolute inset-0">
            <div
              className="absolute top-20 right-32 w-[740px] h-[607px] bg-blue-500 opacity-40 rounded-full"
              style={{ filter: "blur(213px)" }}
            ></div>
            <div
              className="absolute top-64 -right-20 w-[811px] h-[681px] bg-moleculs-orange opacity-20 rounded-full"
              style={{ filter: "blur(213px)" }}
            ></div>
            <div
              className="absolute -top-32 -left-20 w-[808px] h-[574px] bg-moleculs-cyan opacity-8 rounded-full"
              style={{ filter: "blur(213px)" }}
            ></div>
          </div>

          {/* Overlay texture */}
          <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>

          {/* Fade overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-brand rounded-full">
              <span className="text-white font-manrope font-bold text-sm">
                #1 агрегатор нейрос��тей
              </span>
            </div>

            {/* Main heading and text */}
            <div className="space-y-4">
              <h1 className="font-geist font-bold text-6xl md:text-7xl leading-tight text-black">
                Лучшие AI-инструменты в одной подписке
              </h1>
              <p className="font-manrope text-xl text-black/50 max-w-3xl mx-auto">
                Все нейросети для бизнеса, контента и учебы — в одном сервисе и
                без десятков подписок
              </p>
            </div>

            {/* Search CTA */}
            <div className="flex items-center max-w-lg mx-auto h-16 bg-white/85 backdrop-blur-xl rounded-full border-2 border-moleculs-purple p-3 shadow-lg">
              <input
                type="text"
                placeholder="Создать изображение..."
                className="flex-1 bg-transparent px-6 font-manrope font-semibold text-lg text-black placeholder:text-black/50 focus:outline-none"
              />
              <Button className="bg-black text-white font-manrope font-semibold h-12 px-6 rounded-full hover:bg-gray-900 transition-colors">
                Попробовать бесплатно
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="font-geist font-bold text-2xl text-black">
                  &gt; 1000
                </div>
                <div className="font-manrope text-sm text-black/50">
                  бесплатных инструментов
                </div>
              </div>
              <div className="text-center">
                <div className="font-geist font-bold text-2xl text-black">
                  &gt; 150
                </div>
                <div className="font-manrope text-sm text-black/50">
                  необходимых нейросетей
                </div>
              </div>
              <div className="text-center">
                <div className="font-geist font-bold text-2xl text-black">
                  &gt; $300
                </div>
                <div className="font-manrope text-sm text-black/50">
                  экономии на подписках
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between">
              <h2 className="font-geist font-medium text-2xl text-black">
                Генерируйте в одном месте
              </h2>
              <Button
                variant="ghost"
                className="text-moleculs-purple font-manrope font-semibold text-sm"
              >
                Показать все
                <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Text Generation Card */}
            <div className="relative h-96 rounded-3xl border-2 border-moleculs-gray overflow-hidden bg-gradient-to-b from-transparent to-moleculs-gray/80">
              <div className="absolute inset-0 bg-gray-100"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="space-y-2 mb-6">
                  <h3 className="font-geist font-medium text-2xl text-black">
                    Генерируйте текст онлайн
                  </h3>
                  <p className="font-manrope text-black/50">
                    Moleculs — умный агрегатор ИИ-инструментов. Пишите статьи,
                    посты, описания товаров, e-mail-рассылки и SEO-страницы
                    быстрее обычного.
                  </p>
                </div>
                <Button className="bg-moleculs-purple text-white font-manrope font-semibold">
                  Попробовать инструмент
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Chat Assistants Card */}
            <div className="relative h-96 rounded-3xl border-2 border-moleculs-gray overflow-hidden bg-gradient-to-b from-transparent to-moleculs-gray/80">
              <div className="absolute inset-0 bg-gray-100"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="space-y-2 mb-6">
                  <h3 className="font-geist font-medium text-2xl text-black">
                    Личные чат-ассистенты
                  </h3>
                  <p className="font-manrope text-black/50">
                    Соберите своего помощника под задачу: маркетолог, редактор,
                    SMM, продавец, ресечер. Настройте тон, цели и правила.
                  </p>
                </div>
                <Button className="bg-moleculs-purple text-white font-manrope font-semibold">
                  Попробовать инструмент
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mb-12">
            <Button
              variant="outline"
              size="icon"
              className="w-16 h-16 rounded-full bg-moleculs-gray"
            >
              <ArrowLeft className="w-6 h-6 text-black/50" />
            </Button>
            <Button size="icon" className="w-16 h-16 rounded-full bg-black">
              <ArrowRight className="w-6 h-6 text-white" />
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Button className="bg-black text-white font-manrope font-semibold">
              Генерация текста
            </Button>
            <Button
              variant="outline"
              className="border-moleculs-gray font-manrope font-semibold"
            >
              Чат-ассистенты
            </Button>
            <Button
              variant="outline"
              className="border-moleculs-gray font-manrope font-semibold"
            >
              Создание изображений
            </Button>
            <Button
              variant="outline"
              className="border-moleculs-gray font-manrope font-semibold"
            >
              Создание видео
            </Button>
            <Button
              variant="outline"
              className="border-moleculs-gray font-manrope font-semibold"
            >
              Аудио и музыка
            </Button>
          </div>
        </div>
      </section>

      {/* "One Click" Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left Content */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-geist font-bold text-5xl text-black">
                  Один клик — <br />
                  <span className="bg-gradient-text bg-clip-text text-transparent">
                    готовый контент
                  </span>
                </h2>
                <p className="font-manrope text-xl text-black/50">
                  Moleculs — умный агрегатор ИИ-инструментов. Создавайте текст,
                  изображения, видео и другие форматы контента за несколько
                  шагов.
                </p>
              </div>
              <Button className="bg-black text-white font-manrope font-semibold h-16 px-8 border-2 border-moleculs-purple">
                Начать молекулировать
                <ArrowRight className="w-6 h-6 ml-4" />
              </Button>
            </div>

            {/* Right Content - Steps */}
            <div className="space-y-6">
              {[
                {
                  title: "Выберите нужную модель",
                  description:
                    "Текст, изображения, видео, голос или перевод — всё в одной подписке. Модель можно сменить в любой момент.",
                },
                {
                  title: "Введите ваш промпт",
                  description:
                    "Опишите цель одним-двумя предложениями — остальное подскажем. Поддерживаются вложения: текст/документы/изображения.",
                },
                {
                  title: "Выберите лучший результат",
                  description:
                    "Сравните варианты, уточните промпт и сохраните в кабинет. Можно продолжить в другой модели без по��ери контекста.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative h-80 rounded-l-3xl border-l-2 border-t-2 border-b-2 border-moleculs-gray overflow-hidden bg-gradient-to-b from-transparent to-moleculs-gray/80"
                >
                  <div className="absolute inset-0 bg-gray-100"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="space-y-2">
                      <h3 className="font-geist font-medium text-2xl text-black">
                        {step.title}
                      </h3>
                      <p className="font-manrope text-xl text-black/50">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-geist font-bold text-5xl text-black text-center mb-12">
            Узнайте больше о наших нейросетях
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Нейросеть для SEO-текстов",
              "Нейросеть для написания статей",
              "Нейросеть для копирайтинга",
              "Нейросеть для рерайта т��кстов",
              "Нейросеть для уникализации текста",
              "Нейросеть для идей статей",
              "Нейросеть для заголовков",
              "Нейросеть для рекламных текстов",
              "Нейросеть для постов в соцсетях",
              "Нейросеть для описаний товаров",
              "Нейросеть для email-рассылок",
              "Нейросеть для лендингов",
              "Нейросеть для SEO-текстов",
              "Нейросеть для копирайтинга",
              "Нейросеть для идей статей",
              "Нейросеть для рекламных текстов",
            ].map((tool, index) => (
              <div
                key={index}
                className="relative bg-moleculs-gray rounded-2xl p-6 group hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="space-y-2 mb-8">
                  <h3 className="font-geist font-medium text-lg text-black">
                    {tool}
                  </h3>
                  <p className="font-manrope text-sm text-black/50">
                    {index % 3 === 0
                      ? "Генерируйт�� оптимизированные тексты и повышайте позицию в поиске"
                      : index % 3 === 1
                        ? "Создавайте информативные статьи с чёткой структурой и логикой"
                        : "Сочиняйте продающие тексты, которые увеличивают интерес"}
                  </p>
                </div>
                <Button
                  size="icon"
                  className="absolute bottom-6 right-6 w-8 h-8 bg-black text-white rounded-full -rotate-45 transform group-hover:rotate-0 transition-transform border border-moleculs-purple"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purple Hero Section */}
      <section className="relative py-24 mx-6 rounded-3xl bg-moleculs-purple overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-moleculs-purple via-moleculs-orange to-moleculs-cyan"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-geist font-bold text-8xl text-white/50 leading-tight">
            <span className="text-white">Одн</span>а подписка. 1 000 нейросетей.
          </h2>
        </div>
      </section>

      {/* Statistics & Growth */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-4">
              <h2 className="font-geist font-bold text-5xl text-black">
                Ваш партнер для роста
              </h2>
              <p className="font-manrope text-xl text-black/50">
                Лучший ИИ-агрегатор, который действительно стимулирует рост
              </p>
            </div>
            <Button className="bg-black text-white font-manrope font-semibold h-16 px-8 border-2 border-moleculs-purple">
              Попробовать бесплатно
              <ArrowRight className="w-6 h-6 ml-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12 mb-16">
            {[
              { number: "300К", label: "Активные пользователи" },
              { number: "25К", label: "Оценки 5 зве��д" },
              { number: "2025", label: "Награда #1 агрегатор" },
              { number: "№1", label: "В категории ИИ-агрегатор" },
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="font-geist font-bold text-2xl bg-gradient-purple bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="font-manrope text-sm text-black/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[
              {
                text: "Мощная языковая модель для генерации текста, ведения диалогов и автоматизации контент-задач.",
                author: "Karen V. Kitt",
              },
              {
                text: "Круто, что в одном месте собраны разные ИИ-инструменты — не надо тратить время на поиск по всему интернету",
                author: "matt nappo",
              },
              {
                text: "Платф��рма реально экономит время: можно быстро протестировать разные инструменты и выбрать лучший",
                author: "Jason Lemkin",
              },
              {
                text: "Классная идея: единый доступ ко множеству ИИ-сервисов — всё под рукой",
                author: "RoJo Travel",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-80 bg-moleculs-gray rounded-2xl p-6"
              >
                <p className="font-manrope text-xl text-black mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-geist font-medium text-lg text-black/50">
                    {testimonial.author}
                  </span>
                  <div className="w-10 h-10 bg-gray-300 rounded-lg border-4 border-moleculs-purple"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-geist font-bold text-5xl text-black mb-12">
            Ответы на вопросы
          </h2>

          <div className="space-y-3">
            {[
              {
                question: "Чем Moleculs отличается от ChatGPT Plus?",
                answer:
                  "Moleculs — это SaaS-платформа-агрегатор нейросетей, где можно находить, сравнивать и использовать разные AI-инструменты через единый интерфейс. ChatGPT Plus же — это подписка только на один конкретный продукт (ChatGPT) с расширенными возможностями и доступом к более мощным моделям.",
              },
              { question: "Какие модели доступны?", answer: "" },
              { question: "Можно ли пользоваться бесплатно?", answer: "" },
              { question: "Есть ли ограничения по токенам?", answer: "" },
              { question: "Как работает подписка?", answer: "" },
              {
                question: "Сколько кредитов есть в бесплатном тарифе?",
                answer: "",
              },
              { question: "Есть ли реферальная система?", answer: "" },
            ].map((faq, index) => (
              <div key={index} className="bg-moleculs-gray rounded-2xl p-6">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <h3 className="font-geist font-medium text-2xl text-black">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg">
                    {openFaq === index ? (
                      <Minus className="w-6 h-6 text-black" />
                    ) : (
                      <Plus className="w-6 h-6 text-moleculs-purple" />
                    )}
                  </div>
                </div>
                {openFaq === index && faq.answer && (
                  <p className="font-manrope text-xl text-black/50 mt-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-device Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="font-geist font-bold text-7xl leading-tight">
              Творите{" "}
              <span className="bg-gradient-purple bg-clip-text text-transparent">
                на всех
              </span>{" "}
              устройствах
            </h2>
            <p className="font-manrope text-xl text-black/50">
              Используйте везде один аккаунт и забудьте о проблемах с
              кроссплатформенностью
            </p>
          </div>

          {/* Device Icons */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex gap-3">
              <div className="bg-moleculs-gray rounded-2xl p-4 text-center w-28">
                <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-3"></div>
                <span className="font-geist font-medium text-black/50">
                  Chrome
                </span>
              </div>
              <div className="bg-moleculs-gray rounded-2xl p-4 text-center w-28">
                <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-3"></div>
                <span className="font-geist font-medium text-black/50">
                  Edge
                </span>
              </div>
            </div>

            <div className="w-0.5 h-12 bg-moleculs-gray"></div>

            <div className="flex gap-3">
              <div className="bg-moleculs-gray rounded-2xl p-4 text-center w-28">
                <div className="w-12 h-12 bg-gray-500 rounded-xl mx-auto mb-3"></div>
                <span className="font-geist font-medium text-black/50">
                  Mac OS
                </span>
              </div>
              <div className="bg-moleculs-gray rounded-2xl p-4 text-center w-28">
                <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-3"></div>
                <span className="font-geist font-medium text-black/50">
                  Windows
                </span>
              </div>
            </div>

            <div className="w-0.5 h-12 bg-moleculs-gray"></div>

            <div className="flex gap-3">
              <div className="bg-moleculs-gray rounded-2xl p-4 text-center w-28">
                <div className="w-12 h-12 bg-black rounded-xl mx-auto mb-3"></div>
                <span className="font-geist font-medium text-black/50">
                  IOS
                </span>
              </div>
              <div className="bg-moleculs-gray rounded-2xl p-4 text-center w-28">
                <div className="w-12 h-12 bg-green-400 rounded-xl mx-auto mb-3"></div>
                <span className="font-geist font-medium text-black/50">
                  Android
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 mx-6 rounded-3xl bg-moleculs-gray overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-moleculs-orange opacity-40 rounded-full blur-[254px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-moleculs-cyan opacity-40 rounded-full blur-[254px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-moleculs-purple opacity-90 rounded-full blur-[273px]"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-geist font-bold text-7xl text-white mb-12">
            Начните творить с Moleculs
          </h2>

          {/* Search CTA */}
          <div className="flex items-center max-w-lg mx-auto h-16 bg-moleculs-gray/85 backdrop-blur-xl rounded-full border-2 border-moleculs-purple p-3">
            <input
              type="text"
              placeholder="Создать изображение..."
              className="flex-1 bg-transparent px-6 font-manrope font-semibold text-lg text-black/50 placeholder:text-black/50 focus:outline-none"
            />
            <Button className="bg-black text-white font-manrope font-semibold h-12 px-6 rounded-full">
              Попробовать бесплатно
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-moleculs-gray rounded-t-3xl mt-6 pt-16 pb-8">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[213px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-moleculs-cyan rounded-full blur-[213px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-moleculs-purple rounded"></div>
                <span className="font-geist font-bold text-xl text-black">
                  moleculs
                </span>
              </div>
              <p className="font-manrope text-sm text-black/50 max-w-xs">
                Все нейросети для бизнеса, контента и учебы — в одном сервисе и
                б��з десятков подписок
              </p>
            </div>

            {/* AI Tools */}
            <div className="space-y-3">
              <h4 className="font-geist font-medium text-lg text-black">
                Нейросети
              </h4>
              <div className="w-full h-px bg-black/20"></div>
              <div className="space-y-3 font-manrope text-sm text-black/50">
                <div>Генерация SEO-текстов</div>
                <div>Написание статей</div>
                <div>Копирайтинг и рерайтинг текста</div>
                <div>Уникализация текста</div>
                <div>Идеи для статей</div>
                <div>Идеи для заголовков</div>
                <div>
                  <Button
                    variant="ghost"
                    className="text-moleculs-purple font-manrope font-semibold text-sm p-0 h-auto"
                  >
                    Смотреть все
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Apps */}
            <div className="space-y-3">
              <h4 className="font-geist font-medium text-lg text-black">
                Приложения
              </h4>
              <div className="w-full h-px bg-black/20"></div>
              <div className="space-y-3 font-manrope text-sm text-black/50">
                <div>Chrome Web App</div>
                <div>Edge Web App</div>
                <div>Mac OS</div>
                <div>Windows</div>
                <div>IOS</div>
                <div>Android</div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="font-geist font-medium text-lg text-black">
                Полезные ссылки
              </h4>
              <div className="w-full h-px bg-black/20"></div>
              <div className="space-y-3 font-manrope text-sm text-black/50">
                <div>Как это работает</div>
                <div>Способ применения</div>
                <div>Отзывы</div>
                <div>Полезные статьи</div>
                <div>О нас</div>
                <div>Наш Telegram канал</div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between pt-8 border-t border-black/10">
            <div className="flex items-center gap-12">
              <div className="space-y-1">
                <div className="font-manrope text-sm text-black/50">
                  Все права защищены
                </div>
                <div className="font-manrope text-sm font-semibold text-black">
                  © moleculs.ai 2025-2026
                </div>
              </div>
              <div className="font-manrope text-sm text-black/50">
                Условия использования
              </div>
              <div className="font-manrope text-sm text-black/50">
                Политика конфиденциальности
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="bg-white text-black font-manrope font-semibold"
              >
                <Globe className="w-4 h-4 mr-2" />
                Русский
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
              <Button className="bg-black text-white font-manrope font-semibold border-2 border-moleculs-purple">
                Начать бесплатно
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
