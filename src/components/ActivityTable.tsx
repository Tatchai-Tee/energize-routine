import { useState } from "react";
import TimeModal from "./TimeModal";
import { Position } from "../types";
import { Activity } from "../types";
import { Link } from "react-router-dom";

interface Props {
  activities: Activity[];
}

function ActivityTable({ activities }: Props) {
  const [activityList, setActivityList] = useState(activities);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPos, setModalPos] = useState<Position>({ x: 0, y: 0 });
  const [currentActivity, setCurrentActivity] = useState<Activity>(
    activityList[0],
  );

  function handleSetTime(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    activity: Activity,
  ) {
    setCurrentActivity(activity);
    setModalPos({ x: e.clientX, y: e.clientY });
    setModalOpen(true);
  }

  function handleCheck(activity: Activity) {
    const updatedActivityList = activityList.map((a) =>
      a.id === activity.id ? { ...a, isCompleted: !a.isCompleted } : a,
    );
    setActivityList(updatedActivityList);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function handleTimeSubmit(id: number, time: string) {
    const updatedActivityList = activityList.map((activity) =>
      activity.id === id ? { ...activity, time } : activity,
    );
    setActivityList(updatedActivityList);
    closeModal();
  }

  return (
    <div>
      <TimeModal
        isOpen={modalOpen}
        pos={modalPos}
        activity={currentActivity}
        onModalClose={closeModal}
        onSubmit={handleTimeSubmit}
      ></TimeModal>
      <div className="rounded-lg overflow-hidden my-6 shadow-xl">
        <table className="mx-auto min-w-96 border-collapse text-lg">
          <thead className="bg-primary text-left text-text text-xl">
            <tr>
              <th className="py-3 px-5 font-futura font-medium">Time</th>
              <th className="p-3 font-futura font-medium">Activity</th>
              <th className="py-3 px-5 text-center font-futura font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white text-left text-gray-800">
            {activityList.map((activity) => (
              <tr
                className="border-b-2 border-stone-200 even:bg-stone-100 last-of-type:border-primary last-of-type:border-b-4"
                key={activity.id}
              >
                <td className="py-3 px-5">
                  <span
                    className="transition duration-200 hover:cursor-pointer hover:text-secondary"
                    onClick={(e) => handleSetTime(e, activity)}
                  >
                    {activity.time}
                  </span>
                </td>

                <td className="p-3"><Link to={activity.name.replace(/ /g, "-")} className="hover:text-secondary transition duration-200">{activity.name}</Link></td>

                <td className="text-center">
                  {activity.isCompleted != null && <input
                    type="checkbox"
                    onChange={() => handleCheck(activity)}
                    checked={activity.isCompleted as boolean}
                  ></input>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityTable;
