import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { IStoreState, ITile, IBanner, IForm, IAttendee } from '../types';
import { loadAllTiles } from '../actions/tiles';
import { loadBanner } from '../actions/banner';
import { loadForms } from '../actions/forms';
import { createAttendee } from '../actions/attendees';
import Home from 'src/components/home';
import Register from 'src/components/register';
import AppBar from 'src/components/app-bar';
import './App.css';

interface IDispatchProps {
  actions: {
    loadAllTiles: () => any;
    loadBanner: () => any;
    loadForms: () => any;
    createAttendee: (body: IAttendee) => any;
  };
}
interface IProps {
  tiles: ITile[];
  banner: IBanner;
  loading: boolean;
  forms: IForm[];
}

class App extends React.Component<IProps & IDispatchProps, {}> {
  public componentWillMount = async () => {
    const { actions } = this.props;
    await Promise.all([
      actions.loadAllTiles(),
      actions.loadBanner(),
      actions.loadForms()
    ]);
  }

  public render() {
    const { tiles, banner, loading, forms, actions: { createAttendee } } = this.props;
    return (
      <div id="root">
        <AppBar />
        {(loading || !banner.id) ?
          <span className="spinner"></span>
          :
          <Switch>
            <Route exact={true} path="/" render={(props) => <Home {...props} tiles={tiles} banner={banner} />} />
            <Route exact={true} path="/register" render={(props) => <Register {...props} register={createAttendee} form={forms.find((form) => form.formTitle === 'Register')} />} />
          </Switch>
        }
        <footer className="ibm__footer">
          <div className="ibm__footer-top">
            <strong>IBM Cloud</strong> Garage
        </div>
          <div className="ibm__footer-bottom">
            This event is part of Melbourne Design Week 2019 organised by NGV in collaboration with Creative Victoria
            <a href="https://www.ngv.vic.gov.au/melbourne-design-week/" target="_blank">Visit Website</a>
          </div>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state: IStoreState) {
  const { tiles, banner, loading, forms } = state;
  return { tiles, banner, loading, forms };
}

function mapDispatchToProps(dispatch: Dispatch<any>): any {
  return {
    actions: bindActionCreators(
      {
        loadAllTiles,
        loadBanner,
        loadForms,
        createAttendee
      },
      dispatch
    )
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App) as any);
