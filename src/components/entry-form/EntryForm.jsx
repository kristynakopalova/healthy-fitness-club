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
        <h2>Vstupní formulář Healthy fitness clubu</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-columns">
            <label htmlFor="">
              <input
                type="text"
                name="titul"
                id="titul"
                value={inputs.titul || ''}
                onChange={handleChange}
                placeholder="Titul"
                className="form-input"
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                name="jmeno"
                id="jmeno"
                value={inputs.jmeno || ''}
                onChange={handleChange}
                placeholder="Křestní jméno"
                className="form-input"
              />
            </label>
            <label htmlFor="">
              <input
                type="text"
                name="prijmeni"
                id="prijmeni"
                value={inputs.prijmeni || ''}
                onChange={handleChange}
                placeholder="Příjmení"
                className="form-input"
              />
            </label>
            <label htmlFor="">
              <input
                type="email"
                name="email"
                id="email"
                value={inputs.email || ''}
                onChange={handleChange}
                placeholder="Email"
                className="form-input"
              />
            </label>
            <label htmlFor="">
              <input
                type="tel"
                name="mobil"
                id="mobil"
                pattern="[0-9]{9}"
                value={inputs.mobil || ''}
                onChange={handleChange}
                placeholder="Mobil (+420123456789)"
                className="form-input"
              />
            </label>
            <label htmlFor="">
              <input
                type="date"
                name="datum"
                id="datum"
                value={inputs.datum || ''}
                onChange={handleChange}
                placeholder="Datum narození"
                className="form-input"
              />
            </label>
            <label htmlFor="">
              <input
                type="number"
                name="vyska"
                id="vyska"
                value={inputs.vyska || ''}
                onChange={handleChange}
                placeholder="Výška v cm"
                className="form-input"
              />
            </label>
            <label htmlFor="">
              <input
                type="number"
                name="hmotnost"
                id="hmotnost"
                value={inputs.hmotnost || ''}
                onChange={handleChange}
                placeholder="Hmotnost v kg"
                className="form-input"
              />
            </label>
          </div>

          <label htmlFor="">
            <textarea
              name="onemocneni"
              id="onemocneni"
              cols="20"
              rows="8"
              value={inputs.onemocneni || ''}
              onChange={handleChange}
              placeholder="Onemocnění"
              className="form-input"
            ></textarea>
          </label>
          <label htmlFor="">
            <textarea
              name="leky"
              id="leky"
              cols="20"
              rows="8"
              value={inputs.leky || ''}
              onChange={handleChange}
              placeholder="Léky (vypsat pouze názvy léků)"
              className="form-input"
            ></textarea>
          </label>
          <label htmlFor="">
            <textarea
              name="poznamky"
              id="poznamky"
              cols="20"
              rows="8"
              value={inputs.poznamky || ''}
              onChange={handleChange}
              placeholder="Poznámky"
              className="form-input"
            ></textarea>
          </label>
          <label htmlFor="" className="mam-zajem">
            Mám zájem o:
            <div>
              <input
                type="checkbox"
                name="konzultace"
                id="konzultace"
                onChange={handleChangeCheckbox}
              />
              <label for="konzultace">
                Konzultace, testování, preskripce pohybové aktivity
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="individualni"
                id="individualni"
                onChange={handleChangeCheckbox}
              />
              <label for="individualni">Individuální cvičení</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="skupinove"
                id="skupinove"
                onChange={handleChangeCheckbox}
              />
              <label for="skupinove">Skupinové cvičení</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="nordic"
                id="nordic"
                onChange={handleChangeCheckbox}
              />
              <label for="nordic">Nordic walking</label>
            </div>
          </label>

          <input type="submit" value="Odeslat" />
        </form>
      </div>
    </div>
  );
}
