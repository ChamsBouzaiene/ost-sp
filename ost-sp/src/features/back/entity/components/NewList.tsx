import * as React from "react";

interface OwnProps {
  id: string;
}

type Props = OwnProps;

export default class Profile extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>Profile {this.props.id}</h1>
      </div>
    );
  }
}
