import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('Enero', 0),
  createData('Febrero', 300),
  createData('Marzo', 600),
  createData('Abril', 800),
  createData('Mayo', 1500),
  createData('Junio', 2000),
  createData('Julio', 2400),
  createData('Agosto', 2400),
  createData('Septiembre', 2500),
  createData('Octubre', 2100),
  createData('Noviembre', 2200),
  createData('Diciembre', 2600),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Servicios prestados el último año</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Servicios
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}