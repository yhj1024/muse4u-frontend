import React from 'react';
// This import will work after running the SVG conversion script
// import { Home, Idea, Notice, Search, Subscribe } from '@/components/icons';

export default function IconsExamplePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">SVG Icon Components</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Uncomment after running the SVG conversion script */}
        {/* 
        <div className="p-4 border rounded-lg flex flex-col items-center">
          <Home className="w-12 h-12 text-blue-500" />
          <p className="mt-2 text-center">Home Icon</p>
        </div>
        
        <div className="p-4 border rounded-lg flex flex-col items-center">
          <Idea className="w-12 h-12 text-yellow-500" />
          <p className="mt-2 text-center">Idea Icon</p>
        </div>
        
        <div className="p-4 border rounded-lg flex flex-col items-center">
          <Notice className="w-12 h-12 text-red-500" />
          <p className="mt-2 text-center">Notice Icon</p>
        </div>
        
        <div className="p-4 border rounded-lg flex flex-col items-center">
          <Search className="w-12 h-12 text-green-500" />
          <p className="mt-2 text-center">Search Icon</p>
        </div>
        
        <div className="p-4 border rounded-lg flex flex-col items-center">
          <Subscribe className="w-12 h-12 text-purple-500" />
          <p className="mt-2 text-center">Subscribe Icon</p>
        </div>
        */}
        
        <div className="p-4 border rounded-lg flex flex-col items-center">
          <p className="text-center">Run the SVG conversion script first, then uncomment the components above</p>
          <pre className="mt-4 bg-gray-100 p-2 rounded text-sm">pnpm svgr</pre>
        </div>
      </div>
    </div>
  );
}
