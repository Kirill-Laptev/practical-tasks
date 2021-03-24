import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}
const useStyles = makeStyles({
    root: {
      width: 400,
    },
  });

const PrettoSlider = withStyles({
    root: {
      color: '#FF9D40',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const classes = useStyles();

    const handleChange = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number]);
      };

    return (
        <>
            <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
            </Typography>
            <PrettoSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                // getAriaValueText={valuetext}
            />
    </div>

        </>
    );
}

export default SuperDoubleRange;
