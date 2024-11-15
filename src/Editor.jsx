// src/components/Editor.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import './Editor.css'
function Editor() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const quillRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadDocument = async () => {
      if (id !== 'new') {
        const docRef = doc(db, 'documents', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title || '');  // Set the title if it exists
          setContent(data.content);
        }
      }
    };

    loadDocument();
  }, [id]);

  const saveDocument = async () => {
    try {
      if (id !== 'new') {
        const docRef = doc(db, 'documents', id);
        await setDoc(docRef, { title, content }, { merge: true });
        alert("Document updated successfully!");
        setContent('');  // Clear the content after saving
        navigate('/');  // Redirect to the home page
      }
    } catch (error) {
      alert("Error saving document: " + error.message);
    }
  };

  return (
    <div>
      <h2 className="title">{title}</h2>  {/* Display the document title */}
      <ReactQuill ref={quillRef} value={content} onChange={setContent} />
      <button className='button' onClick={saveDocument}>Save</button>
    </div>
  );
}

export default Editor;
