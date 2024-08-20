import React from "react";
import "../../i18n";
import { Button, ButtonGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
const languages = [
  {
    code: "en",
    lang: "English",
    flag: "🇺🇸",
    country: "us",
  },
  {
    code: "tr",
    lang: "Türkçe",
    flag: "🇹🇷",
    country: "tr",
  },
];

const LangSelector = () => {
  const { i18n, t } = useTranslation();

  const handleChangeLanguage = (code) => {
    i18n
      .changeLanguage(code)
      .then(() => {
        localStorage.setItem("lang", code);
      })
      .catch((error) => {
        console.error("Error in changing language:", error);
      });
  };

  return (
    <ButtonGroup className="d-flex ms-5">
      {languages.map(({ code, lang, country }) => (
        <Button
          key={code}
          /* variant="outline-light" */ onClick={() =>
            handleChangeLanguage(code)
          }
          className="fs-2"
        >
          <span className={`fi fi-${country}`}></span>
        </Button>
      ))}
    </ButtonGroup>
  );
};
export default LangSelector;