import {Chip, Typography} from '@mui/material';
import {Card, CardContent, Box} from '@mui/material';
import {Doughnut, Bar} from 'react-chartjs-2';

import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    BarElement,
    DoughnutController,
    Legend,
    Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    DoughnutController,
    Legend,
    Tooltip,
    ChartDataLabels,
);

function HomePage() {
    const data = {
        labels: ['Approved', 'Waiting Approval', 'Rejected'],
        datasets: [
            {
                data: [25, 35, 40],
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            },
        ],
    };

    const data2 = {
        labels: ['Sources', 'Catalogs', 'Requests'],
        datasets: [
            {
                data: [25, 35, 40],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <>

            <Box style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 15}}>
                <Card  sx={{minWidth: 335, width: '46%', height: 220, m: 2}} variant="outlined">
                    <CardContent sx={{width: '-webkit-fill-available'}}>
                        <Typography variant="h5">Requests Report</Typography>
                        <Box style={{marginTop: 4, height: '80%'}}>
                            <Doughnut
                                data={data}
                                options={{
                                    plugins: {
                                        tooltip: {
                                            displayColors: false,
                                            callbacks: {
                                                title(tooltipItems) {
                                                    return `${tooltipItems[0].label}: ${tooltipItems[0].parsed}%`;
                                                },
                                                label() {
                                                    return ``;
                                                },
                                            },
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right',
                                            labels: {
                                                color: 'black',
                                            },
                                        },
                                        datalabels: {
                                            formatter: (value) => {
                                    return `${value}%`;
                                },
                                    display: true,
                                    color: 'white',
                                },
                                },
                                    responsive: true,
                                    maintainAspectRatio: false,
                                }}
                            />
                        </Box>
                    </CardContent>
                </Card>
                <Card  sx={{minWidth: 335, width: '46%', height: 220, m: 2}} variant="outlined">
                    <CardContent sx={{width: '-webkit-fill-available'}}>
                        <Typography variant="h5">Overall Report</Typography>
                        <Box style={{marginTop: 4, height: '80%'}}>
                            <Bar
                                data={data2}
                                options={{
                                    plugins: {
                                        tooltip: {
                                            displayColors: false,
                                            callbacks: {
                                                title(tooltipItems){
                                                    return `${tooltipItems[0].label}: ${tooltipItems[0].raw}%`;
                                                },
                                                label() {
                                                    return ``;
                                                },
                                            },
                                        },

                                        legend: {
                                            display: false,
                                            labels: {
                                                color: 'black',
                                            },
                                        },
                                        datalabels: {
                                            display: true,
                                            color: 'white',
                                        },
                                    },
                                    responsive: true,
                                    maintainAspectRatio: false,
                                }}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
export default HomePage