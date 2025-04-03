'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { purple } from '@mui/material/colors';

interface ExpandMoreProps {
  expand: boolean;
}

const ExpandMore = styled((props: any) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})<ExpandMoreProps>(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface EventProps {
  event: {
    title: string;
    date: string;
    location: string;
    image: string;
    description?: string;
    details?: string;
  };
}

export default function EventCard(props: EventProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 360,
        backgroundColor: '#1c1c1e',
        color: 'white',
        borderRadius: 4,
        boxShadow: '0px 4px 20px rgba(98, 0, 234, 0.3)',
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }}>
            {props.event.title[0]}
          </Avatar>
        }
        action={
          <IconButton sx={{ color: 'white' }} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography sx={{ color: 'white', fontWeight: 600 }}>{props.event.title}</Typography>}
        subheader={
          <Typography sx={{ color: '#aaa', fontSize: '0.85rem' }}>
            {props.event.date}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="200"
        image={props.event.image}
        alt={props.event.title}
        sx={{ objectFit: 'cover', borderRadius: '0 0 1rem 1rem' }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: '#ccc', display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOnIcon fontSize="small" /> {props.event.location}
        </Typography>
        {props.event.description && (
          <Typography sx={{ color: '#ddd', mt: 1 }}>{props.event.description}</Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="favorite" sx={{ color: '#ff4081' }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" sx={{ color: 'white' }}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: 'white' }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ color: '#bbb' }}>
          <Typography variant="subtitle2" sx={{ mb: 1, color: '#999' }}>
            More Info
          </Typography>
          <Typography paragraph>
            {props.event.details || 'Details coming soon... stay tuned!'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
