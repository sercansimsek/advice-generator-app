import { useEffect, useState } from "react";
import { AdviceCard } from "./components/AdviceCard/AdviceCard";

export interface Advice {
  advice: string;
  id: number;
}

const fetchAdvice = async (): Promise<Advice> => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not fetch advice");
  }

  const data = await response.json();
  return data.slip;
};

export const App = () => {
  const [advice, setAdvice] = useState<Advice | undefined>();

  useEffect(() => {
    fetchAdvice().then(setAdvice).catch(console.error);
  }, []);

  const handleRefresh = () => {
    fetchAdvice().then(setAdvice).catch(console.error);
  };

  return (
    <>{advice && <AdviceCard advice={advice} onRefresh={handleRefresh} />}</>
  );
};
