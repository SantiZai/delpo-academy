const ToggleLanguage = () => {
  const toggleLanguage = () => {
    if (window.location.pathname.includes("/en")) {
      window.location.href = window.location.pathname.replace("en", "es")
    } else {
      window.location.href = window.location.pathname.replace("es", "en")
    }
  }

  return (
    <div className="min-w-16 flex justify-center">
      {window.location.pathname.includes("/en") ? (
        <button className="w-full" onClick={toggleLanguage}>
          Spanish
        </button>
      ) : (
        <button className="w-full" onClick={toggleLanguage}>
          English
        </button>
      )}
    </div>
  );
};

export default ToggleLanguage