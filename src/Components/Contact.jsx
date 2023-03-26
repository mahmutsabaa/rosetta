import React, { useState } from "react";
import card1 from "../images/card-1.png";
import card2 from "../images/card-2.png";
import card22 from "../images/card-2-2.png";
import { TiTick } from "react-icons/ti";

function Contact() {
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    setSelectedButton(buttonNumber);
  };
  const [selectedButton, setSelectedButton] = useState(1);
  const [card1Content, setCard1Content] = useState({
    title: ["Selbststudium", "Selbststudium", "Lifetime Zugang"],
    subtitle: [
      "3 Monate - Englisch (Britisch)",
      "12 Monate - Alle Sprachen",
      "1 Account - Alle Sprachen",
    ],
    price: ["11", "7", "199"],
    features: [
      [
        "Preisgekrönte Methode",
        "Personalisierter Lernplan",
        "Flexibel lernen via Computer & App",
        "Patentiertes Spracherkennungstool",
      ],
      [
        "Preisgekrönte Methode",
        "Personalisierter Lernplan",
        "Flexibel lernen via Computer & App",
        "Patentiertes Spracherkennungstool",
        "Zugriff auf alle 24 Sprachen",
      ],
      [
        "Lebenslanger Zugang",
        "Preisgekrönte Methode",
        "Personalisierter Lernplan",
        "Flexibel lernen via Computer & App",
        "Patentiertes Spracherkennungstool",
        "Zugriff auf alle 24 Sprachen",
      ],
    ],
  });

  const [card2Content, setCard2Content] = useState({
    title: [
      "Selbststudium + Tutoring",
      "Selbststudium + Tutoring",
      "Lifetime Friends & Family",
    ],
    subtitle: [
      "3 Monate - Englisch (Britisch)",
      "12 Monate - Alle Sprachen",
      "5 Accounts - Alle Sprachen",
    ],
    price: ["29", "12", "499"],
    features: [
      [
        "Alle Features im Selbststudium Kurs",
        "Unbegrenzte Online-Sitzungen",
        "Zertifizierte muttersprachliche Tutoren",
        "Jede Sitzung dauert 25 Minuten",
        "An Ihren Lernfortschritt angepasst",
      ],
      [
        "Alle Features im Selbststudium Kurs",
        "Unbegrenzte Online-Sitzungen",
        "Zertifizierte muttersprachliche Tutoren",
        "Jede Sitzung dauert 25 Minuten",
        "An Ihren Lernfortschritt angepasst",
      ],
      [
        "5x Lifetime Zugang",
        "So funktioniert es",
        "Sie erhalten Aktivierungscodes",
        "Teilen Sie die Codes mit Freunden & Familie",
        "Jeder Nutzer registriert sich individuell auf der",
      ],
    ],
  });

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="contact">
          <div className="contact-1">
            <h4>Ich möchte lernen:</h4>
            <button className="btn mb-5 mt-1">
              ENGLISCH (BRITISCH)<i className="fa fa-chevron-down ms-2"></i>
            </button>
          </div>
          <div className="contact-2 container-fluid">
            <button
              className="btn rounded-start"
              onClick={() => handleClick(1)}
              style={{ backgroundColor: activeButton === 1 ? "#0098DB" : "" }}
            >
              <h6>3 Monate</h6>
              <p>1 Sprache enthalten</p>
            </button>
            <button
              className="btn "
              onClick={() => handleClick(2)}
              style={{ backgroundColor: activeButton === 2 ? "#0098DB" : "" }}
            >
              <h6>12 Monate</h6>
              <p>Alle Sprachen</p>
            </button>
            <button
              className="btn rounded-end"
              onClick={() => handleClick(3)}
              style={{ backgroundColor: activeButton === 3 ? "#0098DB" : "" }}
            >
              <h6>Lifetime</h6>
              <p>Alle Sprachen</p>
            </button>
          </div>
        </div>
        <div className="contact-3 container-fluid d-sm-flex justify-content-center my-5">
          {selectedButton === 1 && (
            <div className="card-1 rounded-2 h-75">
              <div className="ms-4 mt-4">
                <h2>{card1Content.title[0]}</h2>
                <p>{card1Content.subtitle[0]}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h1 className="ms-4">
                  €{card1Content.price[0]}
                  <sup style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                    ,99
                  </sup>
                  <sub style={{ fontSize: "1rem", fontWeight: "100" }}>
                    /Monat
                  </sub>
                </h1>

                <img src={card1} alt="" />
              </div>
              <ul>
                {card1Content.features[0].map((feature, index) => (
                  <li key={index}>
                    <TiTick />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <button className="btn btn-warning mt-3 w-75">Auswählen</button>
                <p
                  style={{
                    fontWeight: "100",
                    fontSize: "0.8rem",
                  }}
                  className="mt-2 mb-4"
                >
                  Gesamtpreis: <span style={{ fontWeight: "500" }}>35,97€</span>
                </p>
              </div>
            </div>
          )}
          {selectedButton === 2 && (
            <div className="card-1 rounded-2 h-75">
              <div className="ms-4 mt-4">
                <h2>{card1Content.title[1]}</h2>
                <p>{card1Content.subtitle[1]}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h1 className="ms-4">
                  €{card1Content.price[1]}
                  <sup style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                    ,88
                  </sup>
                  <sub style={{ fontSize: "1rem", fontWeight: "100" }}>
                    /Monat
                  </sub>
                  <h6 className="text-danger">
                    <strike> €15,75</strike>
                  </h6>
                </h1>
                <img src={card1} alt="" />
              </div>
              <ul>
                {card1Content.features[1].map((feature, index) => (
                  <li key={index}>
                    <TiTick />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <button className="btn btn-warning mt-3 w-75">Auswählen</button>
                <p
                  style={{
                    fontWeight: "100",
                    fontSize: "0.8rem",
                  }}
                  className="mt-2 mb-4"
                >
                  Gesamtpreis: <span style={{ fontWeight: "500" }}>35,97€</span>
                </p>
              </div>
            </div>
          )}
          {selectedButton === 3 && (
            <div className="card-1 rounded-2 h-75">
              <div className="ms-4 mt-4">
                <h2>{card1Content.title[2]}</h2>
                <p>{card1Content.subtitle[2]}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h1 className="ms-4">
                  €{card1Content.price[2]}
                  <sup style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                    ,00
                  </sup>
                  <sub style={{ fontSize: "1rem", fontWeight: "100" }}>
                    /Monat
                  </sub>
                  <h6 className="text-danger">
                    <strike> €349</strike>
                  </h6>
                </h1>
                <img src={card1} alt="" />
              </div>
              <ul>
                {card1Content.features[2].map((feature, index) => (
                  <li key={index}>
                    <TiTick />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <button className="btn btn-warning mt-3 w-75">Auswählen</button>
                <p
                  style={{
                    fontWeight: "100",
                    fontSize: "0.8rem",
                  }}
                  className="mt-2 mb-4"
                >
                  Gesamtpreis: <span style={{ fontWeight: "500" }}>35,97€</span>
                </p>
              </div>
            </div>
          )}
          {selectedButton === 1 && (
            <div className="card-2 border-5 rounded-2 h-100 ">
              <div className="ms-4 mt-4">
                <h2>{card2Content.title[0]}</h2>
                <p className="text-warning">{card2Content.subtitle[0]}</p>
                <div className="d-flex justify-content-between">
                  <h1>
                    {card2Content.price[0]}
                    <sup style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                      ,67
                    </sup>
                    <sub style={{ fontSize: "1rem", fontWeight: "100" }}>
                      /Monat
                    </sub>{" "}
                  </h1>
                  <img src={card2} alt="" />
                </div>
              </div>
              <ul>
                {card2Content.features[0].map((feature, index) => (
                  <li key={index}>
                    <TiTick />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button className="btn btn-warning mt-3 w-75">Auswählen</button>
                <p
                  style={{
                    fontWeight: "100",
                    fontSize: "0.8rem",
                  }}
                  className="mt-2 mb-4"
                >
                  Gesamtpreis: <span style={{ fontWeight: "500" }}>89€</span>
                </p>
              </div>
            </div>
          )}
          {selectedButton === 2 && (
            <div className="card-2 border-5 rounded-2 h-100 ">
              <div className="ms-4 mt-4">
                <h2>{card2Content.title[1]}</h2>
                <p className="text-warning">{card2Content.subtitle[1]}</p>
                <div className="d-flex justify-content-between">
                  <h1>
                    {card2Content.price[1]}
                    <sup style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                      ,42
                    </sup>
                    <sub style={{ fontSize: "1rem", fontWeight: "100" }}>
                      /Monat
                    </sub>
                    <h6 className="text-danger">
                      <strike> €24,92</strike>
                    </h6>
                  </h1>
                  <img src={card2} alt="" />
                </div>
              </div>
              <ul>
                {card2Content.features[1].map((feature, index) => (
                  <li key={index}>
                    <TiTick />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button className="btn btn-warning mt-3 w-75">Auswählen</button>
                <p
                  style={{
                    fontWeight: "100",
                    fontSize: "0.8rem",
                  }}
                  className="mt-2 mb-4"
                >
                  Gesamtpreis: <span style={{ fontWeight: "500" }}>149€</span>
                </p>
              </div>
            </div>
          )}
          {selectedButton === 3 && (
            <div className="card-2 border-5 rounded-2 h-100 ">
              <div className="ms-4 mt-4">
                <h2>{card2Content.title[2]}</h2>
                <p className="text-warning">{card2Content.subtitle[2]}</p>
                <div className="d-flex justify-content-between">
                  <h1>
                    {card2Content.price[2]}
                    <sup style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                      ,00
                    </sup>
                    <sub style={{ fontSize: "1rem", fontWeight: "100" }}>
                      /Monat
                    </sub>
                    <h6 className="text-danger">
                      <strike> €1745</strike>
                    </h6>
                  </h1>
                  <img src={card22} alt="" />
                </div>
              </div>
              <ul>
                {card2Content.features[2].map((feature, index) => (
                  <li key={index}>
                    <TiTick />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <button className="btn btn-warning mt-3 w-75 mb-5">
                  Auswählen
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
