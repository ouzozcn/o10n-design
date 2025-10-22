import { PieChart } from '@mui/x-charts/PieChart';
import { DefaultizedPieValueType } from '@mui/x-charts/models';

const designerSkillsData = [
  { value: 30, label: 'Soft Skills', color: '#fde047', formattedValue: '30%' },
  { value: 25, label: 'Design Process', color: '#bae6fd', formattedValue: '25%' },
  { value: 20, label: 'Front-end Skills', color: '#bef264', formattedValue: '20%' },
  { value: 12, label: 'User Research', color: '#6ee7b7', formattedValue: '12%' },
  { value: 8, label: 'Emerging Tech (AI/No-code)', color: '#d8b4fe', formattedValue: '8%' },
  { value: 5, label: 'Business Strategy', color: '#fca5a5', formattedValue: '5%' },
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

export default function DesignSkillPie() {
  return (
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
  );
}
