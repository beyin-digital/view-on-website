import { ResponsiveLine } from '@nivo/line'

const LineChart = ({ data /* see data tab */ }: any) => (
  <ResponsiveLine
    data={data}
    curve="monotoneX"
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
      max: 'auto',
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={{
      legend: 'Number of Visits',
      legendPosition: 'start',
      legendOffset: -36,
      // @ts-ignore
      renderTick: () => null,
    }}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Day',
      legendOffset: 36,
      legendPosition: 'end',
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      tickValues: 4,
      legendOffset: -40,
      legendPosition: 'end',
    }}
    lineWidth={6}
    colors="#0090EC"
    pointSize={0}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={20}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
)

export default LineChart
