import {motion} from 'framer-motion'
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen  px-12 relative overflow-hidden">
      {/* navbar */}
      <Navbar />
      <div className="absolute -top-12 -left-12 w-[300px] h-[300px] bg-[#ac7139] blur-[120px]" />
      <div className="absolute bottom-0 -right-12 w-[300px] h-[300px] bg-[#749cb6] blur-[100px]" />
      <div>
        <img
          src="/img/circle.png"
          alt="art"
          className="w-[120px] absolute z-[100] top-[70px] right-[350px] animate-spin-cham"
        />
      </div>
      <section className="h-[calc(100vh-80px)] flex flex-col items-center relative">
        <div className="absolute left-[190px] top-[150px] h-[100px] flex items-center overflow-hidden">
          <div className="relative flex text-6xl font-primary text-[#e6951d]  shadow-blue-500 drop-shadow-xl z-50">
            {Array.from("Trên đám mây").map((letter, idx) =>
              letter === " " ? (
                <span key={idx}>&nbsp;</span>
              ) : (
                <span key={idx}>{letter}</span>
              )
            )}
          </div>
        </div>

        <div className="h-[500px] absolute top-[5rem] m-auto">
          <img
            src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/364547872_3236383243328346_1918633332804165710_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eBOxAQu6X5sAX_Aysx-&_nc_oc=AQmlZSUdTCEadUh3JKQ4rSPfynaLvSWKmwoCW4M_QI3zgK-of_Kb6DU72mVJHk3dtstNuAoVPuoKyGzd77tiZzF1&_nc_ht=scontent.fsgn13-2.fna&oh=03_AdT2l4ikS4qKDS1kh5JxUkjam_1rfOaVNn7qBJSK-WUlNQ&oe=64F74B7F"
            alt="art-cloud"
            className="object-cover max-h-full max-w-[420px]"
          />
        </div>
        <div className="bg-[#eaeaea] p-4 w-[330px] absolute bottom-[100px] right-[100px] drop-shadow-lg z-50 rounded-[1rem]">
          <p className="text-[#1a2850] text-md font-tertiary text-justify truncate hover:whitespace-normal">
        
        Là một hành trình sáng tạo đầy mê hoặc <br/> mà bạn sẽ được đưa vào thế giới kỳ diệu <br/> của nghệ sĩ sáng tạo, và những tác phẩm <br/> tinh túy  được trưng bày trên những tầng mây.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
