import flux from '../flux';
import MainLayout from '../components/MainLayout';
import RaisedButton from 'material-ui/RaisedButton';

const { connectStore } = flux;

const Index = (props) => {
  return (
    <MainLayout>
      <RaisedButton onTouchTap={ () => { alert('tap!') } } label="Default" primary />
      {props.foo}
    </MainLayout>
  )
}

Index.getInitialProps = async ({store, isServer, pathname, query}) => {
  store.dispatch({type: 'FOO', payload: 'bar'});
  return {custom: 'custom'};
};

export default connectStore((state) => ({foo: state.foo}))(Index);
