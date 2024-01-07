import cloud from '../assets/cloud.png'

function Cloud({className}: { className: string | undefined }) {
    return <img className={className} src={cloud} alt="cloud"/>
}

export default Cloud
