import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    menu: {
      display: 'flex',
      'justify-content': 'space-between',
    },
    link: {
        'text-decoration': 'none',
        color: '#fff'
    },
    cont: {
        marginBottom: 20
    }
});