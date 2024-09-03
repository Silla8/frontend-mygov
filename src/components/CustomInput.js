import {Style} from '../styles/style';



export default function CustomInput({name, type, placeholder, handler, value }){
    return (
        <input 
                minLength={(name==='password' || name==='pin') ? 7: 2}
                type={type} 
                name={name} 
                value={value}
                placeholder={placeholder}
                required 
                onChange={handler} 
                style={Style.input}    
            />
    )
}
