import { useState } from "react"
import Buttons from './Buttons'

const Main = () => {

    const [geldBetrag , setGelbetrag] = useState(345)
    const [eingabe, setEingabe] = useState('')

    const add = () => {
        const betragInput = Number (eingabe)
        console.log(betragInput)
        console.log(geldBetrag)

        setGelbetrag((prev) => prev + betragInput)
    }

    const sub = () => {
        const betragInput = Number (eingabe)

        if(geldBetrag < betragInput){
            alert('Kontoguthaben reicht nicht aus')
        }
        else{
            console.log(betragInput)
            console.log(geldBetrag)
            setGelbetrag((prev) => prev - betragInput)
        }
    }

    return(

        <main className="konto">
        <>
            <article>
                <h2>Dein Girokonto</h2>
            </article>

            <article>
                <p className="saldo">{geldBetrag}</p>
            </article>
            
            <article>
                <input className="geldbetrag" type={'number'} onChange={(e) => setEingabe(e.target.value)}/>
            </article>

            <article>
                <Buttons func={add} btnName='Einzahlen'/>
                <Buttons func={sub} btnName='Auszahlen'/>
            </article>

        </>
        </main>
    )
}

export default Main