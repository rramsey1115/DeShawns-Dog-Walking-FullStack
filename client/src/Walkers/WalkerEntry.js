export const WalkerEntry = ({walker}) => {
// wc = walker city object from WalkersView.js
    console.log('walker', walker);

    return (
    <div className="walker-entry">
        <img className="walker-entry-img" src={walker?.picUrl} alt="walker" />
        <h4 className="walker-entry-name">{walker?.name}</h4>
    </div>
    )
}