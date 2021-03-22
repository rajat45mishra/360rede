import React from 'react';
import { CircularProgress, Button } from '@material-ui/core';
import ColoredLinearProgress from './progress';

function ButtonComponent(props) {
  const { onClick, loading } = props;
  return (
    <Button variant="contained" className="waves-effect waves-light btn-large" onClick={onClick} disabled={loading}>
      {loading && <CircularProgress size={14} />}
      {!loading && props.texta}
    </Button>
  );
}

class LoadingButton extends React.Component {
  constructor(props) {
    super();
    this.state = { loading: false };
  }

  onClick = () => {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false }), 3000); //3 seconds
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <ColoredLinearProgress />}
        <br />
        <ButtonComponent onClick={this.onClick} loading={this.state.loading} texta={this.props.texta} />
      </React.Fragment>
    );
  }
}
export default LoadingButton;