import {motion} from 'framer-motion'
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    const titleAnimation = {
      hidden: {
        opacity:0,
      },
      show:{
        opacity:1,
        transition:{
          staggerChildren:0.2,
        }
      }
    }
    const titleAnimationChildren = {
      hidden: {
        y:-100
      },
      show:{
      y:0,
        transition:{
          ease: 'easeInOut'
        }
      }
    }
    const imgAnimation = {
      hidden: {
        clipPath: "polygon(0 0, 0 0,0 100%, 0% 100%)"
      },
      show:{
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition:{
        delay:2.2,
        duration:0.5,
        ease: 'easeInOut'
      }
      }
    }
    const explainAnimation = {
      hidden: {
        clipPath: "polygon(0 0, 100% 0,100% 0, 0 0)"
      },
      show:{
      clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      transition:{
        delay:2.8,
        duration:0.5,
        ease: 'easeInOut'
      }
      }
    }
    const circleAnimation = {
      hidden: {
        scale: 0
      },
      show:{
     scale:1,
      transition:{
        delay:3.2,
        duration:0.5,
        ease: 'easeInOut'
      }
      }
    }
  return (
    <div className="h-screen  px-12 relative overflow-hidden">
      {/* navbar */}
      <Navbar />
      <div className="absolute -top-12 -left-12 w-[300px] h-[300px] bg-[#ac7139] blur-[120px]" />
      <div className="absolute bottom-0 -right-12 w-[300px] h-[300px] bg-[#749cb6] blur-[100px]" />
      <div>
        <motion.img
          src="/img/circle.png"
          alt="art"
          className="w-[120px] absolute z-[100] top-[70px] right-[430px] animate-spin-cham"
          variants={circleAnimation}
          initial="hidden" animate="show"
        />
      </div>
      <section className="h-[calc(100vh-80px)] flex flex-col items-center relative">
        <div className="absolute left-[190px] top-[150px] h-[100px] flex items-center overflow-hidden">
          <motion.div className="relative flex text-6xl font-primary text-[#e6951d]  shadow-blue-500 drop-shadow-xl z-50"
          variants={titleAnimation}
          initial="hidden"
          animate="show"
          >
            {Array.from("Trên đám mây").map((letter, idx) =>
              letter === " " ? (
                <motion.span key={idx}
                variants={titleAnimationChildren}
                >&nbsp;</motion.span>
              ) : (
                <motion.span
                variants={titleAnimationChildren}
                key={idx}>{letter}</motion.span>
              )
            )}
          </motion.div>
        </div>

        <div className="w-[500px] absolute top-[5rem] m-auto">
          <motion.img
            src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.15752-9/364547872_3236383243328346_1918633332804165710_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=eBOxAQu6X5sAX_Aysx-&_nc_oc=AQmlZSUdTCEadUh3JKQ4rSPfynaLvSWKmwoCW4M_QI3zgK-of_Kb6DU72mVJHk3dtstNuAoVPuoKyGzd77tiZzF1&_nc_ht=scontent.fsgn13-2.fna&oh=03_AdT2l4ikS4qKDS1kh5JxUkjam_1rfOaVNn7qBJSK-WUlNQ&oe=64F74B7F"
            alt="art-cloud"
            className="object-cover max-h-full w-full"
            variants={imgAnimation}
            initial="hidden"
            animate="show"
          />
        </div>
        <motion.div className="bg-[#eaeaea] p-4 w-[330px] absolute bottom-[240px] right-[190px] drop-shadow-lg z-50 rounded-[1rem]"
        variants={explainAnimation}
        initial="hidden"
        animate="show"
        >
          <p className="text-[#1a2850] text-md font-tertiary text-justify truncate hover:whitespace-normal">
        
        Là một hành trình sáng tạo đầy mê hoặc <br/> mà bạn sẽ được đưa vào thế giới kỳ diệu <br/> của nghệ sĩ sáng tạo, và những tác phẩm <br/> tinh túy  được trưng bày trên những tầng mây.
          </p>
        </motion.div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
