let width: any;
let height: any;
let gradientLime: any;

export function getGradient(ctx: any, chartArea: any): any {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;

    if (!gradientLime || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradientLime = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

        gradientLime.addColorStop(0, "rgba(41, 217, 59, 0.1)");
        gradientLime.addColorStop(0.5, "rgba(41, 217, 59, 0.3)");
        gradientLime.addColorStop(1, "rgba(41, 217, 59, 0.9)");
    }

    return gradientLime;
};