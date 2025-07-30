import { useState, useEffect } from "react";

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showSecondPage, setShowSecondPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setShowSecondPage(true);
  };

  if (showSecondPage) {
    return (
      <div className="min-h-screen bg-gradient-soft p-4 overflow-hidden relative">
        {/* Floating hearts decoration */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              🌸
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header with photos */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-8 animate-fade-in">
              🌸 Ucapan Ulang Tahun untuk Kayla 🌸
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <div className="relative group">
                <img
                  src="/lovable-uploads/29ca873b-80a8-45f0-a223-de618d28391d.png"
                  alt="Kayla"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-primary/30 shadow-lg transition-transform group-hover:scale-105 animate-slide-up"
                  style={{ animationDelay: "0.5s" }}
                />
                <div className="absolute -inset-1 bg-gradient-heart rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              
              <div className="relative group">
                <img
                  src="/lovable-uploads/69c0a2b9-59c8-46f9-8d93-80a0430a1cc8.png"
                  alt="Kayla in uniform"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-primary/30 shadow-lg transition-transform group-hover:scale-105 animate-slide-up"
                  style={{ animationDelay: "0.7s" }}
                />
                <div className="absolute -inset-1 bg-gradient-heart rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Main message */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-primary/20 animate-slide-up" style={{ animationDelay: "1s" }}>
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary animate-sparkle">
                Selamat Ulang Tahun, Kayla! 🎉
              </h2>
              
              <div className="space-y-4 text-lg md:text-xl leading-relaxed">
                <p className="animate-fade-in" style={{ animationDelay: "1.5s" }}>
                  Hari ini, dunia bertambah cerah karena gadis manis seperti kamu bertambah usia 🎉
                </p>
                
                <p className="animate-fade-in" style={{ animationDelay: "2s" }}>
                  Semoga di umur 15 ini, kamu selalu dikelilingi kebahagiaan, keberanian untuk bermimpi, dan semangat untuk terus tumbuh jadi pribadi yang hebat.
                </p>
                
                <p className="animate-fade-in" style={{ animationDelay: "2.5s" }}>
                  Terima kasih sudah jadi sosok adik yang baik, ceria, dan selalu bikin bangga.
                  Walaupun kita bukan saudara kandung, tapi kamu tetap adik yang selalu aku doakan dan aku jaga semampuku 🤍
                </p>
                
                <div className="my-8">
                  <p className="text-2xl md:text-3xl font-bold text-gradient animate-fade-in" style={{ animationDelay: "3s" }}>
                    Never stop shining, Kayla.
                  </p>
                  <p className="text-lg md:text-xl mt-2 animate-fade-in" style={{ animationDelay: "3.5s" }}>
                    Karena dunia butuh lebih banyak orang baik dan bersinar sepertimu.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-primary/20">
                  <p className="text-lg italic text-muted-foreground animate-fade-in" style={{ animationDelay: "4s" }}>
                    From your kakak yang selalu sayang dan bangga,
                  </p>
                  <p className="text-xl font-semibold text-primary mt-2 animate-fade-in" style={{ animationDelay: "4.5s" }}>
                    -M 💕
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowSecondPage(false)}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: "5s" }}
            >
              ← Kembali
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-soft flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          >
            {["🌸", "💕", "🎂", "🎉", "✨", "🌟"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="text-center relative z-10">
        <div className={`transition-all duration-1000 ${showMessage ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-8 animate-sparkle">
            🎂 Selamat Ulang Tahun 🎂
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-12 animate-float">
            Kayla! 💕
          </h2>
          
          <div className="space-y-4 mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "1s" }}>
              Gadis manis yang selalu menyinari hari-hari 🌟
            </p>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "1.5s" }}>
              Semoga hari istimewa ini dipenuhi kebahagiaan!
            </p>
          </div>
          
          <button
            onClick={handleContinue}
            className="px-12 py-4 text-xl bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in"
            style={{ animationDelay: "2s" }}
          >
            Lanjut ke Pesan Spesial 💌
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
