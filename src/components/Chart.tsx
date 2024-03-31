import { memo, useMemo } from 'react'
import { parseISO, format } from 'date-fns'

import { Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { scaleBand, scaleLinear } from '@visx/scale'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { AxisBottom } from '@visx/axis'
import { useTooltip, TooltipWithBounds } from '@visx/tooltip'

// 월별 데이터
// 날짜: 월별 마지막일자
// 잔고: 월별 마지막일자의 잔고

interface ChartData {
  // x
  date: string
  // y
  balance: number
}

interface ChartProps {
  chartData: ChartData[]
  width: number
  height: number
}

const mainColor = '#3182f6'
const verticalMargin = 120

const getX = (d: ChartData) => d.date
const getY = (d: ChartData) => d.balance
const formatDate = (date: string) => format(parseISO(date), 'M월')

function Chart({ chartData, width, height }: ChartProps) {
  // bounds
  const xMax = width
  const yMax = height - verticalMargin

  // Tooltip 훅을 사용하여 툴팁 관리
  const {
    tooltipOpen,
    tooltipData,
    tooltipLeft,
    tooltipTop,
    hideTooltip,
    showTooltip,
  } = useTooltip<ChartData>()

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: chartData.map(getX),
        padding: 0.4,
      }),
    [xMax, chartData],
  )

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...chartData.map(getY))],
      }),
    [yMax, chartData],
  )

  const handleBarHover = (
    event: React.MouseEvent<SVGRectElement, MouseEvent>,
    datum: ChartData,
  ) => {
    const { clientX, clientY } = event
    showTooltip({
      tooltipData: datum,
      tooltipLeft: clientX,
      tooltipTop: clientY,
    })
  }

  const handleBarLeave = () => {
    hideTooltip()
  }

  return width < 10 ? null : (
    <div>
      <svg width={width} height={height}>
        <rect width={width} height={height} fill="url(#teal)" rx={14} />
        <Group top={verticalMargin / 2}>
          {chartData.map((d) => {
            const date = getX(d)
            const barWidth = xScale.bandwidth()
            const barHeight = yMax - (yScale(getY(d)) ?? 0)
            const barX = xScale(date)
            const barY = yMax - barHeight

            return (
              <Bar
                key={date}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill={mainColor}
                onMouseEnter={(event) => handleBarHover(event, d)}
                onMouseLeave={handleBarLeave}
              />
            )
          })}
        </Group>
        <AxisBottom
          top={yMax + 60}
          scale={xScale}
          tickFormat={formatDate}
          stroke={mainColor}
          tickStroke={mainColor}
          tickLabelProps={{
            fill: mainColor,
            fontSize: 12,
            textAnchor: 'middle',
          }}
        />
      </svg>
      {tooltipOpen &&
        tooltipData &&
        tooltipLeft !== undefined &&
        tooltipTop !== undefined && (
          <TooltipWithBounds
            key={Math.random()}
            top={tooltipTop - 12}
            left={tooltipLeft + 12}
          >
            <div>
              <strong>{formatDate(tooltipData.date)}</strong>:{' '}
              {tooltipData.balance}
            </div>
          </TooltipWithBounds>
        )}
    </div>
  )
}

interface ChartWrapperProps {
  height?: number
  chartData: ChartData[]
}

function ChartWrapper({ height = 200, chartData }: ChartWrapperProps) {
  return (
    <ParentSize>
      {({ width }) => (
        <Chart width={width} height={height} chartData={chartData} />
      )}
    </ParentSize>
  )
}

export default memo(ChartWrapper)
