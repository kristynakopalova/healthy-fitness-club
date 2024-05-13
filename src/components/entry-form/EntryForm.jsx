import { useState } from 'react';
import './styles.css';
import Header from '../header/Header';

export function EntryForm() {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleChangeCheckbox(event) {
    const name = event.target.name;
    const value = event.target.checked;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <div>
      <Header />
      <div className="entry-form">
        <h2>Vstupní formulář</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-columns">
              {/* Added div for two-column layout */}
            <div className="column">
              <label htmlFor="">
                Titul:
                <input
                  type="text"
                  name="titul"
                  id="titul"
                  value={inputs.titul || ''}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Křestní jméno:
                <input
                  type="text"
                  name="jmeno"
                  id="jmeno"
                  value={inputs.jmeno || ''}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Příjmení:
                <input
                  type="text"
                  name="prijmeni"
                  id="prijmeni"
                  value={inputs.prijmeni || ''}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Email:
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={inputs.email || ''}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="column">
              <label htmlFor="">
                Mobil (ve formátu 123456789):
                <input
                  type="tel"
                  name="mobil"
                  id="mobil"
                  pattern="[0-9]{9}"
                  value={inputs.mobil || ''}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Datum narození:
                <input
                  type="date"
                  name="datum"
                  id="datum"
                  value={inputs.datum || ''}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Výška v cm:
                <input
                  type="number"
                  name="vyska"
                  id="vyska"
                  value={inputs.vyska || ''}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="">
                Hmotnost v kg:
                <input
                  type="number"
                  name="hmotnost"
                  id="hmotnost"
                  value={inputs.hmotnost || ''}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <label htmlFor="">
            Mám zájem o:
            <input
              type="checkbox"
              name="konzultace"
              id="konzultace"
              onChange={handleChangeCheckbox}
            />
            <label for="konzultace">
              Konzultace, testování, preskripce pohybové aktivity
            </label>
            <input
              type="checkbox"
              name="individualni"
              id="individualni"
              onChange={handleChangeCheckbox}
            />
            <label for="individualni">Individuální cvičení</label>
            <input
              type="checkbox"
              name="skupinove"
              id="skupinove"
              onChange={handleChangeCheckbox}
            />
            <label for="skupinove">Skupinové cvičení</label>
            <input
              type="checkbox"
              name="nordic"
              id="nordic"
              onChange={handleChangeCheckbox}
            />
            <label for="nordic">Nordic walking</label>
          </label>
          <label htmlFor="">
            Onemocnění:
            <textarea
              name="onemocneni"
              id="onemocneni"
              cols="20"
              rows="8"
              value={inputs.onemocneni || ''}
              onChange={handleChange}
            ></textarea>
          </label>
          <label htmlFor="">
            Léky (vypsat pouze názvy léků):
            <textarea
              name="leky"
              id="leky"
              cols="20"
              rows="8"
              value={inputs.leky || ''}
              onChange={handleChange}
            ></textarea>
          </label>
          <label htmlFor="">
            Poznámky:
            <textarea
              name="poznamky"
              id="poznamky"
              cols="20"
              rows="8"
              value={inputs.poznamky || ''}
              onChange={handleChange}
            ></textarea>
          </label>
          <input type="submit" value="Odeslat" />
        </form>
      </div>
    </div>
  );
}
