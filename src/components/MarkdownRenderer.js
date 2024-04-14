import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import ReactMarkdown from 'react-markdown';

import markTest from './test.md'
import remarkGfm from 'remark-gfm'

function MarkdownRenderer({ filePath }) {
  const [markdown, setMarkdown] = useState('loading description...');

  // useEffect( () => {
  //   const fetchMD = async() => {
  //     const file = await import(`../games/${filePath}.md`)
  //     const response = await fetch(file.default);
  //     const text = await response.text();

  //     setMarkdown(text)
  //   }

  //   fetchMD()
  // }, [filePath])


  const mdPath = require(`../games/${filePath}.md`)
  useEffect(() => {
    const fetchMD = () => {
        fetch(mdPath)
        .then(response => response.text())
        .then(text => setMarkdown(text))
        .catch(error => console.error('Error fetching markdown:', error));
    };
  
    fetchMD();
  }, [mdPath]);



  // const markdown = "*just* a link: [link](https://zevdev.net)"
 return(
  <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdown}></ReactMarkdown>

  
 )
}


export default MarkdownRenderer;
