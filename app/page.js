import NewTable from "./components/Waitlist";
 import { users } from "./components/Columns";

const Home = () => {

  const combinedUserData = [...users];

  return (
    <div >
      <h1 className="text-2xl font-bold " >
        WaitList
      </h1>
      <NewTable users={combinedUserData}/>
    </div> 
  );
}

export default Home;