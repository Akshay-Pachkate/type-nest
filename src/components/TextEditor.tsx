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

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
        <LabeledInput label='Title' placeholder='Enter title ' type='text' onChange={(e) => setTitle(e.target.value)}/>
      {/* Toolbar */}
      <div className="">        
        <label htmlFor='content' className="block mb-2 text-sm font-medium text-gray-900 ">Content</label>
        <textarea rows="10" onChange={e => setContent(e.target.value)} type="text" id="content" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='write content here...'  />
      </div>

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