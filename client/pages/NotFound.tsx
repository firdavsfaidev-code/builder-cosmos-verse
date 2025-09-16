import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* Background with gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-moleculs-purple opacity-20 rounded-full blur-[213px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-moleculs-cyan opacity-10 rounded-full blur-[213px]"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* 404 */}
          <div className="space-y-4">
            <h1 className="font-geist font-bold text-8xl bg-gradient-purple bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="font-geist font-bold text-4xl text-black">
              Страница не найдена
            </h2>
            <p className="font-manrope text-xl text-black/50 max-w-lg mx-auto">
              Кажется, вы попали на несуществующую страницу. Давайте вернём вас
              на главную и продолжим творить с AI!
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-4">
            <Link to="/">
              <Button className="bg-black text-white font-manrope font-semibold border-2 border-moleculs-purple">
                <Home className="w-5 h-5 mr-2" />
                На главную
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="font-manrope font-semibold">
                Попробовать AI-инструменты
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-brand rounded-full">
            <span className="text-white font-manrope font-bold text-sm">
              1000+ AI-инструментов ждут вас на главной
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
