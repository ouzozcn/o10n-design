import type { Metadata } from 'next';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tech Stack | Oguzhan Ozcan',
  description:
    'Tools I use to design, build, and ship thoughtful, accessible, and scalable digital products. Including Figma, React, TypeScript, Tailwind CSS, and more.',
  alternates: {
    canonical: 'https://o10n.design/tech-stack',
  },
  openGraph: {
    title: 'Tech Stack | Oguzhan Ozcan',
    description:
      'Tools I use to design, build, and ship thoughtful, accessible, and scalable digital products. Including Figma, React, TypeScript, Tailwind CSS, and more.',
    url: 'https://o10n.design/tech-stack',
  },
};

export default function TechStack() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <div className="md:sticky md:top-0 md:z-10 flex flex-col md:flex-row w-auto border-b border-stone-900 bg-theme-primary">
        <MenuItem
          to="/"
          className="flex-1 md:border-b-0 border-r-0 md:border-r border-stone-900 text-center"
          title="Home"
        />
        <MenuItem
          to="/about-me"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="About Me"
        />
        <MenuItem
          to="/tech-stack"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900 bg-purple-200 hover:bg-purple-200 cursor-default"
          title="Tech Stack"
        />
        <MenuItem
          to="/contact"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Contact"
        />
        <MenuItem
          to="/docs"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="</docs>"
        />
      </div>

      <div className="PageHero flex flex-col p-8 md:p-32 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Tech Stack
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Tools I use to design, build, and ship thoughtful, accessible, and scalable digital
          products.
        </h2>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-lime-100 md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">Figma</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            My primary design tool for everything from wireframes to high-fidelity UI. I use Figma
            not just for visuals, but for system thinking — components, variants, tokens, and
            collaborative handoff with devs.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-pink-100 md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">Adobe Creative Suite</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Primarily Illustrator and Photoshop for custom illustrations, vector assets, image
            editing, and visual polish beyond UI needs.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-yellow-100 md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">React + TypeScript</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            My go-to stack for building interactive interfaces and components. I use TypeScript for
            safe, predictable code and better dev experience.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-violet-100 md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">Tailwind CSS</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I prefer utility-first CSS for its scalability and speed. I also define and manage
            custom color tokens for consistent theming.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-amber-100 md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">React Flow</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I use it to build node-based interfaces and interactive canvas systems — especially for
            data-driven or visual workflows (like Hydrogen and Growth Agent dashboards).
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-red-100 md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">Storybook</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I use Storybook to document, test, and validate React components in isolation — helping
            design and dev stay aligned.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-purple-100 md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans">Chromatic</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            For visual regression testing and design system CI/CD. I integrate it with Storybook to
            catch UI inconsistencies before they reach production.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-gray-600 md:border-r border-b border-stone-900">
          <p className="text-2xl m-8 font-sans text-lime-300">Git + GitHub</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-b border-stone-900 gap-4">
          <p className="text-lg font-sans">
            Version control, code reviews, and team collaboration. I use feature branching and
            commit conventions to keep everything clean and maintainable.
          </p>
        </div>
      </div>

      <div className="TechStackItem flex flex-col md:flex-row w-full h-full text-stone-900 border-stone-900">
        <div className="SectionTitle flex grow-1 w-full h-auto items-center justify-center bg-rose-100 md:border-r border-stone-900">
          <p className="text-2xl m-8 font-sans">Jupyter Notebooks</p>
        </div>
        <div className="SectionContent flex flex-col grow-1 w-full h-full p-8 border-stone-900 gap-4">
          <p className="text-lg font-sans">
            I analyze behavioral and product data using Python, Pandas, and Matplotlib. Great for
            making informed design decisions with real usage data.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
