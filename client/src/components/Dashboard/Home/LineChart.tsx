import { ResponsiveLine } from '@nivo/line'
import { useTranslation } from 'react-i18next'

const LineChart = ({ data }: any) => {
  const { t } = useTranslation('dashboard')
  return (
    <>
      {data?.data?.length > 0 && (
        <ResponsiveLine
          data={[data]}
          curve="linear"
          margin={{ top: 45, right: 120, bottom: 60, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 0,
            max: 'auto',
            reverse: false,
          }}
          yFormat={(value) =>
            `${
              (value as number) > 1000 ? `${(value as number) / 1000}k` : value
            }`
          }
          enableGridX={false}
          enableGridY={false}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 23,
            tickRotation: -90,
            legend: `${t('day')}`,
            legendOffset: -36,
            legendPosition: 'end',
          }}
          axisLeft={{
            legend: `${t('box_main_chart_visit')}`,
            legendPosition: 'middle',
            format: (value) => Math.floor(value) === value && value,
            legendOffset: -40,
            tickRotation: 0,
            tickPadding: 5,
          }}
          lineWidth={3}
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
              itemHeight: 40,
              itemOpacity: 0.75,
              symbolSize: 16,
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
      )}
    </>
  )
}

export default LineChart
