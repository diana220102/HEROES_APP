import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher"


export const HeroList = ({ publisher }) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes(publisher) ){
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    const heroes = getHeroesByPublisher(publisher)
    return (
        <>
            <ul>
                {
                    heroes.map( hero => (
                        <li key={ hero.id }>
                            { hero.superhero }
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
