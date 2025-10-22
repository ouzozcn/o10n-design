'use client';
import React from 'react';
import TopDivider from '@/components/TopDivider';
import Menu from '@/components/Menu';
import Button from '@/components/Button';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import Footer from '@/components/Footer';

import DesignSkillPie from '@/components/data-vis/DesignSkillPie';
{
  /* Component dependencies start*/
}
/// import any components you plan to use in the playground here
import { PieChart } from '@mui/x-charts/PieChart';
import { DefaultizedPieValueType } from '@mui/x-charts/models';
import { Tooltip } from 'react-tooltip';
{
  /* Component dependencies end */
}
const treeMapData = {
  name: 'Product Designer Skills 2024-2025',
  color: 'hsl(220, 70%, 50%)',
  children: [
    {
      name: 'Soft Skills & Collaboration',
      color: 'hsl(200, 70%, 50%)',
      children: [
        {
          name: 'Cross-functional Collaboration',
          value: 88,
          percentage: '88%',
          color: 'hsl(200, 70%, 45%)',
        },
        {
          name: 'Communication',
          value: 83,
          percentage: '83%',
          color: 'hsl(200, 70%, 50%)',
        },
        {
          name: 'Proactive/Self-Directed',
          value: 36,
          percentage: '36%',
          color: 'hsl(200, 70%, 55%)',
        },
        {
          name: 'Feedback Seeking',
          value: 32,
          percentage: '32%',
          color: 'hsl(200, 70%, 60%)',
        },
        {
          name: 'Learning Mindset',
          value: 30,
          percentage: '30%',
          color: 'hsl(200, 70%, 65%)',
        },
        {
          name: 'Task Prioritization',
          value: 28,
          percentage: '28%',
          color: 'hsl(200, 70%, 70%)',
        },
      ],
    },
    {
      name: 'Core Design Skills',
      color: 'hsl(280, 70%, 50%)',
      children: [
        {
          name: 'User Research & Testing',
          value: 72,
          percentage: '72%',
          color: 'hsl(280, 70%, 45%)',
        },
        {
          name: 'Design Process (End-to-End)',
          value: 60,
          percentage: '60%',
          color: 'hsl(280, 70%, 50%)',
        },
        {
          name: 'UI/Visual Design',
          value: 56,
          percentage: '56%',
          color: 'hsl(280, 70%, 55%)',
        },
        {
          name: 'Prototyping & Wireframing',
          value: 48,
          percentage: '48%',
          color: 'hsl(280, 70%, 60%)',
        },
        {
          name: 'Empathy & User-Centered',
          value: 47,
          percentage: '47%',
          color: 'hsl(280, 70%, 65%)',
        },
      ],
    },
    {
      name: 'Technical & Systems',
      color: 'hsl(160, 70%, 45%)',
      children: [
        {
          name: 'Design Systems',
          value: 48,
          percentage: '48%',
          color: 'hsl(160, 70%, 40%)',
        },
        {
          name: 'Multi-platform Design',
          value: 28,
          percentage: '28%',
          color: 'hsl(160, 70%, 45%)',
        },
        {
          name: 'HTML/CSS/JS Basics',
          value: 23,
          percentage: '23%',
          color: 'hsl(160, 70%, 50%)',
        },
      ],
    },
    {
      name: 'Business & Strategy',
      color: 'hsl(30, 70%, 50%)',
      children: [
        {
          name: 'Business Vision & Alignment',
          value: 38,
          percentage: '38%',
          color: 'hsl(30, 70%, 45%)',
        },
        {
          name: 'Strategic Thinking',
          value: 25,
          percentage: '25%',
          color: 'hsl(30, 70%, 50%)',
        },
      ],
    },
    {
      name: 'Emerging Skills',
      color: 'hsl(330, 70%, 50%)',
      children: [
        {
          name: 'AI Literacy',
          value: 41,
          percentage: '41%',
          color: 'hsl(330, 70%, 45%)',
          note: 'Top digital skill priority',
        },
        {
          name: 'Accessibility Expertise',
          value: 44,
          percentage: '44%',
          color: 'hsl(330, 70%, 50%)',
          note: 'Higher priority than 2023',
        },
        {
          name: 'No-code Platforms',
          value: 20,
          percentage: '20%',
          color: 'hsl(330, 70%, 55%)',
          note: 'Growing requirement',
        },
      ],
    },
  ],
};

const designerSkillsData = [
  { value: 30, label: 'Soft Skills', color: '#facc15', formattedValue: '30%' },
  { value: 25, label: 'Design Process', color: '#38bdf8', formattedValue: '25%' },
  { value: 20, label: 'Front-end Skills', color: '#a3e635', formattedValue: '20%' },
  { value: 12, label: 'User Research', color: '#2dd4bf', formattedValue: '12%' },
  { value: 8, label: 'Emerging Tech (AI/No-code)', color: '#e879f9', formattedValue: '8%' },
  { value: 5, label: 'Business Strategy', color: '#fb7185', formattedValue: '5%' },
];

const size = {
  width: 400,
  height: 400,
  margin: { bottom: 15 },
};
const TOTAL = designerSkillsData.map(item => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function Playground() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <TopDivider />
      <div className="Header sticky top-0 flex flex-row p-4 w-full h-auto md:h-[88px] border-b border-stone-900 items-center justify-start gap-4 bg-amber-50 z-10">
        <Menu />
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-stone-900">Playground</h1>

          <Button
            label="Hard Reload"
            type="secondary"
            size="medium"
            endIcon={<CachedRoundedIcon />}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.reload();
              }
            }}
          />
        </div>
      </div>
      <div className="Body__Playground flex flex-col  w-full h-dvh ">
        <div className="Playground__Nav flex flex-col md:flex-row w-full h-auto items-center justify-center   bg-amber-200  border-b p-4 border-stone-900 ">
          <div className="text-md ">Charts</div>
        </div>
        {/* Content Start*/}
        {/* Content Start*/}
        {/* Content Start*/}
        <div className="w-full h-full flex items-center gap-4 justify-center">
          <PieChart
            series={[
              {
                data: designerSkillsData,
                highlightScope: { fade: 'global', highlight: 'item' },
                arcLabel: getArcLabel,
                innerRadius: 30,
              },
            ]}
            {...size}
            slotProps={{
              legend: {
                direction: 'horizontal',
                position: { vertical: 'bottom', horizontal: 'center' },
              },
            }}
          ></PieChart>
          <DesignSkillPie />
        </div>
        {/* Content End*/}
        {/* Content End*/}
        {/* Content End*/}
      </div>
      <Footer />
    </div>
  );
}
