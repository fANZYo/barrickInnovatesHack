import React from 'react';

// Components
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const ImageSelect = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src="http://www.moneyhome.com/wp-content/uploads/2017/10/Barrick-Gold-Corporation-ABX-Logo-364x150.jpg"
        alt="Barrick logo"
        style={{
          marginBottom: '2em',
          opacity: '.2'
        }}
      />
      <FlatButton
        style={{
          marginRight: '.5em'
        }}
        primary={true}
        label="Choose an Image"
        backgroundColor="#ddd"
        labelStyle={{
          color: '#333'
        }}
      >
        <input
          type="file"
          id="imageButton"
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '0',
            left: '0',
            fontSize: '2em',
            opacity: '0',
            zIndex: '9999',
          }}
        ></input>
      </FlatButton>
      <Link to="/sent" >
        <FlatButton
          onClick={props.handler.bind(this)}
          primary={true}
          label="Submit"
          backgroundColor="#D4AF37"
          labelStyle={{
            color: '#333'
          }}
        />
    </Link>
    </div>
  );
};

export default ImageSelect
