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


import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import "./rep1.css"




class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      book2: JSON.parse(localStorage.getItem('book2'))
    };

  }






  add() {

    var title = this.refs.title.value;
    var discription = this.refs.discription.value;
    var time = this.refs.time.value;
    var image = this.refs.image.value;
    const arr = [title, discription, time, image];
    if (localStorage.getItem('book2') == null) {
      var book2 = [];
      book2.push(arr);
      localStorage.setItem('book2', JSON.stringify(book2));
    } else {
      var book2 = JSON.parse(localStorage.getItem('book2'));
      book2.push(arr);
      localStorage.setItem('book2', JSON.stringify(book2));
    }
    this.setState({
      book2: JSON.parse(localStorage.getItem('book2'))
    });

    this.refs.title.value = "";
    this.refs.discription.value = "";
    this.refs.time.value = "";
    this.refs.image.value = "";

  }

  delete(e) {
    var index = e.target.getAttribute('data-key');
    var list = JSON.parse(localStorage.getItem('book2'));
    list.splice(index, 1);
    this.setState({
      book2: list
    });
    localStorage.setItem('book2', JSON.stringify(list));
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
        
        



        {this.state.book2.map(function (books2, index) {
          {


            return (
              <div className="contact-card">
                <Card > 
                  <Typography  > {books2[0]}  </Typography>
                  <CardHeader > </CardHeader>

                  <div className="contact-media">
                    
                    <img src={books2[3]}></img>
                    
                  </div>
                  <Typography variant="h6" >Ингридиенты</Typography>


                  <CardContent> <Typography variant="body1" color="textSecondary" component="p"> {books2[1]} </Typography></CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="delete" >
                      <DeleteIcon fontSize="large" onClick={this.delete.bind(this)} />
                    </IconButton>

                    <IconButton

                      //onClick={handleExpandClick}
                      //aria-expanded={expanded}
                      aria-label="show more"
                    >
                      
                    </IconButton>
                    

                    <div className="collapse-card">
                  <Collapse timeout="auto" unmountOnExit>{books2[2]}</Collapse>
                  </div>
                  </CardActions>
                  <CardContent>{books2[2]}</CardContent>


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
