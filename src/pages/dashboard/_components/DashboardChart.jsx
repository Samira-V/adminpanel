import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export const DashboardChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
            legend: {
                display:false,
                position: 'top',
            },
            title: {
                display: false,
               
            },
        },
    };

   const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const data = {
        labels,
        datasets: [
            
            {
                label: 'Dataset 2',
                data: [25,45,32,78,95,85,74],
                borderColor: '#bff474',
              
            },
        ],
    };
    return (
        <>
            <div className="dash-right-bottom-chart">
                <Line options={options} data={data} />
            </div>

        </>
    )
}