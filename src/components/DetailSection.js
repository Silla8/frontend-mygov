import Attribute from "./Attribute";
import { Style } from "../styles/style";
import '../styles/list.css';




export default function DetailSection({ response, title }){
    return(
        
        <div style={Style.DetailSection}>
            <h2 style={{opacity: 0.8}}>{title}</h2>
            <div style={Style.AttrList} className='list'>
            {Object.entries(response).map(value => <Attribute attrName={value[0]} attrValue={typeof value[1] ==='boolean' ? (value[1]===true ? 'Yes' : 'No') : value[1]} /> ) }
            </div>
        </div>

    );
}