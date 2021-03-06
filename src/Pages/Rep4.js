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
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import "./rep1.css";









 

class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      book4: JSON.parse(localStorage.getItem('book4'))
    };

  }






  add() {

    var title = this.refs.title.value;
    var discription = this.refs.discription.value;
    var time = this.refs.time.value;
    var image = this.refs.image.value;
    const arr = [title, discription, time, image];
    if (localStorage.getItem('book4') == null) {
      var book4 = [];
      book4.push(arr);
      localStorage.setItem('book4', JSON.stringify(book4));
    } else {
      var book4 = JSON.parse(localStorage.getItem('book4'));
      book4.push(arr);
      localStorage.setItem('book4', JSON.stringify(book4));
    }
    this.setState({
      book4: JSON.parse(localStorage.getItem('book4'))
    });

    this.refs.title.value = "";
    this.refs.discription.value = "";
    this.refs.time.value = "";
    this.refs.image.value = "";

  }

  
  delete(e) {
    var index = e.target.getAttribute('data-key');
    var list = JSON.parse(localStorage.getItem('book4'));
    
    list.splice(index,1);
    this.setState({
      book4: list
    });

    localStorage.setItem('book4', JSON.stringify(list));
    
  }


  render() {
    
    return (
      <div>
        <div>

          <input type="text" placeholder="Название блюда" ref="title" />
          <input type="text" placeholder="URL картинки" ref="image" />
          <input type="text" placeholder="Ингридиенты" ref="discription" />
          <input type="text" placeholder="Способ приготовления" ref="time" />
          < Button variant="contained" color="primary"  startIcon={< AddIcon/>}onClick={this.add.bind(this)}>
          <Typography   >Добавить </Typography>
          </Button>
        </div>
        
        



        {this.state.book4.map(function (books4, index) {
          {


            return (
              <div className="contact-card">
                <Card > 
                  <Typography  > {books4[0]}  </Typography>
                  <CardHeader > </CardHeader>

                  <div className="contact-media">
                    
                    <img src={books4[3]}></img>
                    
                  </div>
                  <Typography variant="h6" >Ингридиенты</Typography>


                  <CardContent> <Typography variant="body1" color="textSecondary" component="p"> {books4[1]} </Typography></CardContent>
                  <CardActions disableSpacing>

                    <IconButton aria-label="delete" >
                    
                      <DeleteIcon fontSize="large" data-key={index} onClick={this.delete.bind(this)} />
                    </IconButton>

                    
                    
</CardActions>
                    <div className="collapse-card">
                  
                  
                  
                  <CardContent>{books4[2]}</CardContent></div>


                </Card>
              </div>
            );
          }
        }, this)}



      </div >
    );
  }


}
export default Home;
