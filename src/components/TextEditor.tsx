import { useState } from 'react';
import { Bold, Italic, List, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import LabeledInput from './LabeledInput';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const TextEditor = () => {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleSubmit = async () => {
    setLoading(true);
    const res = await axiosInstance.post('/blog', {title, content});
    if (res.status === 200) {
        setLoading(false);
        navigate(`/blog/${res.data.blog.id}`);
    }
  }

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
        <LabeledInput label='Title' placeholder='Enter title ' type='text' onChange={(e) => setTitle(e.target.value)}/>
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b border-gray-200 mb-4">
        <button
          onClick={() => handleFormat('bold')}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          title="Bold"
        >
          <Bold className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => handleFormat('italic')}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          title="Italic"
        >
          <Italic className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => handleFormat('insertUnorderedList')}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          title="Bullet List"
        >
          <List className="w-5 h-5 text-gray-700" />
        </button>
        <div className="h-6 w-px bg-gray-200 mx-2" />
        <button
          onClick={() => handleFormat('justifyLeft')}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          title="Align Left"
        >
          <AlignLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => handleFormat('justifyCenter')}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          title="Align Center"
        >
          <AlignCenter className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => handleFormat('justifyRight')}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          title="Align Right"
        >
          <AlignRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Editor Area */}
      {/* Editor Area */}
      <div
        className="min-h-[200px] p-4 focus:outline-none"
        contentEditable
        onInput={(e) => setContent(e.currentTarget.textContent || '')}
      />


      {/* Character Count */}
      <div className="text-sm text-gray-500 mt-2">
        Characters: {content.length}
      </div>

      <div className='border-t-1 border-gray-200 pt-4 flex justify-end' >
            <Button onClick={handleSubmit} loading={loading} loadingText='publishing...' title='Publish Post' />
      </div>
    </div>
  );
};

export default TextEditor;