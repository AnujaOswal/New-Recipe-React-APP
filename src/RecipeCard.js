import React, { Fragment } from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
        import { makeStyles } from '@material-ui/core/styles';
        import clsx from 'clsx';
        import Card from '@material-ui/core/Card';
        import CardHeader from '@material-ui/core/CardHeader';
        import CardMedia from '@material-ui/core/CardMedia';
        import CardContent from '@material-ui/core/CardContent';
        import CardActions from '@material-ui/core/CardActions';
        import Collapse from '@material-ui/core/Collapse';
        import Avatar from '@material-ui/core/Avatar';
        import IconButton from '@material-ui/core/IconButton';
        import Typography from '@material-ui/core/Typography';
        import { red } from '@material-ui/core/colors';
        import FavoriteIcon from '@material-ui/icons/Favorite';
        import ShareIcon from '@material-ui/icons/Share';
        import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
        import MoreVertIcon from '@material-ui/icons/MoreVert';
        

        const useStyles = makeStyles((theme) => ({
          root: {
            maxWidth: 380,
            margin:8,
            display: "inline-block",
            
          },
          media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
          },
          expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest,
            }),
          },
          expandOpen: {
            transform: 'rotate(180deg)',
          },
          
        }));
function RecipeCard({title,image,ingredients,deletekey,id}) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteHandler= (id) =>{
    deletekey(id)
    console.log(id)
  };

  return (
    <>
    <Card className={classes.root} >
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <DeleteIcon style={{ color: "rgb(187, 13, 13)" }}
                        fontSize="large" onClick={() => deleteHandler(id)}
                        />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
           {ingredients}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
</>
  )
}

export default RecipeCard;