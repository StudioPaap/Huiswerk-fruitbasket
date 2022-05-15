import React from 'react';
import './App.css';

function App() {

    //Hier zet ik eerst mijn variabelen op
}
    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [voornaam, setVoornaam] = useState('');
    const [achternaam, setAchternaam] = useState('');
    const [leeftijd, setLeeftijd] = useState(0);
    const [postcode, setPostcode] = useState('');
    const [berzorging, toggleberzorging] = useState('week');
    const [deliveryTijdslot, toggleDeliveryTiidslot] = useState('daytime');
    const [opmerking, setOpmerking] = useState('Plaats hier je opmerkingen');
    const [termenAkkoord, toggletermenAkkoord] = useState(false);

    // hier zet ik mijn functies neer.
    function resetFruit() {
        setAardbeien(0);
        setBananen(0);
        setAppels(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
    Voornaam: ${voornaam}, 
    Achternaam: ${achternaam}, 
    Leeftijd: ${leeftijd}, 
    Postcode: ${postcode}, 
    Bezorgfrequentie: ${berzorging},
    Opmerkingen: ${opmerking},
    Algemene voorwaarden: ${termenAkkoord}
    `);
        console.log(`Fruitmand bestelling - aardbeiden: ${aardbeien}, bananen: ${bananen}, appels: ${appels}, kiwi's: ${kiwis}`);

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
            <button type="button" disabled= {appels === 0} onClick={appels-1}>
                -
            </button>
            <button type="button" onClick= {() => setAppels{appels+1}>
                +
            </button>
        </article>

                <article></button>



    </>
  );
}

export default App;
