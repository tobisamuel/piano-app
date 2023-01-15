import { useAudioContext } from "../../useAudioContext";
import { NoAudioMessage } from "../NoAudioMessage";
import { Playground } from "../Playground";

export const Main = () => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};
