import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { Link } from "react-router-dom";

export default function WakeUp() {
  return (
    <div className="mx-auto my-8 max-w-2xl rounded-lg bg-neutral-50 p-6 text-text shadow-xl">
      <div className="font-futura mb-4 text-2xl">
        <Link to="/">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-stone-500 transition duration-200 hover:text-stone-600"
          />
        </Link>
        <span className="text-3xl text-text"> WAKE UP</span>
      </div>
      <hr className="border-1 border-text"></hr>
      <br></br>
      <div className="px-6">
        <p className="mb-4">
          Waking up consistently at the same time, especially on weekends, is
          the <strong className="font-semibold">most important</strong> part of
          the routine.
        </p>
        <p className="mb-8 font-bold text-text">
          Do not wake up more than 1 hour later than usual on weekends.
        </p>
        <h2 className="font-futura mb-4 text-2xl text-primary">
          Things to do after waking up
        </h2>
        <ul className="list-inside list-disc space-y-2 text-xl font-medium">
          <li className="hover:text-secondary transition duration-200 cursor-default">Get sunlight</li>
          <li className="hover:text-secondary transition duration-200 cursor-default">Drink 500ml of water</li>
          <li className="hover:text-secondary transition duration-200 cursor-default">Take a cold shower</li>
          <li className="hover:text-secondary transition duration-200 cursor-default">Stretch</li>
        </ul>
      </div>
    </div>
  );
}
