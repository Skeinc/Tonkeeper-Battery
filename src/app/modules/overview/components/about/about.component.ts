import { Component, OnInit } from "@angular/core";
import { tonkeeperBatteryUsersDataMocks } from "@shared/mocks/tonkeeper-battery-users.mocks";
import { getGradient } from "@shared/utilities/get-dashboard-background.util";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit{
    public dashboardUsersOptions: any | null = null;

    public dashboardTokensOptions: any | null = null;

    public dashboardUsersData: any | null = null;

    public dashboardTokensData: any | null = null;

    public tonkeeperBatteryUsersData: any | null = tonkeeperBatteryUsersDataMocks;

    public supportedTokensData: any | null = null;

    ngOnInit(): void {
        this.setUsersChartConfiguration();
    }

    public formatTime(seconds: number): string {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);

        let hourSuffix = 'h.';
        let minuteSuffix = 'm.';

        return `${hours}${hourSuffix} ${minutes}${minuteSuffix}`;
    };

    private setUsersChartConfiguration(): void {
        this.dashboardUsersData = {
            labels: [],
            datasets: [
                {
                    label: 'Tonkepeer Battery Users',
                    data: [],
                    information: [],
                    fill: true,
                    borderColor: 'rgba(41, 217, 59, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(41, 217, 59, 1)',
                    pointBorderColor: 'rgba(41, 217, 59, 1)',
                    pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
                    pointHoverBorderColor: 'rgba(41, 217, 59, 1)',
                    backgroundColor(context: any) {
                        const chart = context.chart;
                        const { ctx, chartArea } = chart;

                        if (!chartArea) {
                            return;
                        }
                        return getGradient(ctx, chartArea);
                    },
                    tension: 0.4,
                },
            ],
        };

        let delayed: any;

        this.dashboardUsersOptions = {
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context: any) => {
                    return context.type === 'data' && context.mode === 'default' && !delayed ? context.dataIndex * 40 + context.datasetIndex * 150 : 0;
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 4,
            legend: {
                display: false,
            },
            scales: {
                x: {
                    display: true,
                    reverse: false,
                    ticks: {
                        color: 'rgba(255, 255, 255, 1)',
                        font: {
                            size: 10,
                            weight: 500,
                            family: "'Montserrat', sans-serif"
                        }
                    },
                    grid: {
                        display: true,
                        color: 'rgba(200, 200, 200, 1)',
                    },
                    border: {
                        display: false, 
                        dash: [5, 5],
                        dashOffset: 0,
                    }
                },
                y: {
                    display: false,
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(10, 10, 10, 0.7)',
                    titleFont: {
                        family: "'Montserrat', sans-serif",
                        size: 14,
                        weight: 600,
                        color: 'rgba(255, 255, 255, 1)',
                    },
                    titleColor: 'rgba(255, 255, 255, 1)',
                    titleAlign: 'center',
                    bodyFont: {
                        family: "'Montserrat', sans-serif",
                        size: 10,
                        weight: 600,
                        color: 'rgba(255, 255, 255, 1)',
                    },
                    bodyColor: 'rgba(255, 255, 255, 1)',
                    cornerRadius: 10,
                    caretSize: 8,
                    padding: 8,
                    displayColors: false,
                    callbacks: {
                        label(context: any) {
                            const label = context.dataset.label || '';
                            const value = context.raw;
                    
                            const formattedString = `${label}: ${value}`;
                            
                            return formattedString;
                        }
                    },
                }
            },
            interaction: {
                intersect: false
            },
            elements: {
                point: {
                    pointHoverRadius: 5,
                    pointRadius: 1,
                }
            }
        };

        this.tonkeeperBatteryUsersData.workload.forEach((item: any) => {
            if ('value' in item && 'date' in item) {
                this.dashboardUsersData.labels.push(item.date);
                this.dashboardUsersData.datasets[0].data.push(item.value);
            };
        });
    };
}