

 const Style = {
    input: {
        fontFamily: 'verdana, "Times New Roman"',
        outline: 'none',
        width: '90%',
        height: '90%',
        padding: 10, 
        borderWidth: 1, 
        borderRadius: 5, 
        borderColor: '#b1c5c4',
        fontSize: 15,
    }, 

    button: {
        backgroundColor: '#336663',
        display: 'flex',
        color: 'white',
        padding: 3,
        borderRadius: 20,
        border: 'none',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        justifyContent: 'center', 
        verticalAlign: 'center'
    },
    DetailSection: {
        height: '75vh', 
        width:'100%',
        paddingTop: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        columnGap: 30, 
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        alignItems: 'center',
        justifyContent: 'center'
    },
    AttrList :{
        display:'flex', 
        columnGap: 15, 
        border: "1px solid #EAEAEA", 
        borderRadius: 10, 
        width: '60%', 
        padding: 20, 
        flexWrap: "wrap",
        overflow: "scroll",  
        overflowX:'hidden', 
        //overflowY: 'hidden',
        justifyContent: 'center',
        
    },
    DetailSection1: {
        height: '75vh', 
        width:'100%',
        paddingTop: 10, 
        display: 'flex', 
        flexDirection: 'row', 
        columnGap: 30, 
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    RecoveryScreen: {
        backgroundColor: "#336663", 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        color: 'white',
        height: '100vh',

    },
    RecoverySection: {
        backgroundColor: 'white',
        color: "#336663",
        borderRadius: 10,
        border: "1px solid #EAEAEA",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 15,
        margin: 30,
        padding: 30,
        width: '50%', 
        height: '70%'
    },
    RecoveryForm: {
        backgroundColor: 'white',
        color: "#336663",
        borderRadius: 10,
        border: "1px solid #EAEAEA",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 25,
        padding: 40,
        width: '70%',

    }
   

}

export { Style };