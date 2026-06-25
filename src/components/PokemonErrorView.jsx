import errorImage from "./error.png";

export default function PokemonFallbackView({ message }){
    return (
        <div role="alert">

            <img src={errorImage} width="240" alt="sadcat"/>
            {message}

        </div>
    )
}