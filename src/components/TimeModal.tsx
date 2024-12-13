import { useState, useEffect } from "react";
import { Position } from "../types";
import { Activity } from "../types";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  isOpen: boolean;
  pos: Position;
  activity: Activity;
  onModalClose: () => void;
  onSubmit: (id: number, time: string) => void;
}

function TimeModal({ isOpen, pos, activity, onModalClose, onSubmit }: Props) {
  const [time, setTime] = useState(activity.time);

  useEffect(() => {
    setTime(activity.time); // Update `time` when `activity.time` changes
  }, [activity.time]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 transition-all duration-1000 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <form
        className={`fixed h-auto w-auto rounded border-2 border-stone-100 bg-stone-100 shadow transition-all duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        onSubmit={() => {
          onSubmit(activity.id, time);
          onModalClose();
        }}
      >
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="rounded border-2 border-stone-50 bg-white p-1"
        />
        <input type="submit" hidden />
        <button onClick={onModalClose} className="m-2 text-text">
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </button>
      </form>
    </div>
  );
}

export default TimeModal;
