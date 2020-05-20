import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleDarkTheme } from '../../store/actions';
import { Background } from './components';
import './styles.scss';

export const Banner = ({ children = null, theme, action }) => {
  const { darkTheme } = theme;

  return (
    <div style={{ backgroundColor: darkTheme ? '#00001F' : '#fff' }}>
      <div className="_bannerContainer">
        <div className="_bannerDesc">
          <div className="_bannerTexts">
            <p className="_childrenText">App and Desktop wallet with the world's fast, safe and intuitive service on cryptocurrency</p>
            <p className="_childrenTitle">Today's Index Value</p>
          </div>
          <div className="_bannerCards">
            CARDS
          </div>
          <div className="_bannerButton">
            <p className="_buttonText">Send, receive & exchange cryptocurrency</p>
            <button className="_buttonGradient">DOWNLOAD</button>
          </div>
        </div>
      </div>

      <div className="_bannerFooter">

      </div>
      <Background/>
    </div>
  );
}

const mapStateToProps = ({ theme }) => ({ theme });

const mapDispatchToProps = dispatch => {
  const actions = {
    toggleDarkTheme
  };

  return {
    action: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
