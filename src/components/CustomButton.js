import '../styles/CustomButton.css'
import ReactLoading from 'react-loading';
import {Style} from '../styles/style';

export default function CustomButton({title, width, fontSize, loading}){

    return (
        <button 
            type='submit' 
            className='button'
            style={{...Style.button, width: width, fontSize: fontSize,}}
            > {loading ? <span style={{paddingBottom: 10}}><ReactLoading type={'spin'} color={'white'} height={20} width={20} /></span>:title}
        </button>
    )
}