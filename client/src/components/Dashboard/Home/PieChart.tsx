import { ResponsivePie } from '@nivo/pie'

const PieChart = ({ data }: any) => (
  <ResponsivePie
    data={data}
    margin={{ top: 16, right: 80, bottom: 120, left: 80 }}
    valueFormat={(value) =>
      `${Number(value).toLocaleString('en-GB', {
        minimumFractionDigits: 2,
      })}`
    }
    innerRadius={0.7}
    padAngle={0.7}
    cornerRadius={0}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]],
    }}
    colors={{ datum: 'data.color' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true,
      },
    ]}
    fill={[
      {
        match: {
          id: 'today',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'all-time',
        },
        id: 'lines',
      },
    ]}
    enableArcLabels={false}
    enableArcLinkLabels={false}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 80,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
)

export default PieChart
