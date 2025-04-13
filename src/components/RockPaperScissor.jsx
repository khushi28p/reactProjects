import React, { useState } from "react";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const RockPaperScissor = () => {
  const choices = [
    { name: "Rock", icon: <FaRegHandRock /> },
    { name: "Paper", icon: <FaRegHandPaper /> },
    { name: "Scissor", icon: <FaRegHandScissors /> },
  ];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [stats, setStats] = useState({ Won: 0, Lost: 0, Draw: 0 });

  const playGame = (choice) => {
    setUserChoice(choice);
    const computerRandomChoice =
      choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerRandomChoice);

    findWinner(choice, computerRandomChoice);
  };

  const findWinner = (user, computer) => {
    if (user.name === computer.name) {
      setResult("It's a Draw!");
      setStats((prev) => ({ ...prev, Draw: prev.Draw + 1 }));
    } else if (
      (user.name === "Rock" && computer.name === "Scissor") ||
      (user.name === "Paper" && computer.name === "Rock") ||
      (user.name === "Scissor" && computer.name === "Paper")
    ) {
      setResult("You Won!");
      setStats((prev) => ({ ...prev, Won: prev.Won + 1 }));
    } else {
      setResult("You Lost!");
      setStats((prev) => ({ ...prev, Lost: prev.Lost + 1 }));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <h1 className="text-4xl font-bold py-10">Rock Paper Scissor</h1>
      {!userChoice ? (
        <div className="flex justify-center items-center gap-16">
          {choices.map((choice, index) => (
            <div key={index}
              className="flex-col justify-center cursor-pointer border-3 px-16 py-8 rounded-lg hover:bg-gray-200/30 shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
              onClick={() => playGame(choice)}
            >
              <div className="flex align-center items-center justify-center text-9xl">
                {choice.icon}
              </div>
              <p className="flex justify-center font-semibold py-4 text-xl">
                {choice.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-4xl font-bold">{result}</h2>
          <div className="flex justify-center items-center gap-16 font-semibold text-xl border-3 px-16 rounded-lg">
            <div className="flex flex-col justify-center items-center gap-4 text-9xl py-12">
              <div>{userChoice.icon}</div>
              <p className="font-semibold py-4 text-xl">{userChoice.name}</p>
            </div>
            <div className="text-4xl">v/s</div>
            <div className="flex flex-col justify-center items-center gap-4 text-9xl py-12">
              <div>{computerChoice.icon}</div>
              <p className="font-semibold py-4 text-xl">
                {computerChoice.name}
              </p>
            </div>
          </div>
          
          <Button onClick={() => setUserChoice(null)}>Play Again!!!</Button>
        </div>
      )}
      <div className="flex justify-center items-center gap-16 py-4 font-semibold text-xl">
        <div className="text-green-500">Won: {stats.Won}</div>
        <div className="text-red-500">Lost: {stats.Lost}</div>
        <div className="text-blue-500">Draw: {stats.Draw}</div>
      </div>
    </div>
  );
};

export default RockPaperScissor;
