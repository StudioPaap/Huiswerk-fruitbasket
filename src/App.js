import React from 'react';
import './App.css';


function App() {

    //Hier zet ik eerst mijn variabelen op




const [aardbeien, setAardbeien] = React.useState(0);
const [bananen, setBananen] = React.useState(0);
const [appels, setAppels] = React.useState(0);
const [kiwis, setKiwis] = React.useState(0);

const [voornaam, setVoornaam] = React.useState('');
const [achternaam, setAchternaam] = React.useState('');
const [leeftijd, setLeeftijd] = React.useState(0);
const [postcode, setPostcode] = React.useState('');
const [bezorging, togglebezorging] = React.useState('week');
const [BezorgTijdslot, toggleBezorgTiidslot] = useState('daytime');
const [opmerking, setOpmerking] = React.useState('Plaats hier je opmerkingen');
const [termenAkkoord, toggletermenAkkoord] = React.useState(false);

// hier zet ik mijn functies neer.
function resetFruit() {
    setAardbeien(0);
    setBananen(0);
    setAppels(0);
    setKiwis(0);
}
 function handleClick() {
     console.log(`
    Voornaam: ${voornaam}, 
    Achternaam: ${achternaam}, 
    Leeftijd: ${leeftijd}, 
    Postcode: ${postcode}, 
    Bezorgfrequentie: ${bezorging},
    Opmerkingen: ${opmerking},
    Algemene voorwaarden: ${termenAkkoord}
    `);
     console.log(`Fruitmand bestelling - aardbeiden: ${aardbeien}, bananen: ${bananen}, appels: ${appels}, kiwi's: ${kiwis}`);


//Hier wordt de app gestart
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <article className="counter">
                <h2> Aardbeien</h2>
                <p>{aardbeien}</p>
                <button type="button" disabled={aardbeien === 0} onClick={() => setAardbeien(aardbeien - 1)}>
                    -
                </button>
                <button type="button" onClick={() => setAardbeien(aardbeien + 1)}>
                    +
                </button>
            </article>

            <h1>Fruitmand bezorgservice</h1>

            <article className="counter">
                <h2> Bananen</h2>
                <p>{bananen}</p>
                <button type="button" disabled={bananen === 0} onClick={() => setBananen(bananen - 1)}>
                    -
                </button>
                <p>{bananen}</p>
                <button type="button" onClick={() => setBananen(bananen + 1)}>
                    +
                </button>
            </article>

            <article className="counter">
                <h2>Appels</h2>
                <p>{appels}</p>
                <button type="button" disabled={appels === 0} onClick={() => setAppels(appels - 1)}>
                    -
                </button>
                <button type="button" onClick={() => setAppels(appels + 1)}>
                    +
                    </button>
                    </article>

            <button type="submit"
            onClick= {resetFruit}>
                Reset
            </button>



                    {/*// Hier komt mijn formulier*/}

            <form className="formulier" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="voornaam">Voornaam</label>
                <input type="text" id="Naam"
                       placeholder="Naam"
                       value={voornaam}
                       onChange={() => setVoornaam(e.target.value) }/>

                <label htmlFor="achternaam">Achternaam</label>
                <input type="text" id="Achternaam"
                       placeholder="Achternaam"
                       value={achternaam}
                       onChange={() => setAchternaam(e.target.value) }/>

                <label htmlFor="leeftijd">Leeftijd</label>
                <input type="number" id="leeftijd"
                       placeholder="Leeftijd"
                       value={leeftijd}
                       onChange={() => setLeeftijd(e.target.value) }/>

                <label htmlFor="postcode">Postcode</label>
                <input type="number" id="Postcode"
                       placeholder="Postcode"
                       value={postcode}
                       onChange={() => setPostcode(e.target.value) }/>

                <label htmlFor="bezorging">Bezorgopties</label>
                <select id="bezorging"
                        value={bezorging}
                        onChange={() => togglebezorging(e.target.value) }/>>
                <option value="Iedere week"> Iedere week </option>
                <option value="Om de week"> Om de week </option>
                <option value="Iedere maand"> Iedere maand </option>


            <p> Bezorgtijd</p>

            <input type="radio"
                   id="Bezorgtijd"
                   value="Ochtend"
                   checked={BezorgTijdslot === "ochtend"}
                   onChange={(e) =>toggleBezorgTiidslot (e.target.value) }/>
            <label htmlFor="Bezorgtijd">
                Bezorgtijd
            </label>

            <input type="radio"
                   id="Bezorgtijd"
                   value="Middag"
                   checked={BezorgTijdslot === "middag"}
                   onChange={(e) =>toggleBezorgTiidslot (e.target.value) }/>
            <label htmlFor="Bezorgtijd">
                Middag
            </label>

            <input type="radio"
                   id="Bezorgtijd"
                   value="Avond"
                   checked={BezorgTijdslot === "Avond"}
                   onChange={(e) =>toggleBezorgTiidslot (e.target.value) }/>
            <label htmlFor="Bezorgtijd">
                Avond
            </label>

            <textarea id="opmerkingen"
                      value={opmerking}
                      placeholder="Plaats hier uw opmerkingen"
                      onChange={()=> setOpmerking(e.target.value)}
                      />

                <label htmlFor="termOfConditions">
                <input type="checkbox"
                       name="termOfConditions"
                       id="termOfConditions"
                       checked={termenAkkoord}
                       onChange={() => toggletermenAkkoord(!termenAkkoord)}>
                       Ik ga akkoord met de algemene voorwaarden
                </input>
            </label>

                <button
                    type="submit"
                    disabled={!termenAkkoord}
                    onClick={handleClick}>
                    Verstuur
                </button>



            </form>

                    </>
    );
 }

    export default App;