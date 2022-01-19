import icon from './icons/favicon.ico'

const Picture = (props) => {
    return (
        <div>
            <img src={props.source} height = {200} width= {200} alt = 'Loading....'/>
        </div>
    )
}

export default Picture
