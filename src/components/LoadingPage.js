import ReactLoading from 'react-loading';

export default function LoadingPage(){

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh', width: '100vw'}}>
        <ReactLoading type={'spin'} color={'#80b6b3'} height={100} width={100} />
    </div>
    )
}