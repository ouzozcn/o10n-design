import { PacmanLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="text-center text-2xl font-sans">o10n.design</div>
      <div className="sweet-loading">
        <PacmanLoader color="#292524" size={40} />
      </div>
      <div className="text-center text-2xl font-sans font-bold">Loading...</div>
    </div>
  );
}
