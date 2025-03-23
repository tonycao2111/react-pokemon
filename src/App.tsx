import "./App.css";

function App() {
  return (
    <>
      {/* Layout */}
      <div className="w-full bg-[linear-gradient(180deg,#F5DB13_0%,#F2B807_100%)] h-screen">

        {/* Navbar */}
        <div className="h-[100px] shadow-md flex items-center justify-between px-[100px] py-8">
          
            {/* Logo */}
            <div>
              <img src="Logo.png" alt="Pokemon"></img>
            </div>

            {/* Headings */}
            <div className="flex justify-between gap-20">
              {/* Home */}
              <div className="border-b border-black pb-1"> 
                <h1>Home</h1>
              </div>

              {/* Pokedex */}
              <div>
                <h1>Pokedex</h1>
              </div>

              {/* Legendaries */}
              <div>
                <h1>Legendaries</h1>
              </div>

              {/* Documentations */}
                <div>
                  <h1>Documentations</h1>
                </div>

            </div>
          
        </div>
        
        {/* Body */}
        <div className="flex justify-between align-center pt-10 mb-10">
          {/* Left */}
          <div className="flex flex-col pl-[100px] pt-8">
            {/* Words */}
            <div className="">
              <h1 className="text-7xl"><strong>Find</strong> all your<br/> favourite<br/> <strong>Pokemon</strong></h1>
              <br/><br/>
              <h2 className="text-3xl">You can know the type of Pokemon,<br/> its strengths, disadvantages and <br/>abilities</h2>
            </div>

            {/* Button */}
            <div className=" mt-20">
              <button className="bg-green-400 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-500 active:bg-green-600">
                See pokemons
              </button>
            </div>           

          </div>

          {/* Right */}
          <div className="flex justify-end ">
            <img src="BannerComplete.png" alt="pikachu" className=" w-6/7" />
          </div>
          
        </div>
        
        {/* Footer */}
        <div className= "flex justify-between">
          {/* left */}
          <div className="pl-[100px]">
            <p><strong>Made with ❤️ for the PokéSpartans team Platzi Master</strong></p>
          </div>

          {/* right */}
          <div className="pr-[100px]">
            <p><strong>Ours Team</strong></p>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
