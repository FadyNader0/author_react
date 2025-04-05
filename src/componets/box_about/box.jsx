import './box.css'

export default function Box({tittle,text}) {
    return (
        <div className="box">
            <h5 className="card-title">{tittle}</h5>
            <p className="card-text">{text}</p>
        </div>        

    )
}