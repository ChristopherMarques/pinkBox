import Styles from "./favoriteButton.module.scss"

export default function FavoriteButton(){
    const [favorite, setFavorite] = useState(false);
    return <button onClick={() => setFavorite(!favorite)}>🖤</button>;
}