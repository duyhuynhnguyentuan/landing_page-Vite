
import './App.css'

function App() {

  return (
    <div className='h-screen px-12 relative overflow-hidden'>
      {/* navbar */}
      <div className='absolute -top-12 -left-12 w-[300px] h-[300px] bg-[#ac7139] blur-[120px]'/>
      <div className='absolute bottom-0 -right-12 w-[300px] h-[300px] bg-[#749cb6] blur-[100px]'/>
     <div>
      <img src='/img/circle.png' alt='art' className='w-[100px] absolute top-[100px] right-[380px] animate-spin-cham'/>
     </div>
    <section className='h-[calc(100vh-80px)] flex flex-col items-center relative'>
      <div className='absolute left-[200px] top-[200px] h-[100px] flex items-center overflow-hidden'>
        <div className='relative flex text-6xl font-primary text-[#e6951d] drop-shadow-lg z-50'>
         { Array.from("Gallary-Art").map((letter,idx)=>(
            <span key={idx}>{letter}</span>
          ))}
        </div>
      </div>
      <div className='h-[500px] m-auto'>
          <img src=''/>
      </div>
      <div className='bg-[#0e0e0e] p-4 w-[300px] absolute bottom-[150px] right-[200px] drop-shadow-lg z-50'>
          <p className='text-[#eaeaea] text-sm text-justify'>
            Lorem ipsum cc dhhsdkfhsjdhf asdj haksdh akjshdfasdkjfasda djfsj dfahsd kjhas djk asdjkf asjd hfakjdsfkja dsfkj akjdf hasdkjfh asjdfaksd fkjads hfkj asdfkjakjdsfjka sdfjk asdfk asdhfkjad shfkja sfdhkj 
          </p>
      </div>
    </section>
      
    </div>
  )
}

export default App
