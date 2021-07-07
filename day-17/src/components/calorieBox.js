import '../styles/calorieBox.css'

const calorieBox = ({props}) =>{
    const {name, calorie} = props

    return(
        <>
            <div className="calorieBox">
                <div className="food"><h2>{name}</h2></div>
                <div className="data"><p>you have consumed <strong>{calorie}</strong> cals today</p></div>
            </div>
        </>
    )
}

export default calorieBox