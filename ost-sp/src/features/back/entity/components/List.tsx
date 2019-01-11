import * as React from "react";
import * as Actions from "../actions";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IState } from "src/shared/store";
import Entity from "src/data/Entity";

type Props = DispatchProps & TOwnProps & TStateProps;

class List extends React.Component<Props> {
  componentDidMount() {
    this.props.onDidMount();
  }
  render() {
    return (
      <div>
        {this.props.entities &&
          this.props.entities.map(entity =>
            Object.entries(entity).map(([k, v]) => (
              <div>
                <label htmlFor="">{k}</label>
                <input value={v} />
              </div>
            ))
          )}
      </div>
    );
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

interface TStateProps {
  entities: Entity[];
}

const mapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  entities: state.entity.entities
});

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(List);
