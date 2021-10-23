import PropTypes from 'prop-types';
// material
import { Grid, List, ListItem } from '@mui/material';
import FlightReservationCard from './FlightReservationCard';
import FlightReserveStore from '../../../store/FlightReserveStore';
import FlightModal from './FlightModal';
import { observer } from 'mobx-react';
import styled, {css} from 'styled-components'
import 'semantic-ui-css/semantic.min.css';


function Info() {
  return (
    <div>
        <h1>Hello</h1>
    </div>
  );
}

export default observer(Info);