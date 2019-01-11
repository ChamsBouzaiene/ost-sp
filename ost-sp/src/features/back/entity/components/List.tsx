import * as React from "react";
import * as Actions from "../actions";
import { connect, MapDispatchToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/shared/store";

type Props = DispatchProps & TOwnProps;

class List extends React.Component<Props> {
  componentDidMount() {
    this.props.onDidMount();
  }
  render() {
    return <div>Entity</div>;
  }
}

interface DispatchProps {
  onDidMount: () => void;
}
interface TOwnProps {
  entity: string;
}
const mapDispatchToProps: MapDispatchToProps<DispatchProps, TOwnProps> = (
  dispatch: ThunkDispatch<IState, void, Actions.All>,
  { entity }
) => ({
  onDidMount: () => {
    dispatch(Actions.getAllEntitys(entity));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(List);
