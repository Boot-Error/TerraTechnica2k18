import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
// css impoorts
import '../css/events.css';

// custom modules impor

class EventsCard extends Component {
  render() {
    return (
      <div className="Events">
        CSE Events <Divider />
      		<div className="event-card-cont">
	            <Card>
				         <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
				            <img src={require('../static/ece.png')} alt="" className="event-card-img"/>
				          </CardMedia>
				      </Card>
			    </div>
          <div className="event-card-cont">
              <Card>
                 <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
                    <img src={require('../static/ece.png')} alt="" className="event-card-img"/>
                  </CardMedia>
              </Card>
          </div>
      </div>
    );
  }
}

export default EventsCard;