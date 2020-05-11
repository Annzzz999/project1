import React from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
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
    transform: 'rotate(180deg)', // угол стрелки
  },
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader 
      title="Салат "
      
        
       // title="Shrimp and Chorizo Paella"
        //subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://www.povarenok.ru/data/cache/2016nov/11/17/1809357_23183-710x550x.jpg"
       
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Ингредиенты для Салат "Хозяйка отдыхает"»:<br/>
        Картофель — 1 кг<br/>
        Морковь — 1 шт<br/>
        Лук репчатый — 1 шт<br/>
        Помидор — 1 шт<br/>
        Приправа (для картофеля, у меня торговой марки "Камис") — 2 ст. л.<br/>
        Масло растительное (без запаха) — 1 ст. л.<br/>
        Масло оливковое (extra virgin, здесь пропорций нет, по желанию и по вкусу, можно и без него обойтись)<br/>
        Зелень (по вкусу)<br/>
        Чеснок (по вкусу)<br/>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="delete" className={classes.margin} >
        
        {/* className={
      this.props.deleteBlock(this.props.index)}, */}

        <DeleteIcon fontSize="large" />
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
          <Typography paragraph>Способ приготовления:</Typography>
          <Typography paragraph>
            В среднем по времени 1-1,5 часа
          </Typography>
          <Typography paragraph>
          1.Картошку нарезать, как хотите, но только не тонкой соломкой. Иначе велика вероятность того, что она в кашу превратится, а нам этого не надо. Лук режем тонкими полукольцами. Морковку - длинными брусочками, так просто покрасивее получится. Помидор натереть на терке и добавить к картофелю. Он придаст сочности, компенсируя количество масла. Все сложить в миску. Добавить приправу. Если приправа с солью, то солить больше и не надо. Дальше добавить масло растительное. На килограмм картофеля у меня идет ровно одна столовая ложка всего. Этого достаточно. Если бы жарили на сковородке, то таким количеством вряд ли бы обошлись. Перемешать.<br/>


2.Упаковываем все в рукав для запекания, ставим в духовку, засекаем времечко и... свободны! Килограмм картошки у меня при температуре 180 градусов запекается ровно полтора часа. Духовки, конечно, у всех разные и со временем приготовления каждая хозяйка должна определиться сама, для этого достаточно один раз приготовить и будете точно знать сколько времени Вам потребуется. Когда будете готовить в первый раз, ни в коем случае не уходить «с собакой гулять» :). В первый раз, как в первый класс - надо все контролировать. Мало ли... Потом, когда готовка пойдет на "автомате", то можно хоть на маникюр идти.<br/>


3.Картошечка готова, разрезаем пленку, вот посмотрите какая красивая.<br/>


4.Дальше нарезаем меленько зелень и чесночок, добавляем к картошке, прикрываем пленкой и пускай настоится и пропитается ароматами минут пять.<br/>


5.Дальше раскладываем по тарелочкам. У нас получилась абсолютно натуральная жареная картошка, как на сковородке, только масла раза в три-четыре меньше и проблем тоже. И не такая засушенная, как просто на противне. И следить не надо, когда прочувствуете рецепт.<br/>
Вкусссно!!<br/>
          </Typography>
          
          
        </CardContent>
      </Collapse>

          {/*////////////////////////// */}

     

    </Card>
    
  );
}