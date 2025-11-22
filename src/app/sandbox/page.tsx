'use client';
import React from 'react';
import Button from '@/components/Button';
import CachedRoundedIcon from '@mui/icons-material/CachedRounded';
import Footer from '@/components/Footer';
import {
  SandboxCodeEditor,
  SandboxConsole,
  SandboxFileExplorer,
  SandboxLayout,
  SandboxPreview,
  SandboxProvider,
  SandboxTabs,
  SandboxTabsContent,
  SandboxTabsList,
  SandboxTabsTrigger,
} from '@/components/kibo-ui/sandbox';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { AppWindowIcon, CodeIcon, TerminalIcon } from 'lucide-react';
export default function Sandbox() {
  return (
    <div className="w-full  border-collapse  min-h-screen bg-[#151515]">
      <div className="Header sticky top-0 flex flex-row p-4 w-full h-auto md:h-[88px] border-b border-stone-500 items-center justify-start gap-4 bg-[#151515] z-10">
        <div className="HeaderTitle w-full flex flex-col md:flex-row place-content-between gap-4 items-start md:items-center">
          <h1 className="text-xl md:text-2xl font-sans text-lime-100">Sandbox</h1>
          <div className="flex flex-row gap-2">
            <Button
              className="h-[58px] border-lime-100  text-lime-100 hover:bg-stone-800"
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
      </div>
      <div className="Body__Lab flex flex-col w-full h-dvh">
        <SandboxProvider
          files={{
            '/index.js': {
              code: `import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Welcome to o10n Sandbox</h1>
      <p>This is a basic sandbox playground for React</p>
      <p> To edit this sandbox, click the code tab above and navigate to the index.js file</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
            },
            '/styles.css': {
              code: `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}`,
            },
            '/components/Button.js': {
              code: `import React from 'react';

export function Button({ children, onClick, variant = 'primary' }) {
  const baseStyles = 'px-4 py-2 rounded font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };

  return (
    <button 
      className={\`\${baseStyles} \${variants[variant]}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}`,
            },
            '/utils/helpers.js': {
              code: `export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`,
            },
          }}
          template="react"
          theme="dark"
        >
          <SandboxLayout>
            <SandboxTabs defaultValue="preview">
              <SandboxTabsList>
                <SandboxTabsTrigger value="code">
                  <CodeIcon size={14} />
                  Code
                </SandboxTabsTrigger>
                <SandboxTabsTrigger value="preview">
                  <AppWindowIcon size={14} />
                  Preview
                </SandboxTabsTrigger>
                <SandboxTabsTrigger value="console">
                  <TerminalIcon size={14} />
                  Console
                </SandboxTabsTrigger>
              </SandboxTabsList>
              <SandboxTabsContent className="overflow-hidden" value="code">
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel
                    className="overflow-y-auto"
                    defaultSize={25}
                    maxSize={40}
                    minSize={20}
                  >
                    <SandboxFileExplorer />
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel className="overflow-y-auto">
                    <SandboxCodeEditor className="h-dvh" />
                  </ResizablePanel>
                </ResizablePanelGroup>
              </SandboxTabsContent>
              <SandboxTabsContent value="preview">
                <SandboxPreview showOpenInCodeSandbox={true} showRefreshButton={true} />
              </SandboxTabsContent>
              <SandboxTabsContent value="console">
                <SandboxConsole />
              </SandboxTabsContent>
            </SandboxTabs>
          </SandboxLayout>
        </SandboxProvider>
      </div>
      <Footer />
    </div>
  );
}
