import { useEffect } from "react";
import { useInstrument } from "../../state/Instrument";
import { useAudioContext } from "../../useAudioContext";
import { useSoundfont } from "../../adapters/Soundfont";
import { Keyboard } from "./Keyboard";
import { useMount } from "../../utils/useMount";
import { SoundfontProvider } from "../../adapters/Soundfont";

import { withInstrument } from "../../adapters/Soundfont";
import { withInstrumentHOC } from "../../adapters/Soundfont";

const WrappedKeyboard = withInstrument(Keyboard);
const HookedHOCKyeboard = withInstrumentHOC(Keyboard);

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  // const { loading, current, play, stop, load } = useSoundfont({ AudioContext });

  // useEffect(() => {
  //   if (!loading && instrument !== current) load(instrument);
  // }, [load, loading, current, instrument]);

  // // useMount(() => load());

  // return (
  //   <SoundfontProvider
  //     AudioContext={AudioContext}
  //     instrument={instrument}
  //     render={(props) => <Keyboard {...props} />}
  //   />
  // );

  return (
    <HookedHOCKyeboard AudioContext={AudioContext} instrument={instrument} />
  );
};
