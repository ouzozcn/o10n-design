'use client';
import React from 'react';
import TopDivider from '@/components/TopDivider';
import Menu from '@/components/Menu';
import Button from '@/components/Button';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import Footer from '@/components/Footer';

{
  /* Component dependencies start*/
}
/// import any components you plan to use in the playground here

import { ResponsiveTreeMapCanvas } from '@nivo/treemap';
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
        <div className="Playground__Nav flex flex-col md:flex-row w-full min-h-24 items-center justify-center  gap-4 lg:gap-24 bg-amber-200  border-b lg:p-8 border-stone-900 ">
          <div className="flex-col gap-2">
            <div className="text-md ">Current Project</div>
            <div className="text-lg font-semibold">Project Name Goes Here</div>
          </div>
          <div className="flex-col gap-2">
            <div className="text-md  "> Start Date</div>
            <div className="text-lg font-semibold">Project Start Date Goes Here</div>
          </div>
        </div>
        {/* Content Start*/}
        {/* Content Start*/}
        {/* Content Start*/}
        <ResponsiveTreeMapCanvas
          data={treeMapData}
          value="value"
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          tile="squarify"
          innerPadding={2}
          padRootToSquare={true}
          borderWidth={1}
          borderColor="rgba(0, 0, 0, 0.1)"
        />

        {/* Content End*/}
        {/* Content End*/}
        {/* Content End*/}
      </div>
      <Footer />
    </div>
  );
}
