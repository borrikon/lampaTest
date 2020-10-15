import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        minWidth: 700,
        marginBottom: 20
    },
    number:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        minWidth: 100
    },
    image:{
        width: 300,
    },
    content:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 50px 0  0!important'
    },
    innerContent:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 16
    }
});