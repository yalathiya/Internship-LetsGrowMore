import "./App.css";
import API from "./components/API.js";
import CallAPI from "./components/CallAPI.js";

function App() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <>
      {/* <Navbar /> */}
      <>VARIYA GARMENT</>
      <br></br>
      <>GET USERS BUTTON</>
      <br></br>
      <button onClick={sayHello}>Get Users</button>
      <br></br>
      <CallAPI />
      <>Data is fetched by api</>
    </>
  );
}

export default App;
