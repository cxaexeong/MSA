import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import worldLowRes from './maps/worldLowRes';
import world from './maps/world';
import koMap from './maps/koMap';
import {  Select } from 'semantic-ui-react'
import styled from 'styled-components'
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { Popover, Typography } from '@mui/material';


const MapSizeWorld = styled.div`
width: 90%;
`;

const MapSizeKorea = styled.div`
width: 50%;
`;

const Map = styled.div`
margin-left: 5%;
  svg {
    stroke: #fff;

    // All layers are just path elements
    path {
      fill: #2e6137;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: #31a849;
      }

      // When a layer is focused.
      &:focus {
        fill: #aecfb4;
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked='true'] {
        fill: rgba(56,43,168,1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current='true'] {
        fill: rgba(56,43,168,0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: rgba(56,43,168,0.6);
      }
    }
  }
`;

const selectOptions = [
    { key: 0, value: 0, text: '해외' },
    { key: 1, value: 1, text: '국내' }
    ];

// const layerProps = {
//     // 온클릭액션 여기서 정의
//     // onClick: ({ target }) => console.log(target.attributes.id.value),
//     // onClick={({ target })=><Link to="/dashboard/products"/>}
//     // layerProps={layerProps}
//   };



function MainVectorMap() {
  const [map, setMap] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [msg, setMsg] = useState("");
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const layerProps = {
    // 온클릭액션 여기서 정의
    onClick: ({ target }) => setMsg(target.attributes.id.value),
    // onClick={({ target })=><Link to="/dashboard/products"/>}
    // layerProps={layerProps}
  };

  const setAE = (event) => {
    setAnchorEl(event.currentTarget)
  } 
  
  const setMessage = ({ target }) => {
    setMsg(target.attributes.id.value)
  } 

  
    return (
        <>
        <Select value={map} options={selectOptions} onChange={({value},e )=>{setMap(e.value);}}/>

        {map === 0 ?
        <MapSizeWorld>
            <Map>
                <VectorMap {...worldLowRes}  layerProps={layerProps} onClick={setAE}/>
            </Map>
        </MapSizeWorld>
        :
        <MapSizeKorea>
            <Map>
                <VectorMap {...koMap} layerProps={layerProps}/>
            </Map>
            </MapSizeKorea>
        }
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={()=>setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>{msg}<br/>{msg}<br/>{msg}<br/>{msg}<br/>{msg}<br/>{msg}<br/>{msg}<br/>{msg}<br/></Typography>
      </Popover>
        </>
    );
}

export default MainVectorMap;