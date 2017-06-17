import '../components/TapEvents'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './Header'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#000070",
    primary2Color: "#00005D",
    // primary3Color: _colors.grey400,
    // accent1Color: _colors.pinkA200,
    // accent2Color: _colors.grey100,
    // accent3Color: _colors.grey500,
    // textColor: _colors.darkBlack,
    // secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
    // alternateTextColor: _colors.white,
    // canvasColor: _colors.white,
    // borderColor: _colors.grey300,
    // disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
    pickerHeaderColor: "#000070",
    // clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
    // shadowColor: _colors.fullBlack
  }
});

const MainLayout = (props) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      {props.children}
    </div>
  </MuiThemeProvider>
)

export default MainLayout
