import Cards from "../../components/Cards/Cards"
import Demo from "../../components/Demo/Demo"
import Weather from "../../components/Weather/Weather"
import { CARD_DATA } from "../../data/CardData"


const Home = () => {
    return (
        <>

            <Demo />
            {/* cardData: props */}
            {/* <a href="" target=''></a> */}
            <Cards cardData={CARD_DATA} name="Pratik Dash" college="Kitts University" />
            <Weather cityName="Delhi" temprature="18 Deg" />

        </>
    )
}

export default Home