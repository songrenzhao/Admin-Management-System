import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Software Developers',
		'Managers',
		'Others'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default class Doughnuts extends React.Component{
  render() {
    return (
      <div>
        <Doughnut width={50} height={70} data={data} />
      </div>
    );
  }
}