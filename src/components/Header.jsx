const Header = (props) => {
   return (
      <div className="App-header">
          <header>
              <h1 className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"> <img src={props.logo} alt="" /> {props.title}</h1>
          </header>
      </div>
   );  
}

export default Header;