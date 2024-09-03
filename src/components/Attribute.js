



export default function Attribute({attrName, attrValue})
{
    return(
                <div style={{display: 'flex',  flexDirection: 'column'}}>
                    <p style={{ padding: 0, margin: 0, color: '#2e8f88', fontSize: 18}}>{attrName.charAt(0).toUpperCase()+ attrName.slice(1).split('_').join(' ')}</p>
                    <p style={{backgroundColor: "azure", color: 'black', border: "1px solid #EAEAEA", minWidth: 600, height: 50, padding: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{attrValue}</p>
                </div>
                
    )
}