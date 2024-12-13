import ActivityTable from "./ActivityTable";
import { useState, useEffect } from "react";

function Home() {
  const [date, setDate] = useState('');
  useEffect(() => {
    const today = new Date();
    setDate(today.toLocaleDateString("en-GB"));
  }, [])
  return (
    <div className="justfy-center flex min-h-screen flex-col items-center bg-background">
      <h1 className="m-4 py-2 text-center text-4xl text-black drop-shadow-lg font-futura border-b-2 border-black">
        ENERGIZE ROUTINE!
      </h1>
      <div className="font-futura text-lg">{date}</div>
      <ActivityTable
        activities={[
          { id: 1, name: "Wake Up", time: "08:00", isCompleted: false },
          { id: 2, name: "Stretch", time: "08:00", isCompleted: false },
          { id: 3, name: "Jumping Exercise", time: "10:00", isCompleted: false },
          { id: 4, name: "Eating Period Begins", time: "10:30", isCompleted: false },
          { id: 5, name: "Shake", time: "16:30", isCompleted: false },
          { id: 6, name: "🥊 Work Out", time: "19:00", isCompleted: false },
          { id: 7, name: "Eating Period Ends", time: "20:30", isCompleted: false },
          { id: 8, name: "Build", time: "21:00", isCompleted: false },
          { id: 9, name: "Wind Down Hour", time: "23:30", isCompleted: false },
          { id: 10, name: "Meditate", time: "00:00", isCompleted: false },
          { id: 11, name: "Sleep", time: "00:30", isCompleted: false },
        ]}
      />
    </div>
  );
}

export default Home;
