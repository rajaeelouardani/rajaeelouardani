"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";

interface ContributionData {
  date: string;
  count: number;
  level: number;
}

interface ContributionGraphContextValue {
  data: ContributionData[];
  maxCount: number;
  maxLevel: number;
}

const ContributionGraphContext = createContext<ContributionGraphContextValue | null>(null);

const useContributionGraph = () => {
  const context = useContext(ContributionGraphContext);
  if (!context) {
    throw new Error("ContributionGraph components must be used within ContributionGraph");
  }
  return context;
};

interface ContributionGraphProps {
  data: ContributionData[];
  children: ReactNode;
  maxCount?: number;
  maxLevel?: number;
}

export const ContributionGraph: React.FC<ContributionGraphProps> = ({
  data,
  children,
  maxCount = 20,
  maxLevel = 4,
}) => {
  return (
    <ContributionGraphContext.Provider value={{ data, maxCount, maxLevel }}>
      <div className="contribution-graph">{children}</div>
    </ContributionGraphContext.Provider>
  );
};

interface ContributionGraphCalendarProps {
  children: (props: {
    activity: ContributionData | null;
    dayIndex: number;
    weekIndex: number;
  }) => ReactNode;
}

export const ContributionGraphCalendar: React.FC<ContributionGraphCalendarProps> = ({
  children,
}) => {
  const { data } = useContributionGraph();
  const now = new Date();
  const days = eachDayOfInterval({
    start: startOfYear(now),
    end: endOfYear(now),
  });

  // Group days into weeks (starting from Sunday)
  const weeks: (Date | null)[][] = [];
  let currentWeek: (Date | null)[] = [];
  
  // Find the first Sunday of the year
  const firstDay = days[0];
  const firstDayOfWeek = firstDay.getDay();
  
  // Add empty days at the start if needed
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null);
  }
  
  days.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  
  // Add empty days at the end if needed
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  // Calculate month labels
  const monthLabels: string[] = []
  const firstWeek = weeks[0]
  if (firstWeek && firstWeek[0]) {
    const firstDate = firstWeek.find(d => d !== null) as Date | null
    if (firstDate) {
      let currentMonth = firstDate.getMonth()
      weeks.forEach((week, weekIndex) => {
        const firstDayOfWeek = week.find(d => d !== null) as Date | null
        if (firstDayOfWeek) {
          const weekMonth = firstDayOfWeek.getMonth()
          if (weekMonth !== currentMonth || weekIndex === 0) {
            monthLabels[weekIndex] = firstDayOfWeek.toLocaleDateString('en-US', { month: 'short' })
            currentMonth = weekMonth
          }
        }
      })
    }
  }

  return (
    <>
      {/* Month labels */}
      <div className="flex gap-1 justify-start min-w-max mb-2">
        {weeks.map((week, weekIndex) => {
          const label = monthLabels[weekIndex] || ''
          return (
            <div key={weekIndex} className="w-3 text-xs text-gray-400 text-left">
              {label}
            </div>
          )
        })}
      </div>
      
      <div className="flex gap-1 items-start">
        {/* Day labels */}
        <div className="flex flex-col gap-1 mr-2 pt-2">
          {['Sun', '', 'Tue', '', 'Thu', '', 'Sat'].map((day, idx) => (
            <div key={idx} className="h-3 text-xs text-gray-400 text-right w-8">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => {
                const activity = day
                  ? data.find((d) => d.date === formatISO(day, { representation: "date" })) || null
                  : null;
                return (
                  <React.Fragment key={dayIndex}>
                    {children({ activity, dayIndex, weekIndex })}
                  </React.Fragment>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

interface ContributionGraphBlockProps {
  activity: ContributionData | null;
  dayIndex: number;
  weekIndex: number;
}

export const ContributionGraphBlock: React.FC<ContributionGraphBlockProps> = ({
  activity,
}) => {
  const { maxLevel } = useContributionGraph();
  
  if (!activity) {
    return (
      <div
        className="w-3 h-3 rounded-sm bg-gray-800"
        style={{ backgroundColor: '#161b22' }}
      />
    );
  }

  const colors = [
    '#161b22', // Level 0
    '#0e4429', // Level 1
    '#006d32', // Level 2
    '#26a641', // Level 3
    '#39d353', // Level 4
  ];

  const level = Math.min(activity.level, maxLevel);
  const bgColor = colors[level] || colors[0];

  return (
    <div
      className="w-3 h-3 rounded-sm hover:ring-2 hover:ring-white/50 transition-all cursor-pointer group relative"
      style={{ backgroundColor: bgColor }}
      title={`${activity.count} ${activity.count === 1 ? 'contribution' : 'contributions'} on ${new Date(activity.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}`}
    >
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        <div className="font-semibold">
          {activity.count} {activity.count === 1 ? 'contribution' : 'contributions'}
        </div>
        <div className="text-gray-400">
          {new Date(activity.date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
      </div>
    </div>
  );
};

export const ContributionGraphFooter: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="flex items-center justify-between mt-4">{children}</div>;
};

export const ContributionGraphTotalCount: React.FC = () => {
  const { data } = useContributionGraph();
  const total = data.reduce((sum, item) => sum + item.count, 0);
  
  return (
    <div className="text-sm text-gray-400">
      <span className="font-semibold text-white">{total}</span> contributions in the last year
    </div>
  );
};

export const ContributionGraphLegend: React.FC = () => {
  const colors = [
    '#161b22',
    '#0e4429',
    '#006d32',
    '#26a641',
    '#39d353',
  ];

  return (
    <div className="flex items-center gap-2 text-xs text-gray-400">
      <span>Less</span>
      <div className="flex gap-1">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className="w-3 h-3 rounded-sm"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <span>More</span>
    </div>
  );
};

