import { useStore } from "@nanostores/react";

import { languageStore } from "../stores/languageStore";

import { LANGUAGES } from "../utils/models";

const ToggleLanguage = () => {
  const $language = useStore(languageStore);

  return (
    <div className="min-w-16 flex justify-center">
      {$language === LANGUAGES.ENGLISH ? (
        <button className="w-full" onClick={() => languageStore.set(LANGUAGES.SPANISH)}>
          Spanish
        </button>
      ) : (
        <button className="w-full" onClick={() => languageStore.set(LANGUAGES.ENGLISH)}>
          English
        </button>
      )}
    </div>
  );
};

export default ToggleLanguage