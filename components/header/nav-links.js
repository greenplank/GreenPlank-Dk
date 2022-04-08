import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link href="/">
          <a>Hjem</a>
        </Link>
      </li>
      <li>
        <Link href="/om-oss">
          <a>Om</a>
        </Link>
      </li>
      <li>
        <Link href="/galleri">
          <a>Galleri</a>
        </Link>
      </li>
    
      <li className="dropdown">
        <Link href="#">
          <>
            <a>Produkter</a>
            <button
              aria-label="dropdown toggler"
              onClick={handleDropdownStatus}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </>
        </Link>
        <ul className="dropdown-list">
          <li className="dropdown">
            <Link href="#">
              <>
                <Link href="/komposit-terrassebraedder">
                  <a>Komposit Terrassebrædder</a>
                </Link>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/smart-terrassebraedder">
                  <a>Smart terrassebrædder</a>
                </Link>
              </li>
              <li>
                <Link href="/marine-terrassebraedder">
                  <a>Marine terrassebrædder</a>
                </Link>
              </li>
              <li>
                <Link href="/entra-terrassebraedder">
                  <a>Entra terrassebrædder</a>
                </Link>
              </li>
              <li>
                <Link href="/klassisk-terrassebraedder">
                  <a>Klassisk terrassebrædder</a>
                </Link>
              </li>
              <li>
                <Link href="/green-plank-tillbehor-till-kompositterrassebraedder">
                  <a>Komposit Terrassebrædder Tilbehør</a>
                </Link>
              </li>
              <li>
                <Link href="/green-plank-everdeck-terrassebraedder">
                  <a>EVERDECK™ Terrassebrædder</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
                <Link href="/facadebeklaedning">
                  <a>Facadebeklædning</a>
                </Link>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/novoclad-fasadpanel-gp798">
                  <a>Novoclad™-GP798</a>
                </Link>
              </li>
              <li>
                <Link href="/primacap-fasadpanel-gp801">
                  <a>Primacap™-GP801</a>
                </Link>
              </li>
              <li>
                <Link href="/primacap-fasadpanel-gp802">
                  <a>Primacap™-GP802</a>
                </Link>
              </li>
              <li>
                <Link href="/fasadpanel-tillbehor">
                  <a>tilbehør</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
                <Link href="/hegn-system">
                  <a>Hegn System</a>
                </Link>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/komposit-staket-private">
                  <a>NOVOFENCE™ Private™</a>
                </Link>
              </li>
              <li>
                <Link href="/komposit-staket-traditional">
                  <a>NOVOFENCE™ Traditional™</a>
                </Link>
              </li>
              <li>
                <Link href="/komposit-staket-modern">
                  <a>NOVOFENCE™ Modern™</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/udendors-baenke">
              <a>udendørs bænke</a>
            </Link>
          </li>
          <li className="dropdown">
            <Link href="#">
              <>
                <Link href="/daekfliser">
                  <a>Dækfliser</a>
                </Link>
                <button
                  aria-label="dropdown toggler"
                  onClick={handleDropdownStatus}
                >
                  <i className="fa fa-angle-down"></i>
                </button>
              </>
            </Link>
            <ul className="dropdown-list">
              <li>
                <Link href="/instaclik-balkongplattor-gp702t">
                  <a>INSTACLIK™-GP702T</a>
                </Link>
              </li>
              <li>
                <Link href="/evertile-balkongplattor-et703t">
                  <a>EVERTILE ™ – ET703T</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/planlag">
          <a>Planlæg</a>
        </Link>
      </li>
      <li>
        <Link href="/distributorer">
          <a>Distributører</a>
        </Link>
      </li>
      <li>
        <Link href="/find-installator">
          <a>Find installatør</a>
        </Link>
      </li>
      <li>
        <Link href="/kontakt-os">
          <a>Kontakt os</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
