import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    commentsOuter:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection : "column-reverse"
    },
    commentsInner:{
        height : "200px",
        width:"100%",
        overflowY: "auto",
    },  
    commentInput:{
        width:"100%",
        display:"flex",
        justifyContent : "space-around",
        marginBottom : "1rem"
    },
    submitButton:{
        width:"20%",    
        marginLeft : "1rem"
    }
}))