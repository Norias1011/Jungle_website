import '../styles/PlantItem.css'
import CareScale from "./CareScale";

function PlantItem({id, cover, name, water, light}) {
    return (
            <li className='lmj-plant-item' key={id}>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
    )
}

export default PlantItem