import * as React from "react";

import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import Typography from "@material-ui/core/Typography";
import "./stepper.css";
import { StepConnector, StepLabel } from "@material-ui/core";
import { IState } from "../store";
import { MapStateToProps, connect } from "react-redux";

const styles = ({ palette, spacing, transitions }: Theme) =>
  createStyles({
    root: {
      width: "90%",
      zIndex: 2,
      position: "fixed",
      top: "85vh"
    },

    button: {
      marginRight: spacing.unit
    },
    instructions: {
      marginTop: spacing.unit,
      marginBottom: spacing.unit
    },
    connectorActive: {
      "& $connectorLine": {
        borderColor: palette.secondary.main
      }
    },
    connectorCompleted: {
      "& $connectorLine": {
        borderColor: palette.primary.main
      }
    },
    connectorDisabled: {
      "& $connectorLine": {
        borderColor: palette.grey[100]
      }
    },
    connectorLine: {
      transition: transitions.create("border-color")
    }
  });

function getSteps() {
  return [
    "General information",
    "Detailed information",
    "Questions",
    "Bio, Resume, CIN and picture",
    "Video"
  ];
}

function getStepContent(step: any) {
  switch (step) {
    case 0:
      return "Step 1: Submit your general information ...";
    case 2:
      return "Step 2: What is an ad group anyways?";
    case 3:
      return "Step 3: This is the bit I really care about!";
    case 4:
      return "Step 4: This is the bit I really care about!";
    case 5:
      return "Step 5: This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}
interface OwnProps {
  classes: any;
}
interface State {
  activeStep: any;
  completed: any;
}

type Props = OwnProps & TStateProps;

class HorizontalNonLinearStepper extends React.Component<Props, State> {
  state = {
    activeStep: 1,
    completed: {}
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes, userStep } = this.props;
    const thisStep = (userStep: any) => {
      if (userStep) {
        return parseInt(userStep, 10) - 1;
      }
      return 0;
    };
    const steps = getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );

    return (
      <div className={classes.root}>
        <Stepper activeStep={thisStep(userStep)} connector={connector}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div>
          {thisStep(userStep) === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - congrats you&apos;re finished
              </Typography>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(userStep)}
              </Typography>
            </div>
          )}
        </div>
      </div>
    );
  }
}

interface TOwnProps {}
interface TStateProps {
  userStep?: string;
}
const MapStateToProp: MapStateToProps<TStateProps, TOwnProps, IState> = (
  state: IState
) => ({
  userStep: (state.auth.currentuser || {}).step
});

const StepperWitStyle = withStyles(styles)(HorizontalNonLinearStepper);

export default connect(
  MapStateToProp,
  null
)(StepperWitStyle);
